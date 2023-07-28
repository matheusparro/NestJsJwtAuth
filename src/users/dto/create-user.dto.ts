// createUser.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entity/user.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({ example: 'P@ssw0rd', description: 'The password of the user' })
  password: string;

  // Método para converter o DTO em uma instância do modelo UserEntity
  public toUser(): UserEntity {
    const userEntity = new UserEntity({
      name: this.name,
      email: this.email,
      password: this.password,
    });

    return userEntity;
  }
}
