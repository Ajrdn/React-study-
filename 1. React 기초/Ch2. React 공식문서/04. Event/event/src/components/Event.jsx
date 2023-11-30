import React from 'react'

export default function Event() {
  const handleButtonClick = () => {
    console.log('handleButtonClick')
  }

  const handleMouseLeave = (event) => {
    console.dir(event)
  }

  const handleClickCapture1 = () => {
    console.log('handleClickCapture1')
  }

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2')
  }

  const handleClickBubble = () => {
    console.log('handleClickBubble')
  }

  return (
    <div onClickCapture={handleClickCapture1}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
      </div>
    </div>
  )
}
