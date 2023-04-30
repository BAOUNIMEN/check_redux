import { ADD, DELETE, DONE, EDIT, FILTER } from "./action_types"



const todos = [
    { id: Math.random(), description: 'learn state', isdone: true },
    { id: Math.random(), description: 'learn hooks', isdone: true },
    { id: Math.random(), description: 'learn router', isdone: true },
    { id: Math.random(), description: 'learn redux', isdone: false },
]
const init = {
    todos,
    Filter: false
}



const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case DELETE:
            return {
                ...state, todos:
                    state.todos.filter((el) => el.id != payload)
            }
        case DONE:
            return {
                ...state, todos:
                    state.todos.map((el) => el.id === payload ? { ...el, isdone: !el.isdone } : el)
            }
        case ADD:
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        case EDIT:
            return{
                ...state,
                todos:state.todos.map((el)=> (el.id===payload.id ? payload :el)),
            } 
        case FILTER:
            return{
                ...state,
                Filter: !state.Filter,
            }       
        default:
            return state
    }
}
export default reducer;