import React, { useState } from 'react'
import { Button, Toast } from 'react-onsenui'

export default function ToastExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Toast</Button>
      <Toast visible={open}>Toast</Toast>
    </>
  )
}
