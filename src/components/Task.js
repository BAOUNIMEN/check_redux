import React, { useState } from 'react'
import { complete, deltodo, edittask } from '../redux/action';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const [inputAction, setInputAction] = useState(task.description)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch();
  const handleEdit = ()=>{
    const editedTask ={
      id:task.id,
      description:inputAction,
      isdone:task.isdone
    }
   dispatch(edittask(editedTask))
   handleClose()
  }
  return (
    <div>
      {
        open ? <div>
          <input value={inputAction} type='text' onChange={(e)=>setInputAction(e.target.value)} />
          <button onClick={handleEdit}>confirm</button>
          <button onClick={handleClose }>cancel</button>
        </div>
          : <div>
            <h2 className={task.isdone && 'done'}>{task.description}</h2>
      

            <button onClick={() => dispatch(deltodo(task.id))} >Delete</button>
            <button onClick={() => dispatch(complete(task.id))}>Complete</button>
            <button onClick={handleOpen}>Edit</button>
          
          </div>
          }
    </div>
  )
}

export default Task