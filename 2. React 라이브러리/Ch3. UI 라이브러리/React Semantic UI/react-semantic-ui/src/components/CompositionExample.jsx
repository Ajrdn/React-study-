import React from 'react'
import { Button } from 'semantic-ui-react'

export default function CompositionExample() {
  return (
    <div>
      <Button basic color='red' content='Red' />
      <Button as='a' basic color='red' content='Red' />
    </div>
  )
}
