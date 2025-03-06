import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator';

export enum Role {
  RH = 'rh',
  EMPLOYE = 'employes',
  ADMIN = 'admin',
}

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsIn([Role.RH, Role.EMPLOYE, Role.ADMIN]) 
  role: Role;
}