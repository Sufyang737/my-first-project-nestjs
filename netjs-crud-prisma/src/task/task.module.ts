import { Module } from '@nestjs/common';
import { TaskController } from './taks.controller';
import { TaskService } from './task.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [PrismaModule],
})
export class TaskModule {}
