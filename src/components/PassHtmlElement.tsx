import React from 'react'

type PassHtmlElementOwnProps<TElemetType extends React.ElementType> = {
    tagType?: TElemetType
    children: React.ReactNode
}
type PassHtmlElementProps<TElemetType extends React.ElementType> = PassHtmlElementOwnProps<TElemetType> & 
Omit<React.ComponentProps<TElemetType>, keyof PassHtmlElementOwnProps<TElemetType>>

const PassHtmlElement = <TElemetType extends React.ElementType>(props: PassHtmlElementProps<TElemetType>) => {
    const Tag123 = props.tagType || "span";
    return (
        <Tag123>{props.children}</Tag123>
    )
}

export default PassHtmlElement