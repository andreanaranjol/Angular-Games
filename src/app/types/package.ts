export interface Test {
  id: string;
  name: string;
  description: string;
  package?: Package;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  logo: string;
  quizzes: Quiz[];
  exams: Exam[];
}

export interface Quiz extends Test {
  postUrl: string;
  questions: Question[];
}

export interface Exam extends Test {
  exercises: Exercise[];
}

export interface Question {
  id: string;
  question: string;
  snippet?: boolean;
  options: string[];
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  snippet?: boolean;
  code: string;
  exam?: Exam;
}
