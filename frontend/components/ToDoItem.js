import React from "react"
import styles from "../styles/ToDoItem.module.css"
import { Button } from "./_common/Button"

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: this.props.todo,
      disabled: true,
    }
  }

  handleChange(event) {
    this.setState((state) => ({
      todo: { ...state.todo, text: event.target.value },
      disabled: false,
    }))
  }

  render() {
    return (
      <div className={styles.toDoItemContainer} key={this.state.todo._id}>
        <input
          type="text"
          value={this.state.todo.text}
          onChange={this.handleChange.bind(this)}
        />
        {/* <button
          className={styles.deleteBtn}
          onClick={() => this.props.delete(this.state.todo._id)}
        >
          DELETE
        </button> */}
        <Button 
            text="DELETE"
            type="DELETE"
            onClick={() => this.props.delete(this.state.todo._id)}
        />
        {/* <button
          disabled={this.state.disabled}
          className={styles.editBtn}
          onClick={() => this.props.edit(this.state.todo)}
        >
          EDIT
        </button> */}
        <Button 
            disabled={this.state.disabled}
            text="EDIT"
            type="EDIT"
            onClick={() => this.props.edit(this.state.todo)}
        />
      </div>
    )
  }
}


ToDoItem.defaultProps = {
  todo: {
    text: "",
    id: null,
  },
  disabled: true,
}
