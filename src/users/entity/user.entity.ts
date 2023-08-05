import { Exclude } from '@nestjs/class-transformer';
import type { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

type UserEntityProps = Omit<User, 'id'>;

export class UserEntity implements User {
  id: number;
  name: string;
  email: string;
  
  @Exclude()
  password: string;

  constructor(props: UserEntityProps) {
    Object.assign(this, props);
  }
  // Método para criptografar a senha antes de salvar o usuário
  async encryptPassword(): Promise<void> {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  // Método para verificar a senha fornecida com a senha criptografada no banco de dados
  async comparePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.password);
  }
}
