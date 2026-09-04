import { letters, lessons, memories, teachers } from '../data/archive'
import type { Letter, Lesson, Memory, Teacher } from '../types'

/** Development repository. Replace these implementations with Firebase queries; keep UI consumers unchanged. */
export const archiveService = {
  getPublishedTeachers: async (): Promise<Teacher[]> => teachers,
  getTeacher: async (id: string): Promise<Teacher | undefined> => teachers.find((teacher) => teacher.id === id),
  getMemoriesForTeacher: async (teacherId: string): Promise<Memory[]> => memories.filter((memory) => memory.teacherId === teacherId),
  getLessonsForTeacher: async (teacherId: string): Promise<Lesson[]> => lessons.filter((lesson) => lesson.teacherId === teacherId),
  getLettersForTeacher: async (teacherId: string): Promise<Letter[]> => letters.filter((letter) => letter.teacherId === teacherId),
}
