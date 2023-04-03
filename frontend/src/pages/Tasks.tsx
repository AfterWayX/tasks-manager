import { useEffect, useState } from "react";
import DND from "../components/DND/DND";
import { TasksService } from "../services/Tasks.service";

export default function Tasks() {
    const [tasks, setTasks] = useState<any>([])
    const getTasks = async () => {
       const t = await TasksService.getTasksList()
       setTasks(t.data)
    }
    useEffect(() => {
        getTasks()
    }, [])
    console.log(tasks)
    return <div className="container grid grid-cols-12 py-5">
        <div className="col-span-8 flex gap-x-4">
        <DND />
        <DND />
        </div>

    </div>;
}
