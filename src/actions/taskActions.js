export const getTasks = () => async dispatch => {

    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    if (res.ok){
        dispatch({
            type: "TASKS_SUCCESS",
            payload: data
        })
    }else{
        dispatch({
            type: "TASKS_FAILED"
        })
    }
}

export const getTask = (id) => async dispatch => {
    return fetch(`http://localhost:5000/tasks/${id}`)
            .then(
                data => dispatch({
                    type: "TASK_SUCCESS",
                    payload: data.json()
                }),
                err => dispatch({
                    type: "TASK_FAILED"
                })
            )
}

export const updateTask = (task) => async dispatch => {
    const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
        method: "PUT",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(task)
    })
    if (res.ok){
        dispatch({type: "TASK_UPDATE_SUCCESS", payload: task})
    }else {
        dispatch({type: "TASK_UPDATE_FAILED", errMsg: `Update fail : HTTP error ${res.status}`})
    }
}

export const deleteTask = (task) => async dispatch => {
    const res= await fetch(`http://localhost:5000/tasks/${task.id}`, {
        method: "DELETE"
    })
    if (res.ok){
        dispatch({type: "TASK_DELETE_SUCCESS", payload: task})
    } else{
        dispatch({type: "TASK_DELETE_FAILED", errMsg: `Delete fail : HTTP Error ${res.status}`})
    }
}

export const addTask = (task) => async dispatch => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    if (res.ok){
        dispatch({
            type: "ADD_TASK_SUCCESS",
            payload: task
        })
    }else{
        dispatch({
            type: "ADD_TASK_FAILED",
            errMsg: `Adding task fail : HTTP error ${res.status}`
        })
    }
}