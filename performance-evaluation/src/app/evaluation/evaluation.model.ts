export interface Evaluation {
    id?: number;
    employeeId: number;
    reviewerId: number;
    score: number;
    comments: string;
    date: Date;
    rating: number;
  }