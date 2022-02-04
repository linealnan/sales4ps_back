import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';
import { Cron } from '@nestjs/schedule';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(private httpService: HttpService) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  /**
   *  store.playstation.com
   * @returns
   */
  @Cron('3 * * * * *')
  grabFromPlaystationCom(): Observable<AxiosResponse<any>> {
    console.log('sen request')
    return this.httpService.get('http://localhost:3000/product');
  }
}
