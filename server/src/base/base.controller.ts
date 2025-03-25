import { Controller } from '@nestjs/common';

@Controller('base')
export class BaseController {
  Get(): string {
    return 'Hello World!';
  }
}
