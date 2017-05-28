import React, { Component } from 'react'

class Change extends Component {
  constructor (props) {
    super(props)

    this.state = {
      input: '',
      position: ''
    }
    this.handlePositionChange = this.handlePositionChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (e) {
    this.setState({input: e.target.value})
  }

  handlePositionChange(e) {
    this.setState({position: Number(e.target.value)})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ input: '', position: ''})
    this.props.changeTodo(this.state.position, this.state.input)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" value={this.state.position} onChange={this.handlePositionChange}/>
        <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
        <input type="submit" value='Change'/>
      </form>
    )
  }
}

export default Change


