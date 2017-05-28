import React from 'react'

const Display = ({todos}) => {

  let renderTodos = () => {
    if (todos) {
      return todos.map(todo => {
        return (
          <li key={Math.random()}>
            <span>{todo.todo}</span> | <span>{todo.completed.toString()}</span>
          </li>
        )
      })
    }
  }

  let todoList = renderTodos()

  return (
    <div>
      <h2>Todo List</h2>
      <ul>{todoList}</ul>
    </div>
  )
}

export default Display