// evaluation/models/evaluation.model.ts
export interface Evaluation {
    id?: number;
    employeeId: number;
    reviewerId: number;
    score: number;
    comments?: string;
    date: Date;
    rating: number;
  }
  
  export interface Employee {
    id: number;
    name: string;
    position: string;
  }