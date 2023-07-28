// user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = new CreateUserDto();
    Object.assign(createUser, createUserDto);
    const userEntity = createUser.toUser();

    // Realize quaisquer operações necessárias com a instância de UserEntity aqui
    // Por exemplo, você pode chamar o método encryptPassword()

    await userEntity.encryptPassword();

    // Em seguida, você pode salvar a instância do UserEntity no banco de dados
    const user = await this.prisma.user.create({
      data: userEntity,
      select: { name: true, email: true },
    });

    return user;
  }
  async findAll() {
    const usersFound = await this.prisma.user.findMany();
    return usersFound;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
