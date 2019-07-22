import { Controller, Get, Param, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { UsersService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getusers() {
        const users = await this.usersService.findAll()
        return users;
    }

    @Get(':userID')
    async getuser(@Param('userID') userID) {
        const user = await this.usersService.findOne(userID);
        return user;
    }

    @Post()
    async adduser(@Body() createuserDTO: CreateUserDto) {
        const user = await this.usersService.create(createuserDTO);
        return user;
    }


    @Put(':id')
    async update(@Param('id') id, @Body() model: CreateUserDto) {
      return await this.usersService.update(id, model);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
      return await this.usersService.remove(id);
    }
}