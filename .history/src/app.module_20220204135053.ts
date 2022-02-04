import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './sales/sales.module';
import { ProductsModule } from './products/products.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    SalesModule,
    ProductsModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
