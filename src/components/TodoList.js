import { Button, Divider } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../slices/TodoSlice';

const TodoList = () => {
  const dispatch = useDispatch()
  const { ToDo } = useSelector(state => state)
  console.log('ToDo: ', ToDo);
  const handleDelete = (id) => {
    dispatch(deleteItem(id))
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {ToDo.toDoList.map((item, index) => {
        return (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", gap: '8px' }}>
              <p>{`${index + 1}. ${item.value}`}</p>
              <div>
                <Button color='primary' variant='outlined' onClick={() => handleDelete(item.id)}>Delete</Button>
              </div>
            </div>
            <Divider light/>
          </>
        )
      })}
    </div>
  )
}

export default TodoList
