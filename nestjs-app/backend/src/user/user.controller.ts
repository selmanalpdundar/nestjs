import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos/user-create.dto';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('users')
  async getUsers() {
    return await this.UserService.getUsersAsync();
  }

  @Post('user/create')
  createUser(@Body() createUserDto: CreateUserDto) {
    this.UserService.createUser(createUserDto);
  }
}
