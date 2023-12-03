import React from 'react'
import ButtonExample from './ButtonExample'
import CenteredGrid from './CenteredGrid'
import IconLabelButtons from './IconLabelButtons'
import IconCheckboxes from './IconCheckboxes'
import TemporaryDrawer from './TemporaryDrawer'
import VirtualizedList from './VirtualizedList'

export default function MaterialUIExample() {
  return (
    <div>
      <ButtonExample />
      <CenteredGrid />
      <IconLabelButtons />
      <IconCheckboxes />
      <TemporaryDrawer />
      <VirtualizedList />
    </div>
  )
}
