import axios from "axios";
import { Task } from "../interfaces/Task.interface";

const instance = axios.create({
    baseURL: 'http://localhost:3006/api', // here we can add env...
});

export class TasksService {
    static getTasksList(): Promise<{data: {tasks: Task[]}}> {
        return instance.get("/tasks");
    }
    static addTaskToList(task: Task): Promise<{data: Task}> {
        return instance.post("/tasks", { ...task });
    }
    static updataTaskFromList(id: number, task: Partial<Task>): Promise<{data: Task}> {
        return instance.put("/tasks", {id, ...task});
    }
    static deleteTaskFromList(id: number) {
        return instance.delete("/tasks/" + id);
    }
}
