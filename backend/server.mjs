import { createHmac, timingSafeEqual } from 'node:crypto'
import { createServer } from 'node:http'

const PORT = Number(process.env.TEACHER_ARCHIVE_API_PORT ?? 4174)
const TOKEN_SECRET = process.env.TEACHER_ARCHIVE_TOKEN_SECRET ?? 'teacher-archive-2026-local-secret'

const users = {
  Srabani_Mam: { password: 'Srabani_Mam', role: 'teacher', teacherId: 'Srabani_Mam', redirectTo: '/teacher/Srabani_Mam' },
  English_Mam: { password: 'English_Mam', role: 'teacher', teacherId: 'English_Mam', redirectTo: '/teacher/English_Mam' },
  Trina_Mam: { password: 'Trina_Mam', role: 'teacher', teacherId: 'Trina_Mam', redirectTo: '/teacher/Trina_Mam' },
  Surya_Sir: { password: 'Surya_Sir', role: 'teacher', teacherId: 'Surya_Sir', redirectTo: '/teacher/Surya_Sir' },
  Dada: { password: 'Dada', role: 'teacher', teacherId: 'Soumyadeep', redirectTo: '/teacher/Soumyadeep' },
  Soumyadeep: { password: 'Soumyadeep', role: 'teacher', teacherId: 'Soumyadeep', redirectTo: '/teacher/Soumyadeep' },
  Anamika_Mam: { password: 'Anamika_Mam', role: 'teacher', teacherId: 'Anamika_Mam', redirectTo: '/teacher/Anamika_Mam' },
  Soma_Mam: { password: 'Soma_Mam', role: 'teacher', teacherId: 'Soma_Mam', redirectTo: '/teacher/Soma_Mam' },
  Aparna_Mam: { password: 'Aparna_Mam', role: 'teacher', teacherId: 'Aparna_Mam', redirectTo: '/teacher/Aparna_Mam' },
  'H.O.D_Mam': { password: 'H.O.D_Mam', role: 'teacher', teacherId: 'HOD_Mam', redirectTo: '/teacher/HOD_Mam' },
  HOD_Mam: { password: 'HOD_Mam', role: 'teacher', teacherId: 'HOD_Mam', redirectTo: '/teacher/HOD_Mam' },
  Amit_Sir: { password: 'Amit_Sir', role: 'teacher', teacherId: 'Amit_Sir', redirectTo: '/teacher/Amit_Sir' },
  Rubi_Mam: { password: 'Rubi_Mam', role: 'teacher', teacherId: 'Rubi_Mam', redirectTo: '/teacher/Rubi_Mam' },
  Nandita_Mam: { password: 'Nandita_Mam', role: 'teacher', teacherId: 'Nandita_Mam', redirectTo: '/teacher/Nandita_Mam' },
  SnehaGhosh: { password: 'SnehaGhosh', role: 'admin', teacherId: null, redirectTo: '/' },
}

function sendJson(request, response, status, body) {
  const origin = request.headers.origin || '*'
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Credentials': 'true',
  })
  response.end(JSON.stringify(body))
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk
      if (body.length > 1_000_000) request.destroy()
    })
    request.on('end', () => resolve(body))
    request.on('error', reject)
  })
}

function sign(payload) {
  return createHmac('sha256', TOKEN_SECRET).update(payload).digest('base64url')
}

function createToken(session) {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url')
  return `${payload}.${sign(payload)}`
}

function readSession(request) {
  const header = request.headers.authorization ?? ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return null

  const expected = sign(payload)
  const left = Buffer.from(signature)
  const right = Buffer.from(expected)
  if (left.length !== right.length || !timingSafeEqual(left, right)) return null

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString())
    if (typeof session.exp !== 'number' || session.exp < Date.now()) return null
    return session
  } catch {
    return null
  }
}

async function handleLogin(request, response) {
  const rawBody = await readBody(request)
  const { username, password } = JSON.parse(rawBody || '{}')
  const user = users[String(username ?? '')]

  if (!user || user.password !== String(password ?? '')) {
    sendJson(request, response, 401, { message: 'Invalid username or password.' })
    return
  }

  const session = {
    username,
    role: user.role,
    teacherId: user.teacherId,
    redirectTo: user.redirectTo,
    exp: Date.now() + 1000 * 60 * 60 * 8,
  }

  sendJson(request, response, 200, { token: createToken(session), user: session })
}

function handleSession(request, response) {
  const session = readSession(request)
  if (!session) {
    sendJson(request, response, 401, { message: 'Session expired. Please log in again.' })
    return
  }

  sendJson(request, response, 200, { user: session })
}

const server = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(request, response, 204, {})
    return
  }

  try {
    if (request.url === '/api/login' && request.method === 'POST') {
      await handleLogin(request, response)
      return
    }

    if (request.url === '/api/session' && request.method === 'GET') {
      handleSession(request, response)
      return
    }

    sendJson(request, response, 404, { message: 'Not found.' })
  } catch {
    sendJson(request, response, 400, { message: 'Bad request.' })
  }
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Teacher Archive auth API running on port ${PORT}`)
})
