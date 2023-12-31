import React from 'react'

export default function List() {
  const todos = [
    {id: 1, text: 'Drink Water'},
    {id: 2, text: 'Wash Car'},
    {id: 3, text: 'Listen Lecture'},
    {id: 4, text: 'Go to bed'},
  ]

  const Item = (props) => {
    return <li>{props.text}</li>
  }

  const todoList = todos.map(todo => <Item key={todo.id} text={todo.text} />)

  return (
    <div>
      {todoList}
    </div>
  )
}
