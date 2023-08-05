import type { UserGameList as UserGameListEntity  } from '@prisma/client';

export class UserGamesList implements UserGameListEntity {
 

  constructor(props: UserGameListEntity) {
    Object.assign(this, props);
  }
    userId: number;
    gameId: number;
 
}
