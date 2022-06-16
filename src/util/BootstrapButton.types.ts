import React from 'react';
import { BootstrapColor } from './BootstrapColor';

export type BootstrapButtonProps = {
    children: String
    color: BootstrapColor
    // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // style?: React.CSSProperties;
// } & React.ComponentProps<'button'>;
} & Omit<Omit<React.ComponentProps<'button'>, 'children'>, 'color'>;
