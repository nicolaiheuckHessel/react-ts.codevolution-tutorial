import React from 'react';
import { BootstrapColor } from './BootstrapColor';

export type BootstrapButtonProps = {
    children: React.ReactNode;
    color: BootstrapColor;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
};
