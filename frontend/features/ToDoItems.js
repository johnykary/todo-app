import ToDoItem from "../components/toDoItem"
import React from "react"
import styles from "../styles/ToDoItems.module.css"
import Api from "../core/api"
import { Button } from "../components/_common/Button"

export default class ToDoItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: this.props.todos,
      todo: "",
    }
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
  }

  async click() {
    // Do not create empty todos
    if (this.state.todo.trim() === "") return

    const api = new Api()
    try {
      const newToDo = await api.fetchJson("/todo/add", "POST", {
        text: this.state.todo,
      })

      this.setState((state) => ({
        todos: [...state.todos, newToDo],
        todo: "",
      }))
    } catch (e) {
      console.log(e)
    }
  }

  async delete(todoId) {
    const api = new Api()
    try {
      await api.fetch("/todo/remove", "POST", {
        todoId,
      })
      this.setState((state) => ({
        todos: state.todos.filter((todo) => todo._id !== todoId),
      }))
    } catch (e) {
      console.log(e)
    }
  }

  async edit(todo) {
    // Don't let update with empty value
    if (todo.text === "") return
    try {
      const api = new Api()
      const updated = await api.fetchJson("/todo/update", "PUT", {
        todo,
      })
      this.setState((state) => ({
        todos: state.todos.map((obj) => {
          if (obj._id === updated._id) {
            return updated
          }
          return obj
        }),
      }))
    } catch (e) {
      console.log(e)
    }
  }

  handleChange(event) {
    this.setState({ todo: event.target.value })
  }



  render() {
    return (
      <>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange.bind(this)}
          />
          <Button text="ADD" type="ADD" onClick={this.click.bind(this)}/>
        </div>
        {this.state.todos.map((todo) => (
          <ToDoItem
            key={todo._id}
            todo={todo}
            delete={this.delete}
            edit={this.edit}
          />
        ))}
      </>
    )
  }
}

ToDoItems.defaultProps = {
  todos: [],
  todo: "",
}
