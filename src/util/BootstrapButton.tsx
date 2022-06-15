import React from 'react'
import { BootstrapColor, EnumToString } from './BootstrapColor'

type BootstrapButtonProps = {
    children: React.ReactNode,
    color: BootstrapColor,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BootstrapButton = (props: BootstrapButtonProps): JSX.Element => {
    const colorAsString = EnumToString(props.color);
    return (
        <button className={`btn btn-${colorAsString}`} onClick={props.onClick}>{props.children}</button>
    )
}

export default BootstrapButton