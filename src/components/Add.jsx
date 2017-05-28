import React, { Component } from 'react'

class Add extends Component {
  constructor (props) {
    super(props)

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({input: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ input: ''})
    this.props.addTodo(this.state.input)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="addTodoInput" value={this.state.input} onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
    )
  }

}

export default Add