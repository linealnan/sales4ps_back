import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesService {
  getSakes(): string {
    return 'Hello World!';
  }
}
