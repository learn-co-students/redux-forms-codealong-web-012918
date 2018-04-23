import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleToDoInput = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" placeholder="todo" onChange={event => this.handleToDoInput(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo;
