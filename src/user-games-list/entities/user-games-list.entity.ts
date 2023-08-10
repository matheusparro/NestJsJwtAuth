import type { UserGameList } from '@prisma/client';

export class UserGamesList implements UserGameList {
 

  constructor(props: UserGameList) {
    Object.assign(this, props);
  }
    userId: number;
    gameId: number;
 
}
