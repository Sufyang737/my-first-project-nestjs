import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Taks } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Taks[]> {
    return this.prisma.taks.findMany();
  }
  async gatTaskById(id: number): Promise<Taks[]> {
    return this.prisma.taks.findUnique({
      where: {
        id,
      },
    });
  }

  async createTask(data: Taks): Promise<Taks> {
    return this.prisma.taks.create({
      data,
    });
  }

  async updateTask(id: Number, data: Taks): Promise<Taks[]> {
    return this.prisma.taks.update({
      where: {
        id,
      },
      data,
    });
  }

  async deteleTaks(id: number): Promise<Taks> {
    return this.prisma.taks.delete({
      where: {
        id,
      },
    });
  }
}
