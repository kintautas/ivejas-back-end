import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface'
import { CreateProductDto } from './dtos/create-product.dto'

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id):Promise<Product> {
      return await this.productModel.findOne().exec();
  }

  async update(id: string, model: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, model);
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.productModel.findOneAndDelete(id);
      return true;
    } catch (e) {
      return e;
    }
  }


}
