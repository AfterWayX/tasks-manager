import { Task } from "../../interfaces/Task.interface";
import { TasksService } from "../../services/Tasks.service";
import Button from "./Button";

interface DNDItemInterface {
    task: Task,
    handleChange: () => void
}

export default function DNDItem({ task, handleChange }: DNDItemInterface) {
    const handleDelete = async () => {
        TasksService.deleteTaskFromList(task.id);
        setTimeout(() => handleChange(), 1)
    }

    const handleTaskDone = async () => {
        const updatedTask = await TasksService.updateTaskFromList(
            task.id,
            {
                status: task.status === 'done'
                    ? 'progress'
                    : 'done'
            }
        )
        if (updatedTask) {
            handleChange()
        };
    }

    return (
        <div className="flex w-full border border-gray-300 rounded-lg p-1.5 justify-between">
            <div>
                <h3 className="text-lg">{task.title}</h3>
                <h4>{task.description}</h4>
            </div>
            <div className="flex flex-col justify-between">
                <Button cb={() => handleDelete()} title={'Delete'} />
                <Button
                    cb={() => handleTaskDone()}
                    title={`Mark as ${task.status === 'done' ? 'in progress' : 'done'}`}
                />
            </div>
        </div>
    )
}