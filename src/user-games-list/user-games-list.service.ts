import { Injectable } from '@nestjs/common';
import { CreateUserGamesListDto } from './dto/create-user-games-list.dto';
import { UpdateUserGamesListDto } from './dto/update-user-games-list.dto';

@Injectable()
export class UserGamesListService {
  create(createUserGamesListDto: CreateUserGamesListDto) {
    return 'This action adds a new userGamesList';
  }

  findAll() {
    return `This action returns all userGamesList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGamesList`;
  }

  update(id: number, updateUserGamesListDto: UpdateUserGamesListDto) {
    return `This action updates a #${id} userGamesList`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGamesList`;
  }
}
