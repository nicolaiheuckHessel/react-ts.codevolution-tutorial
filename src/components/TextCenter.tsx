import React from 'react'

type TextCenterProps = {
    children: React.ReactNode
}

const TextCenter = (props: TextCenterProps): JSX.Element => {
  return (
    <div style={{textAlign: 'center'}}>{props.children}</div>
  )
}

export default TextCenter