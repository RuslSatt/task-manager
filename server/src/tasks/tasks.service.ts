import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task) private taskModel: typeof Task) {}

    async create(dto: CreateTaskDto) {
        const task = await this.taskModel.create(dto);
        return task;
    }

    async getAll() {
        const task = await this.taskModel.findAll({ include: { all: true } });
        return task;
    }
}
