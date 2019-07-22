import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './order.controller'
import { OrdersService } from './order.service'
import { OrderSchema } from './schemas/order.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}