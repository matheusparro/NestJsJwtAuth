// user.service.ts
import { Injectable, HttpServer, ConflictException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { HttpExceptionFilter } from 'src/error/http-exception.filter';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {

    const userFound = await this.prisma.user.findFirst({
      where:{
        email: createUserDto.email
      }
    })
    if(userFound) throw  new HttpException("This email alredy used",HttpStatus.BAD_REQUEST)

    const createUser = new CreateUserDto();
    Object.assign(createUser, createUserDto);
    const userEntity = createUser.toUser();

    // Realize quaisquer operações necessárias com a instância de UserEntity aqui
    // Por exemplo, você pode chamar o método encryptPassword()

    await userEntity.encryptPassword();

    // Em seguida, você pode salvar a instância do UserEntity no banco de dados
    const user = await this.prisma.user.create({
      data: userEntity,
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
