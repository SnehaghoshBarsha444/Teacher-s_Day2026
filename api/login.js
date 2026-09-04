import { createHmac } from 'node:crypto'

const TOKEN_SECRET = process.env.TEACHER_ARCHIVE_TOKEN_SECRET ?? 'teacher-archive-2026-local-secret'

const users = {
  Srabani_Mam: { password: 'Srabani_Mam', role: 'teacher', teacherId: 'Srabani_Mam', redirectTo: '/teacher/Srabani_Mam' },
  English_Mam: { password: 'English_Mam', role: 'teacher', teacherId: 'English_Mam', redirectTo: '/teacher/English_Mam' },
  Trina_Mam: { password: 'Trina_Mam', role: 'teacher', teacherId: 'Trina_Mam', redirectTo: '/teacher/Trina_Mam' },
  Surya_Sir: { password: 'Surya_Sir', role: 'teacher', teacherId: 'Surya_Sir', redirectTo: '/teacher/Surya_Sir' },
  Dada: { password: 'Dada', role: 'teacher', teacherId: 'Dada', redirectTo: '/teacher/Dada' },
  // Soumyadeep: { password: 'Soumyadeep', role: 'teacher', teacherId: 'Soumyadeep', redirectTo: '/teacher/Soumyadeep' },
  Anamika_Mam: { password: 'Anamika_Mam', role: 'teacher', teacherId: 'Anamika_Mam', redirectTo: '/teacher/Anamika_Mam' },
  Soma_Mam: { password: 'Soma_Mam', role: 'teacher', teacherId: 'Soma_Mam', redirectTo: '/teacher/Soma_Mam' },
  Aparna_Mam: { password: 'Aparna_Mam', role: 'teacher', teacherId: 'Aparna_Mam', redirectTo: '/teacher/Aparna_Mam' },
  // 'H.O.D_Mam': { password: 'H.O.D_Mam', role: 'teacher', teacherId: 'HOD_Mam', redirectTo: '/teacher/HOD_Mam' },
  HOD_Mam: { password: 'HOD_Mam', role: 'teacher', teacherId: 'HOD_Mam', redirectTo: '/teacher/HOD_Mam' },
  Amit_Sir: { password: 'Amit_Sir', role: 'teacher', teacherId: 'Amit_Sir', redirectTo: '/teacher/Amit_Sir' },
  Rubi_Mam: { password: 'Rubi_Mam', role: 'teacher', teacherId: 'Rubi_Mam', redirectTo: '/teacher/Rubi_Mam' },
  Nandita_Mam: { password: 'Nandita_Mam', role: 'teacher', teacherId: 'Nandita_Mam', redirectTo: '/teacher/Nandita_Mam' },
  SnehaGhosh: { password: 'SnehaGhosh', role: 'admin', teacherId: null, redirectTo: '/' },
}

function sign(payload) {
  return createHmac('sha256', TOKEN_SECRET).update(payload).digest('base64url')
}

function createToken(session) {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url')
  return `${payload}.${sign(payload)}`
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { username, password } = req.body || {}
  const user = users[String(username ?? '')]

  if (!user || user.password !== String(password ?? '')) {
    return res.status(401).json({ message: 'Invalid username or password.' })
  }

  const session = {
    username,
    role: user.role,
    teacherId: user.teacherId,
    redirectTo: user.redirectTo,
    exp: Date.now() + 1000 * 60 * 60 * 8,
  }

  return res.status(200).json({
    token: createToken(session),
    user: session,
  })
}