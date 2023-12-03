import React from 'react'
import { List, ListItem, Checkbox } from 'react-onsenui'

export default function CheckBoxExample() {
  return (
    <List>
      <ListItem tappable>
        <label class='left'>
          <Checkbox inputId='check-1' />
        </label>
        <label for='check-1' class='center'>
          Apple
        </label>
      </ListItem>
      <ListItem tappable>
        <label class='left'>
          <Checkbox
            inputId='check-2'
            checked
          />
        </label>
        <label for='check-2' class='center'>
          Banana
        </label>
      </ListItem>
    </List>
  )
}
