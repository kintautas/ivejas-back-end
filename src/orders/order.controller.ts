import { Controller, Get, Param, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { OrdersService } from './order.service'
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) { }

    @Get()
    async getorders() {
        const orders = await this.ordersService.findAll()
        return orders;
    }

    @Get(':orderID')
    async getorder(@Param('orderID') orderID) {
        const order = await this.ordersService.findOne(orderID);
        return order;
    }

    @Post()
    async addorder(@Body() createorderDTO: CreateOrderDto) {
        const order = await this.ordersService.create(createorderDTO);
        return order;
    }


    @Put(':id')
    async update(@Param('id') id, @Body() model: CreateOrderDto) {
      return await this.ordersService.update(id, model);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        console.log(id)
        return await this.ordersService.remove(id);
    }
}