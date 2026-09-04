import type { ArchiveLetter, TeacherData, TeacherProfile } from '../types/teacher'

// Archive content only. Authentication credentials intentionally belong in Firebase Auth, never here.
export const teachersData: TeacherData = {
  'Srabani_Mam': { id: 'Srabani_Mam', initials: 'SM', name: 'Srabani Mam', poem: `Dear Srabani Mam,
You taught me lessons beyond the books,
With patient words and thoughtful looks.
You stayed beside me when things felt tough,
And made the hardest lessons feel less rough.
Years have passed, and I’ve moved ahead,
But your guidance still stays in my head.
I may be in college, walking a different way,
But I’ll always remember the teachers who shaped my days.` },
  'English_Mam': { id: 'English_Mam', initials: 'EM', name: 'English Mam', designation: 'English', poem: `Dear English Mam, my deepest gratitude is yours,
You have been my North Star through life’s changing shores.
With every lesson, you gave me more than words,
And gave me courage when my voice went unheard.
Your kindness taught me to understand and care,
You guided me with a warmth beyond compare.
Like a second mother, you stood beside me,
Your faith helped me become who I wished to be.
The language you taught became part of my soul,
Foundation of the confidence that made me whole.
Thank you, Mam, for shaping the person I’ve grown to be,
For wherever life takes me, a part of you will always live in me.` },
  'Trina_Mam': { id: 'Trina_Mam', initials: 'TM', name: 'Trina Mam', poem: `Dear Trina Mam, 
You made every lesson bright,
Your guidance made things right.
You taught with patience and care,
Making every doubt easier to bear.
Thank you for helping me grow,
For teaching more than books could show.
Your lessons will stay with me,
Happy Teachers’ Day, with gratitude from me.` },
  'Surya_Sir': { id: 'Surya_Sir', initials: 'SS', name: 'Surya Sir', poem: `Dear Surya Sir, a mentor I deeply admire,
You taught me to work with discipline and desire.
With patience, you showed me the value of consistency,
And helped me turn small efforts into persistence.
Your lessons went far beyond what books could teach,
You built the foundation of the person I strive to be.
Like Dronacharya, you shaped my path from the start,
Your guidance became a quiet strength in my heart.
The discipline I carry today began with you,
Foundation you built still holds me steady and true.
Thank you, Sir, for believing in me and helping me grow,
But most of all, thank you for shaping who I am today.` },
  'Anamika_Mam': { id: 'Anamika_Mam', initials: 'AM', name: 'Anamika Mam', poem: `Dear Anamika Mam,
You taught me lessons beyond the books,
With patient words and thoughtful looks.
You stayed beside me when things felt tough,
And made the hardest lessons feel less rough.
Years have passed, and I’ve moved ahead,
But your guidance still stays in my head.
I may be in college, walking a different way,
But I’ll always remember the teachers who shaped my days.` },
  'Soma_Mam': { id: 'Soma_Mam', initials: 'SM', name: 'Soma Mam', poem: `Dear Soma Mam, 
You brought warmth to every lesson,
To every doubt, you gave attention.
Your words made difficult things feel clear,
Making every challenge seem less to fear.
You taught with patience, care, and grace,
Making every lesson a brighter place.
Your guidance still stays with me today,
Like a quiet light that never fades away.
Thank you for believing in me,
For teaching far beyond what books could be.
Towards every dream, you helped me grow,
Happiness and knowledge began to flow.
Happy Teachers’ Day to the teachers who made
Learning a journey I’ll never forget.` },
  'Aparna_Mam': { id: 'Aparna_Mam', initials: 'AM', name: 'Aparna Mam', poem: `Dear Aparna Mam, 
You brought warmth to every lesson,
To every doubt, you gave attention.
Your words made difficult things feel clear,
Making every challenge seem less to fear.
You taught with patience, care, and grace,
Making every lesson a brighter place.
Your guidance still stays with me today,
Like a quiet light that never fades away.
Thank you for believing in me,
For teaching far beyond what books could be.
Towards every dream, you helped me grow,
Happiness and knowledge began to flow.
Happy Teachers’ Day to the teachers who made
Learning a journey I’ll never forget.` },
  'HOD_Mam': { id: 'HOD_Mam', initials: 'HM', name: 'HOD Mam', designation: 'Head of Department', poem: `Dear HOD Mam, a leader wise and true,
We find our path made clear by you.
Your vision gives our dreams their way,
Making every step more bright each day.
With wisdom, grace, and purpose strong,
Fulfilling every learner’s need along.
Your dedication inspires us to strive,
For excellence, where dreams come alive.
Thank you for the guidance you impart,
For shaping minds and inspiring hearts.
Happy Teachers’ Day to you,
Our leader, mentor, and inspiration true.` },
  'Subhasree_Mam': { id: 'Subhasree_Mam', initials: 'SM', name: 'Subhasree Mam', poem: `Dear Subhasree Mam, with grace you lead,
We find in you the strength we need.
Your vision lights the path ahead,
Making each step with purpose tread.
With wisdom deep and spirit strong,
Fulfilling every learner’s need along.
Your dedication inspires us to strive,
For excellence, and dreams to thrive.
Thank you for the faith you impart,
For guiding minds and shaping hearts.
Happy Teachers’ Day to you,
Our inspiration, steadfast and true.` },
  'Amit_Sir': { id: 'Amit_Sir', initials: 'AS', name: 'Amit Sir', poem: `Dear Amit Sir, with knowledge vast,
You make sure learning memories last.
Your methods innovative and new,
Make difficult subjects easy too.

You challenge us to think and grow,
And help us more than we could know.
Your passion for teaching shines so bright,
Filling our minds with pure delight.

Thank you for your tireless way,
Of teaching us from day to day.
Happy Teachers' Day to you,
A mentor wonderful and true!` },
  'Sandhya Mam': { id: 'Sandhya Mam', initials: 'SM', name: 'Sandhya Mam', poem: `Dear Sandhya Mam, 
You never taught from a syllabus or book,
Just believed in the idea, one honest look.
When our plans were shaky, our confidence thin,
You showed us how founders learn to begin.
No marks, no exams — just guidance so true,
Every small startup carries a bit of you.
This Teacher's Day, we simply want to say,
Thank you for showing us the founder's way.` },
  'Rubi_Mam': { id: 'Rubi_Mam', initials: 'RM', name: 'Rubi Mam', poem: `Dear Rubi Mam, 
স্কুলের সেই দিনগুলো আজও মনে পড়ে যায়,
আপনাদের স্নেহে গড়া স্বপ্নগুলো পথ দেখায়।
শুধু বইয়ের পাতায় নয়, জীবন শিখিয়েছেন হাতে ধরে,
ভুলের মাঝে সাহস দিয়েছেন, বারবার নতুন করে।
আজ কলেজের ব্যস্ততায় অনেক দূরে চলে এসেছি,
তবু আপনাদের শেখানো কথাগুলো হৃদয়ে রেখে চলেছি।
সময়ের সাথে বদলেছে শুধু আমার পথের দিশা,
শিক্ষক হিসেবে নয়, জীবনের অংশ হয়ে থাকবেন চিরদিনই আপনারা।` },
  'Nandita_Mam': { id: 'Nandita_Mam', initials: 'NM', name: 'Nandita Mam', poem: `Dear Nandita Mam, 
You brought warmth to every lesson,
To every doubt, you gave attention.
Your words made difficult things feel clear,
Making every challenge seem less to fear.
You taught with patience, care, and grace,
Making every lesson a brighter place.
Your guidance still stays with me today,
Like a quiet light that never fades away.
Thank you for believing in me,
For teaching far beyond what books could be.
Towards every dream, you helped me grow,
Happiness and knowledge began to flow.
Happy Teachers’ Day to the teachers who made
Learning a journey I’ll never forget.` },
  'Soumyadeep': { id: 'Soumyadeep', initials: 'SD', name: 'Soumyadeep Dada', poem: `Dear Dada,
Dear Dada, you’ve always been there,
The one who guides me with such care.
When I’m lost, you help me find my way,
You make things brighter every day.
With your wisdom, I learn and grow,
Your little lessons help me know.
Thank you for always being by my side,
To be my guide through every stride.` }
}

export const teachers: TeacherProfile[] = Object.values(teachersData).map(({ poem: _poem, ...teacher }) => teacher)

export const letters: ArchiveLetter[] = Object.values(teachersData).map(({ id, name, poem }) => ({
  id: `for-${id.toLowerCase().replace(/_/g, '-').replace(/ /g, '-')}`,
  teacherId: id,
  title: `For ${name}`,
  type: 'poem',
  content: poem,
  visibility: 'public',
}))
