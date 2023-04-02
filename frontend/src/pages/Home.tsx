export default function Home() {
    return (
        <div className="container min-h-[90vh] h-full flex flex-col justify-center items-center">
            <div className="min-h-[340px] w-10/12 mt-5 flex justify-center items-center bg-blue-600  text-white">
                <h1 className="text-4xl font-bold w-min text-center">Get Things Done with Task Manager</h1>
            </div>
            <div className="min-h-[340px] w-10/12 mb-5 flex justify-center items-center bg-yellow-400 ">
                <h1 className="text-3xl font-semibold ml-5 w-min text-center">Organize Your Tasks and Boost Your Productivity</h1>
            </div>
            <p className="font-semibold text-lg w-10/12">
                Developed by (AfterWayX) B. D.
            </p>
        </div>
    );
}
