import { IsEmail, IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';

export enum Role {
  RH = 'rh',
  EMPLOYE = 'employes',
  ADMIN = 'admin',
}

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsNotEmpty()
  @IsIn([Role.RH, Role.EMPLOYE, Role.ADMIN], {
    message: 'Role must be one of: rh, employes, admin',
  })
  role: Role;
}