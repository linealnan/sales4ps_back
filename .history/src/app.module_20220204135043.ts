import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './sales/sales.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    SalesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
