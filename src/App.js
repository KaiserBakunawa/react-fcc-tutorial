import React, { Component } from 'react'
import './App.css'
import Add from './components/Add'
import Change from './components/Change'
import Delete from './components/Delete'
import Completed from './components/Completed'
import Display from './components/Display'

class App extends Component {
  constructor () {
    super()

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this)
    this.changeTodo = this.changeTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
  }

  render () {
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <Add addTodo={this.addTodo}/>
        <Change changeTodo={this.changeTodo}/>
        <Delete deleteTodo={this.deleteTodo}/>
        <Completed completeTodo={this.completeTodo}/>

        <br/>

        <Display todos={this.state.todos}/>
      </div>
    )
  }

  addTodo (input) {
    let todo = {
      todo: input,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  changeTodo (position, input) {
    const updatedTodos = [...this.state.todos]
    updatedTodos[position].todo = input

    this.setState({
      todos: [...updatedTodos]
    })
  }

  deleteTodo (position) {
    const updatedTodos = this.state.todos

    this.setState({
      todos: [
        ...updatedTodos.slice(0, position),
        ...updatedTodos.slice(position + 1)
      ]
    })
  }

  completeTodo (position) {
    const updatedTodos = [...this.state.todos]
    updatedTodos[position].completed = !updatedTodos[position].completed

    this.setState({
      todos: [...updatedTodos]
    })
  }
}

export default App
