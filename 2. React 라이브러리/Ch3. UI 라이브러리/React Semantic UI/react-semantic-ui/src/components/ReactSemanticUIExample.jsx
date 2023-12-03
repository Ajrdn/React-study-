import React from 'react'
import CompositionExample from './CompositionExample'
import ShorthandExample from './ShorthandExample'
import ButtonExampleLabeledBasic from './ButtonExampleLabeledBasic'
import ListExampleCelled from './ListExampleCelled'

export default function ReactSemanticUIExample() {
  return (
    <div>
      <CompositionExample />
      <ShorthandExample />
      <ButtonExampleLabeledBasic />
      <ListExampleCelled />
    </div>
  )
}
