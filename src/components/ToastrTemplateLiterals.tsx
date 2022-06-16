import React from 'react'

type HorizontalPositions = "left" | "center" | "right"
type VerticalPositions = "top" | "center" | "bottom"
type ToastrTemplateLiteralsProps = {
  position: Exclude<
    `${HorizontalPositions}-${VerticalPositions}`,
    'center-center'
  > | 'center'
}

type BootstrapMarginPrefix = "m"
type BootstrapDirections = "r" | "l" | "t" | "b" | "x" | "y"
type BootstrapDistances = "1" | "2" | "3" | "4" | "5"

type BootstrapMargin = `${BootstrapMarginPrefix}${BootstrapDirections}-${BootstrapDistances}`

const ToastrTemplateLiterals = (props: ToastrTemplateLiteralsProps) => {
  return (
    <div>Position: {props.position}</div>
  )
}

export default ToastrTemplateLiterals