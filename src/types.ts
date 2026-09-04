export type Visibility = 'public' | 'teacher' | 'admin'

export interface Teacher {
  id: string
  name: string
  subject: string
  designation: string
  initials: string
  portrait: string
  years: string
  shortIntroduction: string
  whatTheyTaught: string
  whatTheyReallyTaughtMe: string
  personalMessage: string
  accent: string
}

export interface Memory {
  id: string
  teacherId: string
  title: string
  date: string
  text: string
  image: string
  visibility: Visibility
}

export interface Lesson {
  id: string
  teacherId: string
  subject: string
  title: string
  academicLesson: string
  lifeLesson: string
  quote: string
  visibility: Visibility
}

export interface Letter {
  id: string
  teacherId: string
  title: string
  content: string
  author: string
  visibility: Visibility
}
