import React from 'react'
type HideIfProps = {
    condition: boolean,
    children: React.ReactNode
}

const HideIf = ({ condition, children }: HideIfProps): JSX.Element | null => {
    if (condition) {
        return null;
    }
    return (
        <>
            {children}
        </>
    );
}

export default HideIf