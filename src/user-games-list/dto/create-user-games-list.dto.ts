

// createUser.dto.ts
import { ApiProperty } from '@nestjs/swagger';

import { UserGamesList } from '../entities/user-games-list.entity';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserGamesListDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: '1', description: 'Id of user' })
  userId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: '1', description: 'Id of Game' })
  gameId: number;

}
