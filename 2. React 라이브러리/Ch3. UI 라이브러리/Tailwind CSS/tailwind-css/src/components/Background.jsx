import React from 'react'

export default function Background() {
  return (
    <div>
      <div className='bg-purple-600 bg-opacity-100'>100%</div>
      <div className='bg-purple-600 bg-opacity-75'>75%</div>
      <div className='bg-purple-600 bg-opacity-50'>50%</div>
      <div className='bg-purple-600 bg-opacity-25'>25%</div>
      <div className='bg-purple-600 bg-opacity-0'>0%</div>
    </div>
  )
}
