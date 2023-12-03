import React from 'react'
import { ProgressBar, ProgressCircular } from 'react-onsenui'

export default function ProgressExample() {
  return (
    <div>
      <ProgressBar indeterminate></ProgressBar>
      <ProgressCircular indeterminate />
      <ProgressCircular
        value={30}
        secondaryValue={50}
      />
      <ProgressCircular
        modifier='material'
        value={30}
        secondaryValue={50}
      />
    </div>
  )
}
