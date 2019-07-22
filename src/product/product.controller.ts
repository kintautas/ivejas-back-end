import { Controller, Get, Param, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { ProductsService } from './product.service'
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get()
    async getproducts() {
        const products = await this.productsService.findAll()
        return products;
    }

    @Get(':productID')
    async getproduct(@Param('productID') productID) {
        const product = await this.productsService.findOne(productID);
        return product;
    }

    @Post()
    async addproduct(@Body() createproductDTO: CreateProductDto) {
        const product = await this.productsService.create(createproductDTO);
        return product;
    }


    @Put(':id')
    async update(@Param('id') id, @Body() model: CreateProductDto) {
      return await this.productsService.update(id, model);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        console.log(id)
        return await this.productsService.remove(id);
    }
}