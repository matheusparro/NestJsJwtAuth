import { Test, TestingModule } from '@nestjs/testing';
import { UserGamesListController } from './user-games-list.controller';
import { UserGamesListService } from './user-games-list.service';

describe('UserGamesListController', () => {
  let controller: UserGamesListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGamesListController],
      providers: [UserGamesListService],
    }).compile();

    controller = module.get<UserGamesListController>(UserGamesListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
