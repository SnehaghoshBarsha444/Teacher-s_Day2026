export type LetterType = 'poem' | 'letter' | 'dedication' | 'tribute'

export interface TeacherProfile {
  id: string
  name: string
  designation?: string
  subject?: string
  initials: string
}

export interface ArchiveLetter {
  id: string
  teacherId: string
  title: string
  type: LetterType
  content: string
  visibility: 'public' | 'teacher' | 'admin'
}

export interface Lesson {
  id: string
  teacherId: string
  title: string
  description: string
  visibility: 'public' | 'teacher' | 'admin'
}

export interface TeacherData {
  [id: string]: TeacherProfile & { poem: string }
}
