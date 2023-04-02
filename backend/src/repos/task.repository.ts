import { Task } from '../entities/tasks.entity';
import { RepositorySource } from './connection';


class TasksRepository {
    private repository = RepositorySource.getRepository(Task);
    async getAllTasks(): Promise<Task[]> {
        return await this.repository?.find();
    }

    async addTask(newTask: Task): Promise<Task> {
        const task = new Task()
        task.title = newTask.title
        task.description = newTask.description
        task.status = newTask.status
        return await (await this.repository)?.save(task);
    }

    async updateTask(id: number, taskData: Partial<Task>): Promise<Task> {
        await (await this.repository)?.update(id, taskData);
        return await (await this.repository)?.findOne({ where: { id } });
    }

    async deleteTask(id: number): Promise<void> {
        await (await this.repository)?.delete(id);
    }
}

export const taskRepository = new TasksRepository();