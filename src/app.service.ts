import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  hello() {
    return 'Hello World!';
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getTodos() {
    return await this.prisma.todo.findMany();
  }
}
