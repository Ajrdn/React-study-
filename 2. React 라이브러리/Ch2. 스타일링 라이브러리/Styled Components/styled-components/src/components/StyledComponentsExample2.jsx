import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.borderColor};
`

Button.defaultProps = {
  theme: {
    color: 'red',
    borderColor: 'blue',
  }
}

const defaultTheme = {
  color: 'green',
  borderColor: 'pink',
}

const redTheme = {
  color: 'red',
  borderColor: 'red',
}

const greenTheme = {
  color: 'green',
  borderColor: 'green',
}

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`

export default function StyledComponentsExample2() {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <div>
      <GlobalStyle />
      <button onClick={() => setTheme(redTheme)}>red</button>
      <button onClick={() => setTheme(greenTheme)}>green</button>
      <ThemeProvider theme={theme}>
        <Button>Normal</Button>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  )
}
