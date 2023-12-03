import React from 'react'
import styled, { keyframes } from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
)

const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }
`

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`

const PasswordInput = styled(Input).attrs({
  type: 'password',
})`
  border: 2px solid aqua;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

export default function StyledComponentsExample1() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button onClick={() => alert('normal button')}>Normal</Button>
      <Button onClick={() => alert('primary button')} primary>
        Primary
      </Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <Button as='a' href='#'>
        Link with Button styles
      </Button>
      <TomatoButton as='a' href='#'>
        Link with Tomato Button styles
      </TomatoButton>
      <br />
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
      <>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className='something'>The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className='something-else'>
          <Thing>Splendid.</Thing>
        </div>
      </>
      <Input placeholder='A bigger text input' size='2em' />
      <br />
      <PasswordInput placeholder='A bigger password input' size='2em' />
      <br />
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </>
  )
}
