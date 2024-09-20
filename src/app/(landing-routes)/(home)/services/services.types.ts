// Define types for better clarity and TypeScript support
export type ClassData = {
  id: string;
  title: string;
  courseId: string;
  courseTitle: string;
  description: string;
  preference: string;
  startDate: string;
  endDate: string;
  fee: number;
  tutors: [];
  students: [];
  resources: object;
  createdAt: string;
};
