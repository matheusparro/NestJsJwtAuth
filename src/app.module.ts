import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { HttpModule } from '@nestjs/axios';
import { GamesModule } from './games/games.module';
import { UserGamesListModule } from './user-games-list/user-games-list.module';

@Module({
  imports: [ConfigModule.forRoot(),HttpModule, AuthModule, UsersModule, GamesModule, UserGamesListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
