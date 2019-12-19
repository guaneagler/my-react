import React from 'react'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from '../actions'

const TodoList = (props) => {

  const todos = useSelector(state => state.todos)
  const filter = useSelector(state => state.visibilityFilter)
  const dispatch = useDispatch()

  const filterTodos = (filter, todos) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }
  return (
    <ul>
      {filterTodos(filter, todos).map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))}></Todo>
      ))}
    </ul>
  )
}

export default TodoList
