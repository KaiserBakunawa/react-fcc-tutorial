import React, { Component } from 'react'

class Delete extends Component {
  constructor (props) {
    super(props)

    this.state = {
      position: ''
    }
    this.handlePositionChange = this.handlePositionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePositionChange (e) {
    this.setState({position: Number(e.target.value)})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({position: ''})
    this.props.deleteTodo(this.state.position)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" value={this.state.position} onChange={this.handlePositionChange}/>
        <input type="submit" value='Delete'/>
      </form>
    )
  }
}

export default Delete


