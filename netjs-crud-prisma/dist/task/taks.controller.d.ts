import { TaskService } from './task.service';
import { Taks } from '@prisma/client';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTasks(): Promise<Taks[]>;
    createTask(data: Taks): Promise<Taks>;
    getTaskById(id: string): Promise<Taks[]>;
    deleteTasksById(id: string): Promise<Taks>;
}
