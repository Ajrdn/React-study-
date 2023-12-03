import React from 'react'
import { Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function ButtonExample() {
  return (
    <>
      <ButtonGroup size='lg' className='mb-2'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className='mb-2'>
        <Button variant='danger'>Left</Button>
        <Button variant='outline-info'>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size='sm'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <Button variant='primary' disabled>
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
        <span className='visually-hidden'>Loading...</span>
      </Button>
      <Button variant='primary' disabled>
        <Spinner
          as='span'
          animation='grow'
          size='sm'
          role='status'
          aria-hidden='true'
        />
        Loading...
      </Button>
    </>
  )
}
