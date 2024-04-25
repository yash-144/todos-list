import React from 'react'
import TodoItem from './TodoItem';

const todos = (props) => {
  let style = {
    borderColor: 'white',
    marginTop: '10px',
    marginBottom: '10px'
  }
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to Display" : props.todos.map((todo) => {
        return (<>
          <hr style={style} />
          <TodoItem todo={todo} onDelete={props.onDelete} />
        </>)
      })}
    </div>
  )
}

export default todos
