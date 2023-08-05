import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserGamesListService } from './user-games-list.service';
import { CreateUserGamesListDto } from './dto/create-user-games-list.dto';
import { UpdateUserGamesListDto } from './dto/update-user-games-list.dto';

@Controller('user-games-list')
export class UserGamesListController {
  constructor(private readonly userGamesListService: UserGamesListService) {}

  @Post()
  create(@Body() createUserGamesListDto: CreateUserGamesListDto) {
    return this.userGamesListService.create(createUserGamesListDto);
  }

  @Get()
  findAll() {
    return this.userGamesListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userGamesListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserGamesListDto: UpdateUserGamesListDto) {
    return this.userGamesListService.update(+id, updateUserGamesListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userGamesListService.remove(+id);
  }
}
