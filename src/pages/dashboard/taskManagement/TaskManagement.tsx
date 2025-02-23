import { DataTable } from "./data-table"
import { taskList } from "./data"
import { taskColumns } from "./columns"


const TaskManagement: React.FC = () => {
    return (
        <>
            <div className="p-8">
                <h1 className="text-2xl mb-12">Tasks</h1>
                <DataTable columns={taskColumns} data={taskList} />
            </div>        
        </>
    )
}

export default TaskManagement