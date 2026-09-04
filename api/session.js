import { createHmac, timingSafeEqual } from 'node:crypto'

const TOKEN_SECRET = process.env.TEACHER_ARCHIVE_TOKEN_SECRET ?? 'teacher-archive-2026-local-secret'

function sign(payload) {
  return createHmac('sha256', TOKEN_SECRET).update(payload).digest('base64url')
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const header = req.headers.authorization ?? ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  const [payload, signature] = token.split('.')

  if (!payload || !signature) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const expected = sign(payload)
  const left = Buffer.from(signature)
  const right = Buffer.from(expected)

  if (left.length !== right.length || !timingSafeEqual(left, right)) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString())
    if (typeof session.exp !== 'number' || session.exp < Date.now()) {
      return res.status(401).json({ message: 'Session expired' })
    }
    return res.status(200).json({ user: session })
  } catch {
    return res.status(401).json({ message: 'Invalid session payload' })
  }
}