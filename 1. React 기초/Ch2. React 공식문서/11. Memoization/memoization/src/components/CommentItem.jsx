import React, { Profiler, memo, useState, useMemo } from 'react'
import './CommentItem.css'

function CommentItem({ title, content, likes, onClick }) {
  const [clickCount, setClickCount] = useState(0)

  function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration, 
    startTime,
    commitTime,
    interactions
  ) {
    console.log(`actualDuration ${title} : ${actualDuration}`)
  }

  const handleClick = () => {
    onClick()
    setClickCount(prev => ++prev)
    alert(`${title}를 누르셨습니다.`)
  }

  const rate = useMemo(() => {
    console.log('rate Check')
    return likes >= 10 ? 'Good' : 'Normal'
  }, [likes])

  return (
    <Profiler id='CommentItem' onRender={onRenderCallback}>
      <div className='CommentItem' onClick={handleClick}>
        <p>{title}</p>
        <p>{content}</p>
        <p>{likes}</p>
        <p>{rate}</p>
        <p>{clickCount}</p>
      </div>
    </Profiler>
  )
}

export default memo(CommentItem)