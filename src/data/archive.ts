import type { Letter, Lesson, Memory, Teacher } from '../types'

export const teachers: Teacher[] = [
  {
    id: 'ananya-sen', name: 'Ananya Sen', subject: 'English Literature', designation: 'Senior Teacher', initials: 'AS', years: '2016—2022', accent: '#c66d7d',
    portrait: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    shortIntroduction: 'She made a room full of students feel that their own voice belonged on the page.',
    whatTheyTaught: 'English Literature', whatTheyReallyTaughtMe: 'To read slowly, notice carefully, and trust the shape of an unfinished thought.',
    personalMessage: 'Some lessons are still waiting in the margins.'
  },
  {
    id: 'rajat-mehra', name: 'Rajat Mehra', subject: 'Mathematics', designation: 'Head of Department', initials: 'RM', years: '2015—2021', accent: '#a77c57',
    portrait: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85',
    shortIntroduction: 'A patient guide through every stubborn problem, in class and beyond it.',
    whatTheyTaught: 'Mathematics', whatTheyReallyTaughtMe: 'That precision is a form of care—and difficult answers deserve another attempt.',
    personalMessage: 'The answer was never the only point.'
  },
  {
    id: 'meera-joshi', name: 'Meera Joshi', subject: 'History', designation: 'Teacher & Mentor', initials: 'MJ', years: '2017—2023', accent: '#837f55',
    portrait: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    shortIntroduction: 'She taught the past as if it were a living thing, always asking something of the present.',
    whatTheyTaught: 'History', whatTheyReallyTaughtMe: 'To ask whose story is missing, and to make room for it.',
    personalMessage: 'History stays warm in the hands that carry it forward.'
  }
]

export const memories: Memory[] = [
  { id: 'm1', teacherId: 'ananya-sen', title: 'The day the poem waited', date: 'September 2019', text: 'You let the silence after the last line stay. Nobody rushed to answer. It was the first time a classroom felt like a place where quiet could mean something.', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=85', visibility: 'public' },
  { id: 'm2', teacherId: 'rajat-mehra', title: 'A margin full of workings', date: 'February 2020', text: 'Every crossed-out calculation was met with the same small note: “Almost. Stay with it.” The paper came back looking less like failure and more like a map.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85', visibility: 'public' },
  { id: 'm3', teacherId: 'meera-joshi', title: 'Maps after rain', date: 'July 2021', text: 'We stood by the library window and traced old trade routes with our fingers. Outside, rain redrew the courtyard. You said every map begins with someone looking farther.', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=85', visibility: 'public' }
]

export const lessons: Lesson[] = [
  { id: 'l1', teacherId: 'ananya-sen', subject: 'English Literature', title: 'Reading between the lines', academicLesson: 'Close reading and voice', lifeLesson: 'Pay attention to what is not said. It is often where the truth is keeping itself.', quote: '“A good question is a kind of listening.”', visibility: 'public' },
  { id: 'l2', teacherId: 'rajat-mehra', subject: 'Mathematics', title: 'The elegance of trying again', academicLesson: 'Algebraic proof', lifeLesson: 'Patience, precision, and the courage to begin from the first line one more time.', quote: '“The page is patient with you.”', visibility: 'public' },
  { id: 'l3', teacherId: 'meera-joshi', subject: 'History', title: 'The stories behind dates', academicLesson: 'Historical inquiry', lifeLesson: 'Context changes everything. So does curiosity about who has been left out.', quote: '“The past is not behind us; it is beneath us.”', visibility: 'public' }
]

export const letters: Letter[] = [
  { id: 'letter-1', teacherId: 'ananya-sen', title: 'For the teacher who gave words a home', author: 'A former student', content: 'Dear Ma’am,\n\nYou never asked us to be brilliant. You asked us to be honest. Years later, I still hear that invitation whenever I hesitate before a blank page.\n\nThank you for teaching us that our voices were worth the room.', visibility: 'public' },
  { id: 'letter-2', teacherId: 'rajat-mehra', title: 'For the teacher who made room for mistakes', author: 'A former student', content: 'Sir,\n\nYou made difficult things feel survivable. Not easy—never that—but possible, step by patient step.\n\nI carry that method into every hard day.', visibility: 'public' },
  { id: 'letter-3', teacherId: 'meera-joshi', title: 'For the keeper of stories', author: 'A former student', content: 'Ma’am,\n\nYou taught us that remembering is an act of attention. This small archive is one way of paying it forward.\n\nWith gratitude, always.', visibility: 'public' }
]
