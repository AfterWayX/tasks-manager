import DNDItem from './Item';
export default function DND() {
    return <div className='flex flex-col min-h-[85vh] w-full border border-gray-400 rounded-lg p-3 gap-y-4'>
        <h3>Title</h3>
        <DNDItem />
        <DNDItem />
        <DNDItem />
        <DNDItem />
    </div>
}