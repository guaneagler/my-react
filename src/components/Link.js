import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const Link = (props) => {
  const active = useSelector(state => state.visibilityFilter)
  const dispatch = useDispatch()

  if (props.filter === active) {
    return <span>{props.children}</span>
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        dispatch(setVisibilityFilter(props.filter))
      }}
    >
      {props.children}
    </a>
  )
}

export default Link
