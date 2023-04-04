import { useEffect, useState } from "react";

import DND from "../components/DND/DND";
import { TasksService } from "../services/Tasks.service";
import { Task } from "../interfaces/Task.interface";
import AddTaskForm from "../components/Form";

export default function Tasks() {
    const [doneTasks, setDoneTasks] = useState<Task[]>([])
    const [progressTasks, setProgressTasks] = useState<Task[]>([])

    const getTasks = async () => {
        const t = (await TasksService.getTasksList()).data.tasks
        setDoneTasks(t?.filter((task) => task.status === 'done'))
        setProgressTasks(t?.filter((task) => task.status === 'progress'))
    }
    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        setSubmitting(false);
        const newTask = await TasksService.addTaskToList(values)
        if (newTask) getTasks()
    }
    
    useEffect(() => {
        getTasks()
    }, [])

    return <div className="container grid grid-cols-12 gap-x-4 py-5">
        <div className="col-span-8 flex gap-x-4">
            <DND tasks={progressTasks} handleChange={getTasks} title={'In Progress'} />
            <DND tasks={doneTasks} handleChange={getTasks} title={'Done'} />
        </div>
        <div className="col-span-4 flex flex-col">
            <AddTaskForm onSubmit={handleSubmit} />
        </div>
    </div>;
}
