import { PartialType } from '@nestjs/swagger';
import { CreateUserGamesListDto } from './create-user-games-list.dto';

export class UpdateUserGamesListDto extends PartialType(CreateUserGamesListDto) {}
