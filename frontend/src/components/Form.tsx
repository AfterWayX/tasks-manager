import { Formik, Form, Field } from "formik";
import { TasksService } from "../services/Tasks.service";


const AddTaskForm = ({onSubmit}:any) => {
    
    return (
        <Formik
            initialValues={{ title: "", description: "", status: "" }}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="w-full text-sm flex flex-col gap-y-3">
                    <h2 className="text-lg font-bold">Add task</h2>
                    <div className="flex gap-x-2.5">
                        <Field type="text" name="title" placeholder={'Title'} className="border border-gray-300 rounded-lg py-1 px-2.5 w-full outline-none" />
                    </div>
                    <div className="flex">
                        <Field type="text" name="description" placeholder={'Description'} className="border border-gray-300 rounded-lg py-1 px-2.5 w-full outline-none" />
                    </div>


                    <div className="flex">
                        <Field as="select" name="status" className="border border-gray-300 rounded-lg py-1 px-1 w-full outline-none" >
                            <option value="">Select a status</option>
                            <option value="progress">In progress</option>
                            <option value="done">Done</option>
                        </Field>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Add Task
                    </button>
                </Form>)}
        </Formik>
    )
}

export default AddTaskForm;