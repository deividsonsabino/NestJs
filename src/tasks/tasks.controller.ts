import { TaskService } from './shared/task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {
  constructor(private TaskService: TaskService) {}
  @Get()
  async getAll(): Promise<Task[]> {
    return this.TaskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Task> {
    return this.TaskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.TaskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.TaskService.update(task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.TaskService.delete(id);
  }
}
