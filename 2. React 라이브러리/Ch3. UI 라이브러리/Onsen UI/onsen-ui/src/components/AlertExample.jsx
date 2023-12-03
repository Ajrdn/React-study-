import React, { useState } from 'react'
import { Button, AlertDialog } from 'react-onsenui'

export default function AlertExample() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      <AlertDialog
        visible={open}
        onDialogCancel={() => setOpen(false)}
        cancelable
      >
        <div className='alert-dialog-title'>Warning!</div>
        <div className='alert-dialog-content'>An error has occurred!</div>
        <div className='alert-dialog-footer'>
          <Button
            onClick={() => setOpen(false)}
            className='alert-dialog-button'
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpen(false)}
            className='alert-dialog-button'
          >
            Ok
          </Button>
        </div>
      </AlertDialog>
    </div>
  )
}
