import React, { useState } from 'react'
import './extracting.css'

export default function Extracting() {
  const [isGreen, setIsGreen] = useState(true)

  return (
    <div>
      <button className='py-2 px-4 bg-green-500 text-red-500 font-thin shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'>
        Save changes
      </button>
      <br />
      <button
        className={`py-2 px-4 bg-${isGreen ? 'green' : 'purple'}-500 text-white font-semibold rounded-lg shadow-md hover:bg-${isGreen ? 'green' : 'purple'}-700 focus:outline-none focus:ring-2 focus:ring-${isGreen ? 'green' : 'purple'}-400 focus:ring-opacity-75`}
        onClick={() => setIsGreen(prev => !prev)}
      >
        Save changes
      </button>
      <br />
      <button className='btn-blue'>
        Save changes
      </button>
    </div>
  )
}
