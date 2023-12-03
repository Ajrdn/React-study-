import React, { useState } from 'react'
import { Button, ActionSheet, ActionSheetButton } from 'react-onsenui'

export default function ActionSheetExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <Button onClick={handleClick}>Action Sheet Open</Button>
      <ActionSheet
        visible={isOpen}
        title='action sheet'
      >
        <ActionSheetButton>
          Label 1
        </ActionSheetButton>
        <ActionSheetButton>
          Label 2
        </ActionSheetButton>
        <ActionSheetButton>
          Label 3
        </ActionSheetButton>
        <ActionSheetButton modifier='destructive'>
          Cancel
        </ActionSheetButton>
        <ActionSheetButton>
          Save
        </ActionSheetButton>
      </ActionSheet>
    </div>
  )
}
