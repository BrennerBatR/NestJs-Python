import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getPyhton(@Query() query) {
    return await this.appService.getPyhton(query);
  }
}
