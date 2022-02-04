import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesService {
  getSales(): string {
    return 'Hello World!';
  }
}
