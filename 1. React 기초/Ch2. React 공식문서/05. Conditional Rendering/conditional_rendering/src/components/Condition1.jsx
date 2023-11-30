import React from 'react'

function UserGreeting(props) {
  return <h1>{props.name}, Welcome! It's {props.count} times.</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  if(props.isLoggedIn) return <UserGreeting name='jimmy' count={0} />
  return <GuestGreeting />
}

export default function Condition1() {
  const isLoggedIn = false

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}
