import { Module } from '@nestjs/common';
import { UserGamesListService } from './user-games-list.service';
import { UserGamesListController } from './user-games-list.controller';

@Module({
  controllers: [UserGamesListController],
  providers: [UserGamesListService]
})
export class UserGamesListModule {}
