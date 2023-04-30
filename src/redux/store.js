import reducer from "./reducer";
import {createStore} from "redux"
const rdx= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, rdx)
export default store;