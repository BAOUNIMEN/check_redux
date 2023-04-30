import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';


const Todolist = () => {
    const { todos, Filter } = useSelector((state) => state);
    return (
        <div>
            { 
                !Filter?
                todos.map(
                    (el,i) =>
                        <Task task={el} key={i} />
                )
                :
                todos.filter(todos=>!todos.isdone).map(
                    (el,i) =>
                        <Task task={el} key={i} />
                )
            }
        </div>
    );
};

export default Todolist;
