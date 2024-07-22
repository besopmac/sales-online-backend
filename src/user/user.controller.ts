import { CreateUserDto } from './dto/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({
      test: 'test',
    });
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
