import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  reviewerId: number;

  @Column()
  score: number;

  @Column()
  comments: string;

  @Column()
  date: Date;

  @Column()
  rating: number;  
}
