import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entitiy';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user-create.dto';
import { UserDto } from '../dtos/user';

@Injectable()
export class UserService {
  /**
   *
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async getUsersAsync(): Promise<{ users: UserDto[] }> {
    const users = await this.userRepository.find();
    return {
      users:
        users.map((user) => {
          const newDto = new UserDto();
          newDto.id = user.id;
          newDto.firstName = user.firstName;
          newDto.lastName = user.lastName;
          return newDto;
        }) ?? [],
    };
  }

  createUser(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    const users = this.userRepository.save(user);
  }
}
