import { ImATeapotException, Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  async coffee() {
    throw new ImATeapotException({ coffee: 'not prepared', status: 'teapot' });
  }
}
