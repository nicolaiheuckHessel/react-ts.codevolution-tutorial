import React from 'react'
import Welcome from './Welcome'

const ReUsePropType = (props: React.ComponentProps<typeof Welcome>) => {
  return (
    <div>Re used welcome component props.<br />Username: {props.user.name}</div>
  )
}

export default ReUsePropType