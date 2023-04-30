import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Addtask, filter_task } from '../redux/action';


const Addtodo = () => {
    const {todos}= useSelector (state =>state)
    const completeCounter = todos.filter(el=>el.isdone).length
 const[text, setText]=useState('')
 const dispatch = useDispatch()
    // function submit
    const handlesubmit = (e) => {
        e.preventDefault();
        const newtask = {
            id: Math.random(),
            description: text,
            isdone: false,
        };
        // newtask.trim() === ''
        //     ? alert('please fill out the input field')
        //     : dispatch(Addtask(newtask));
        dispatch(Addtask(newtask))
        setText("");
    }
    return (
        <div>
            <p> Total Tasks {todos.length} </p>
            <p>completed tasks {completeCounter}</p>
            <form onSubmit={handlesubmit}>
                <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
                <button type='submit'>Add</button>
                
            </form>
            <button onClick={()=>dispatch(filter_task())}>Filter</button>
        </div>
    )
}

export default Addtodo