import {
  Get,
  Body,
  Param,
  Patch,
  Delete,
  Controller,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequest } from './user.model';

@Controller('user')
@UsePipes(new ValidationPipe())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() userRequest: UserRequest) {
    const newUser = await this.userService.insertUser(
      userRequest.fullName,
      userRequest.email,
      userRequest.passward,
      userRequest.userTypeId,
    );
    return { status: true, msg: 'user created sucessfully', newUser: newUser };
  }
}
