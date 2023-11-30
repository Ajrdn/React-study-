import React from 'react'

function UserGreeting(props) {
  return <h1>{props.name}, Welcome! It's {props.count} times.</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting name='jimmy' count={0} /> : <GuestGreeting />
}

export default function Condition2() {
  const isLoggedIn = true

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}
