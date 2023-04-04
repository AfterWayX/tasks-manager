import { useState } from "react";
import { Task } from "../../interfaces/Task.interface";
import { TasksService } from "../../services/Tasks.service";
import Button from "./Button";

interface DNDItemInterface {
    task: Task,
    handleChange: () => void
}

export default function DNDItem({ task, handleChange }: DNDItemInterface) {
    const [isDetails, setIsDetails] = useState(false);

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
        <div className="grid grid-cols-12 w-full border border-gray-300 rounded-lg p-1.5 justify-between">
            <div className={`${isDetails ? "col-span-full" : "col-span-8"}`}>
                <div className="flex items-center">
                    <h3 className="text-lg">
                        {task.title}

                    </h3>
                    <button
                        onClick={() => setIsDetails((prev) => !prev)}
                        className="text-center text-xs text-gray-500 ml-2 mt-1"
                    >
                        {isDetails ? "Hide details" : "View details"}{'>'}
                    </button>
                </div>
                <div
                    className={`
                    w-full text-sm text-opacity-90 text-black relative group pr-1 z-[999] 
                    ${isDetails ? "min-h-max" : "truncate"}
                    `}
                >
                    {task.description}
                </div>
            </div>
            <div className={`flex gap-2 ${isDetails ? "col-span-full pt-2" : "col-span-4 flex-col"}`}>
                <Button
                    classes={task.status === 'done' ? " font-semibold bg-blue-300 px-0.5 border-blue-600 hover:opacity-70" : "font-semibold bg-green-300 border-green-600 hover:opacity-70"}
                    cb={() => handleTaskDone()}
                    title={`Mark as ${task.status === 'done' ? 'in progress' : 'done'}`}
                />
                <Button classes={"bg-red-300 border-red-600 hover:opacity-70 text-white font-semibold"} cb={() => handleDelete()} title={'Delete'} />
            </div>
        </div>
    )
}