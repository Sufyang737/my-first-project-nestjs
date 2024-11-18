import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Taks } from '@prisma/client';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body() data: Taks) {
    return this.taskService.createTask(data);
  }

  @Get(':id')
  async getTaskById(@Param(':id') id: string) {
    return this.taskService.gatTaskById(Number(id));
  }

  @Delete(':id')
  async deleteTasksById(@Param(':id') id: string) {
    return this.taskService.deteleTaks(Number(id));
  }
}
