import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { updateTask, deleteTask } from '../actions/taskActions'

const Task = ({ task }) => {
    const dispatch = useDispatch()

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => dispatch(updateTask({...task, reminder: !task.reminder}))}
            >
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => dispatch(deleteTask({...task}))}
                    />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
