import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './dto/user.dto';
  
  @Entity()
  class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.EMPLOYE, 
  })
  role: Role;
}
  export default User;