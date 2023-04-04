import { Task } from "../../interfaces/Task.interface";
import { TasksService } from "../../services/Tasks.service";

export default function DNDItem({ task, handleChange }: { task: Task, handleChange: () => void }) {
    const handleDelete = async () => {
        TasksService.deleteTaskFromList(task.id)
        setTimeout(() => handleChange())
    }
    return (
        <div className="flex w-full border border-gray-300 rounded-lg p-1 justify-between">
            <div>
                <h3 className="text-lg">{task.title}</h3>
                <h4>{task.description}</h4>
            </div>
            <div>
                <button onClick={() => handleDelete()}>delete</button>
            </div>
        </div>
    )
}