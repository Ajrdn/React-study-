import React from 'react'
import { Fab, Icon } from 'react-onsenui'

export default function FabExample() {
  return (
    <div>
      <Fab position='bottom right'>
        <Icon
          icon='fa-space-shuttle'
          rotate={90}
        ></Icon>
      </Fab>
    </div>
  )
}
