

import { ADD, DELETE, DONE, EDIT, FILTER } from "./action_types"

export const deltodo = (x) => {
    return {
        type: DELETE,
        payload : x
    }
}
export const complete = (x) => {
    return {
        type: DONE,
        payload : x
    }
}
export const Addtask = (newtask) => {
    return {
        type: ADD,
        payload : newtask,
    };
}
export const edittask = (editedTask)=>{
    return{
        type: EDIT,
        payload: editedTask,
    };
}
export const filter_task =()=>{
    return{
        type: FILTER,
    }
}

