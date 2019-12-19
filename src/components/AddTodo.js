import React, { useState } from 'react'
import { addTodo } from "../actions"
import { useDispatch } from "react-redux"

let AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input) {
          return
        }
        dispatch(addTodo(input))
        setInput('')
      }}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
