export type Course = {
  imageUrl: string;
  id: string;
  title: string;
  description: string;
  duration: number;
  startDate: string;
  fee: number;
  classes: {
    online: ClassDetail[];
    weekend: ClassDetail[];
    weekday: ClassDetail[];
  };
};

type ClassDetail = {
  id: string;
  title: string;
  courseId: string;
  description: string;
  preference: "online" | "weekend" | "weekday";
  startDate: string;
  endDate: string;
  fee: number;
  tutors: Tutor[];
  students: Student[];
  resources: Resources;
  createdAt: string;
};

type Tutor = {
  id: string;
  name: string;
  avatar: string | null;
};

type Student = {
  // Define the student type if needed, currently assumed to be an empty array
};

type Resources = {
  audio: string[];
  video: string[];
  document: string[];
};
