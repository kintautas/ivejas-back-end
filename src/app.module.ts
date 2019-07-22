import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './product/product.module'
import { UsersModule } from './user/user.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),ProductsModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
