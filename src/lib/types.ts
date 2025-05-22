
export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Programming' | 'Business' | 'Design' | 'Finance' | 'Marketing';
  instructor: string;
  image: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: {
    courseId: string;
    enrollmentDate: string;
    quizCompleted: boolean;
    quizScore?: number;
    certificateIssued?: boolean;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Certificate {
  id: string;
  userId: string;
  userName: string;
  courseId: string;
  courseTitle: string;
  issueDate: string;
}
