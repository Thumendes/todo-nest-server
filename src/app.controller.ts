import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  hello() {
    return this.appService.hello();
  }

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('/todos')
  getTodos() {
    return this.appService.getTodos();
  }
}
