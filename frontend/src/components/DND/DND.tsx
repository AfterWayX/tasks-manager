import { useId } from 'react';
import { Task } from '../../interfaces/Task.interface';
import DNDItem from './Item';
interface DNDInterface {
    tasks: Task[];
    title: string;
    handleChange: () => void;
}
export default function DND({ tasks, title, handleChange }: DNDInterface) {
    return <div className='flex flex-col min-h-[80vh] max-h-[82vh] w-full border border-gray-400 rounded-lg p-3 gap-y-4 overflow-y-auto relative'>
        <h2 className='sticky top-0 bg-white pb-2.5 border-b border-gray-300'>{title}</h2>
        {
            tasks.length ? tasks?.map((task, i) => {
                return <DNDItem key={task.id * i} task={task} handleChange={handleChange} />
            }) : <p className='text-sm text-gray-500'>There are no tasks availble</p>
        }
    </div>
}