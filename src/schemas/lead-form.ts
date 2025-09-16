export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  courseId: string;
  cohortId: string;
  joinNewsLetter: boolean;
}

export interface MarketingCycle {
  data: {
    createdAt: string;
    description: string;
    endDate: string;
    id: string;
    startDate: string;
    title: string;
  };
}
