export type Course = {
  imageUrl: string;
  id: string;
  title: string;
  description: string;
  about: string;
  duration: number;
  startDate: string;
  fee: number;
  classes: {
    online: ClassDetail[];
    weekend: ClassDetail[];
    weekday: ClassDetail[];
  };
};

export type Cohort = {
  id: string;
  title: string;
  courseId: string;
  // description: string;
  about: string;
  type: string;
  duration: string;
  fee: number | string;
  startDate: string;
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
  resources: Resources;
  createdAt: string;
};

type Tutor = {
  id: string;
  name: string;
  avatar: string | null;
};

type Resources = {
  audio: string[];
  video: string[];
  document: string[];
};
