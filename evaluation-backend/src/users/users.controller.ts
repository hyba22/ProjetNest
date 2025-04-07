import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import User from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
 // @UseGuards(AuthGuard('jwt'))
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto)
    const newUser =  this.usersService.createUser(createUserDto);
    return newUser;
  }
  @Get()
  async getAllUsers(): Promise<User[]> {
    const users = await this.usersService.getAllUsers();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.getUserById(Number(id));
    return user;
  }



  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.usersService.deleteById(Number(id));
  }
}