import { useEffect, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { letters, teachers } from './data/teachers'
import type { ArchiveLetter, TeacherProfile } from './types/teacher'
import './styles.css'

interface UserSession {
  username: string
  role: 'teacher' | 'admin'
  teacherId: string | null
  redirectTo: string
  exp: number
}

// const API_BASE = 'http://127.0.0.1:4174'
const API_BASE = ''
const TOKEN_KEY = 'teacher_archive_token'

const go = (to: string) => {
  history.pushState({}, '', to)
  dispatchEvent(new PopStateEvent('popstate'))
}

const Back = ({ to = '/' }: { to?: string }) => (
  <button className="archive-back" onClick={() => go(to)}>
    ← BACK
  </button>
)

const Arrow = () => <span aria-hidden="true">→</span>

function Header({ user, onLogout }: { user: UserSession; onLogout: () => void }) {
  return (
    <header className="nav inner-nav">
      <button className="brand" onClick={() => go(user.role === 'admin' ? '/' : user.redirectTo)}>
        THE TEACHER<br />ARCHIVE <sup>2026</sup>
      </button>
      {user.role === 'admin' ? (
        <div className="nav-links-wrap">
          <button className="nav-word" onClick={() => go('/teachers')}>THE FILES</button>
          <button className="nav-word" onClick={() => go('/lessons')}>LESSONS</button>
          <button className="nav-word" onClick={() => go('/memories')}>MEMORIES</button>
          <button className="nav-word" onClick={() => go('/letters')}>LETTERS</button>
        </div>
      ) : (
        <span className="auth-badge">PERSONAL ARCHIVE FILE: {user.username}</span>
      )}
      <button className="logout-btn" onClick={onLogout}>
        LOCK ARCHIVE <span>✕</span>
      </button>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>THE TEACHER ARCHIVE <span>—</span> 2026</p>
      <p>We never really leave the lessons.</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        BACK TO THE TOP ↑
      </button>
    </footer>
  )
}

function LoginView({ onLoginSuccess }: { onLoginSuccess: (token: string, user: UserSession) => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials.')
      }

      localStorage.setItem(TOKEN_KEY, data.token)
      onLoginSuccess(data.token, data.user)
    } catch (err: any) {
      setError(err.message || 'Authentication error.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div className="stamp auth-stamp">
          <span className="stamp-ring" />
          <b>SEALED</b>
          <small>ARCHIVE</small>
          <em>verify</em>
        </div>

        <p className="section-number">CLEARANCE REQUIRED / TEACHER'S DAY 2026</p>
        <h1 className="auth-title">
          THE<br /><i>TEACHER</i><br />ARCHIVE
        </h1>
        <p className="auth-subtitle">Enter your archive credentials to unlock your preserved record.</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">RECORD IDENTITY / USERNAME</label>
            <input
              id="username"
              type="text"
              required
              autoComplete="username"
              // placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSPHRASE</label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'OPENING ARCHIVE...' : <>UNLOCK RECORD <Arrow /></>}
          </button>
        </form>

        <p className="auth-footer-note">All archive entries are preserved and cryptographically signed.</p>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="entry home-entry">
        <div className="entry-meta">PERSONAL COLLECTION &nbsp; / &nbsp; TEACHER'S DAY 2026</div>
        <div className="stamp">
          <span className="stamp-ring" />
          <b>PRESERVED</b>
          <small>09.05.26</small>
          <em>kept with care</em>
        </div>
        <p className="eyebrow">A collection of the people, lessons, and moments that stayed.</p>
        <h1>THE<br /><i>TEACHER</i><br />ARCHIVE</h1>
        <div className="entry-bottom">
          <button className="open-file" onClick={() => go('/teachers')}>OPEN THE ARCHIVE <Arrow /></button>
          <p>Some people teach a subject.<br />Some people become part of the story.</p>
        </div>
      </section>
      <section className="intro section-pad">
        <p className="section-number">01 / A SMALL ACT OF REMEMBERING</p>
        <div className="intro-copy">
          <h2>We eventually leave<br />the classroom.</h2>
          <p>But some lessons follow us quietly, into the work we choose, the questions we ask, and the people we become.</p>
        </div>
        <p className="hand-note">not a tribute.<br />a record of what remains.</p>
      </section>
      <section className="route-preview files-preview" onClick={() => go('/teachers')}>
        <p className="section-number">02 / THE PEOPLE</p>
        <h2>THE <i>TEACHER</i><br />FILES</h2>
        <p>Open the collection of people who made an ordinary classroom a place worth remembering.</p>
        <p className="hand-note section-note">names become anchors<br />when time moves on.</p>
        <button onClick={(e) => { e.stopPropagation(); go('/teachers') }}>ENTER THE FILES <Arrow /></button>
      </section>
      <section className="route-preview lesson-preview" onClick={() => go('/lessons')}>
        <p className="section-number">03 / WHAT STAYED</p>
        <h2>THE LESSONS<br /><i>I CARRY</i></h2>
        <p>A quiet room reserved for the principles that outlived their original lessons.</p>
        <p className="hand-note section-note">some teaching turns<br />into instinct.</p>
        <button onClick={(e) => { e.stopPropagation(); go('/lessons') }}>READ THE LESSONS <Arrow /></button>
      </section>
      <section className="route-preview memory-preview" onClick={() => go('/memories')}>
        <p className="section-number">04 / THE MEMORY ROOM</p>
        <h2>MOMENTS<br /><i>THAT STAYED</i></h2>
        <p>A prepared space for the real memories, small scenes, and classroom fragments still worth keeping.</p>
        <p className="hand-note section-note">not everything important<br />arrives loudly.</p>
        <button onClick={(e) => { e.stopPropagation(); go('/memories') }}>ENTER MEMORIES <Arrow /></button>
      </section>
      <section className="route-preview letter-preview" onClick={() => go('/letters')}>
        <p className="section-number">05 / WORDS THAT TOOK THEIR TIME</p>
        <h2>LETTERS<br /><i>NEVER SENT</i></h2>
        <p>Fourteen preserved pieces, each written for the person who helped shape the way forward.</p>
        <p className="hand-note section-note">the words waited.<br />now they have a room.</p>
        <button onClick={(e) => { e.stopPropagation(); go('/letters') }}>OPEN THE LETTERS <Arrow /></button>
      </section>
    </>
  )
}

function Teachers() {
  return (
    <main className="archive-page">
      <Back to="/" />
      <p className="section-number">THE TEACHER ARCHIVE / FILE INDEX</p>
      <h1 className="page-title">THE <i>TEACHER</i><br />FILES</h1>
      <p className="page-intro">Each file is a small record of presence: a name, a dedication, and the gratitude that stayed.</p>
      <div className="file-index">
        {teachers.map((teacher, index) => (
          <button key={teacher.id} className="file-row" onClick={() => go(`/teacher/${encodeURIComponent(teacher.id)}`)}>
            <span>FILE / {String(index + 1).padStart(2, '0')}</span>
            <b>{teacher.name}</b>
            <em>{teacher.designation ?? 'PERSONAL ARCHIVE'}</em>
            <Arrow />
          </button>
        ))}
      </div>
    </main>
  )
}

function TeacherPage({ teacher, user }: { teacher: TeacherProfile; user: UserSession }) {
  const letter = letters.find((item) => item.teacherId === teacher.id)!
  return (
    <main className="archive-page teacher-page">
      {user.role === 'admin' && <Back to="/teachers" />}
      <p className="section-number">PERSONAL FILE / {teacher.id.toUpperCase()}</p>
      <div className="teacher-hero">
        <div className="monogram">{teacher.initials}</div>
        <div>
          <h1 className="page-title">{teacher.name}</h1>
          <p className="teacher-role">{teacher.designation ?? 'A PRESERVED PERSONAL ARCHIVE'}</p>
          <p className="page-intro">Some people teach a subject. Some people become part of the story.</p>
        </div>
      </div>
      <section className="inside-file">
        <p className="section-number">THE WRITTEN RECORD</p>
        <h2>A note kept<br /><i>for you.</i></h2>
        <p>One personal dedication has been preserved in this file.</p>
        <button className="archival-cta" onClick={() => go(`/letters/${letter.id}`)}>
          OPEN THE LETTER <Arrow />
        </button>
      </section>
      <section className="empty-room">
        <p className="section-number">THE LESSONS I CARRY</p>
        <h2>A space held<br />with care.</h2>
        <p>Lessons and memories are preserved in this private archive for you.</p>
      </section>
    </main>
  )
}

function Letters() {
  return (
    <main className="archive-page letters-page">
      <Back to="/" />
      <p className="section-number">THE TEACHER ARCHIVE / WRITTEN COLLECTION</p>
      <h1 className="page-title">LETTERS<br /><i>NEVER SENT</i></h1>
      <p className="page-intro">Personal poems and dedications—preserved exactly as they were written.</p>
      <div className="letter-grid">
        {letters.map((letter, index) => (
          <button className="letter-file" key={letter.id} onClick={() => go(`/letters/${letter.id}`)}>
            <span>{String(index + 1).padStart(2, '0')} / {letter.type.toUpperCase()}</span>
            <b>{letter.title}</b>
            <em>OPEN LETTER <Arrow /></em>
          </button>
        ))}
      </div>
    </main>
  )
}

function LetterPage({ letter, user }: { letter: ArchiveLetter; user: UserSession }) {
  const teacher = teachers.find((item) => item.id === letter.teacherId)
  const backTarget = user.role === 'admin' ? '/letters' : `/teacher/${user.teacherId}`

  // Keep the original letter content exactly as it is.
  // Only visually separate Aparna Mam's Bengali note so it can use a smaller font.
  const noteMarker = 'Mam, আপনার প্রতি আমার সত্যিকারের কৃতজ্ঞতার একটা কারণ হয়তো আপনি নিজেও জানেন না।'
  const hasBengaliNote = letter.content.includes(noteMarker)

  const poemContent = hasBengaliNote
    ? letter.content.substring(0, letter.content.indexOf(noteMarker)).trim()
    : letter.content

  const bengaliNote = hasBengaliNote
    ? letter.content.substring(letter.content.indexOf(noteMarker)).trim()
    : ''

  return (
    <main className="archive-page letter-page">
      <Back to={backTarget} />

      <article className="opened-letter">
        <p className="section-number">
          ARCHIVE LETTER / {letter.type.toUpperCase()}
        </p>

        <h1 className="page-title">{letter.title}</h1>

        <p className="letter-recipient">
          A preserved dedication for {teacher?.name}
        </p>

        <div className="letter-rule" />

        {/* Main poem */}
        <div className="letter-text">
          {poemContent}
        </div>

        {/* Smaller Bengali personal note */}
        {bengaliNote && (
          <div className="letter-note">
            {bengaliNote}
          </div>
        )}

        <p className="letter-mark">
          THE TEACHER ARCHIVE<br />2026
        </p>
      </article>
    </main>
  )
}

function EmptyArchive({ title, label }: { title: string; label: string }) {
  return (
    <main className="archive-page empty-page">
      <Back to="/" />
      <p className="section-number">{label}</p>
      <h1 className="page-title">{title}</h1>
      <div className="empty-room">
        <p>This room has been prepared for future archive records.</p>
        <p className="small-copy">Nothing has been invented to fill it. When a real lesson or memory is ready to be preserved, it will live here.</p>
      </div>
    </main>
  )
}

function App() {
  const [session, setSession] = useState<UserSession | null>(null)
  const [loading, setLoading] = useState(true)
  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    const update = () => setPath(location.pathname)
    addEventListener('popstate', update)
    return () => removeEventListener('popstate', update)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) {
      setLoading(false)
      return
    }

    fetch(`${API_BASE}/api/session`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setSession(data.user))
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY)
        setSession(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const handleLoginSuccess = (_token: string, user: UserSession) => {
    setSession(user)
    go(user.redirectTo)
  }

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setSession(null)
    go('/')
  }

  if (loading) {
    return <div className="auth-loading">VALIDATING ARCHIVE RECORD...</div>
  }

  if (!session) {
    return <LoginView onLoginSuccess={handleLoginSuccess} />
  }

  // Teacher Access Protection: Teachers can only view their own file or their own letter
  if (session.role === 'teacher') {
    const allowedTeacherId = session.teacherId
    const currentTeacher = teachers.find((t) => t.id === allowedTeacherId)
    const allowedLetter = letters.find((l) => l.teacherId === allowedTeacherId)

    let teacherContent = currentTeacher ? <TeacherPage teacher={currentTeacher} user={session} /> : null

    if (path.startsWith('/letters/') && allowedLetter && path === `/letters/${allowedLetter.id}`) {
      teacherContent = <LetterPage letter={allowedLetter} user={session} />
    }

    return (
      <div key={path} className="page-transition">
        <Header user={session} onLogout={handleLogout} />
        {teacherContent}
        <Footer />
      </div>
    )
  }

  // Admin (Sneha Ghosh) full access router
  const teacher = teachers.find((item) => item.id === decodeURIComponent(path.replace('/teacher/', '')))
  const letter = letters.find((item) => item.id === path.replace('/letters/', ''))

  let page = <Home />
  if (path === '/teachers') page = <Teachers />
  else if (path === '/letters') page = <Letters />
  else if (path === '/lessons') page = <EmptyArchive label="THE LESSONS I CARRY" title="LESSONS TO BE KEPT" />
  else if (path === '/memories') page = <EmptyArchive label="THE MEMORY ROOM" title="MOMENTS TO REMEMBER" />
  else if (path.startsWith('/teacher/') && teacher) page = <TeacherPage teacher={teacher} user={session} />
  else if (path.startsWith('/letters/') && letter) page = <LetterPage letter={letter} user={session} />

  return (
    <div key={path} className="page-transition">
      <Header user={session} onLogout={handleLogout} />
      {page}
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
