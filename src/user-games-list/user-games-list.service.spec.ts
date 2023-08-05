import { Test, TestingModule } from '@nestjs/testing';
import { UserGamesListService } from './user-games-list.service';

describe('UserGamesListService', () => {
  let service: UserGamesListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGamesListService],
    }).compile();

    service = module.get<UserGamesListService>(UserGamesListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
