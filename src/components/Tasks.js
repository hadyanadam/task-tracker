import Task from './Task'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Tasks = () => {
    const tasks = useSelector(state => state.tasks)

    const ShowData = () => {
        if (tasks.loading){
            return <p>Loading...</p>
        }

        if (!_.isEmpty(tasks.data)){
            return (
                <>
                    {tasks.data.map((task) => (
                        <Task task={task} />
                    ))}
                </>
            )
        }

        if (tasks.errMsg !== ""){
            return <p>{tasks.errMsg}</p>
        }
    }

    return (
        <>
            {ShowData()}
        </>
    )
}

export default Tasks