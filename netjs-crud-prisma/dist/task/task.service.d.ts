import { PrismaService } from 'src/prisma/prisma.service';
import { Taks } from '@prisma/client';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTasks(): Promise<Taks[]>;
    gatTaskById(id: number): Promise<Taks[]>;
    createTask(data: Taks): Promise<Taks>;
    updateTask(id: Number, data: Taks): Promise<Taks[]>;
    deteleTaks(id: number): Promise<Taks>;
}
