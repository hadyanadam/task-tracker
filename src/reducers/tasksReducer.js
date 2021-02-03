const DefaultState = {
    loading: false,
    data: [],
    errMsg: ""
}

const tasksReducer = (state = DefaultState, action) => {
    switch(action.type) {
        case "TASKS_LOADING":
            return {
                ...state,
                loading: true,
                errMsg: ""
            }
        case "TASKS_FAIL":
            return {
                ...state,
                loading: false,
                errMsg: "failed to get data"
            }
        case "TASKS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errMsg: ""
            }
        case "ADD_TASK_SUCCESS":
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                errMsg: ""
            }
        case "ADD_TASK_FAILED":
            return {
                ...state,
                loading:false,
                errMsg: action.errMsg
            }
        case "TASK_UPDATE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: state.data.map(
                    task => task.id === action.payload.id ? {...task,
                        id: action.payload.id, text: action.payload.text, reminder: action.payload.reminder
                    } : task
                ),
                errMsg: ""
            }
        case "TASK_UPDATE_FAILED":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        case "TASK_DELETE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: state.data.filter(task => task.id !== action.payload.id),
                errMsg: ""
            }
        case "TASK_DELETE_FAILED":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state
    }
}

export default tasksReducer