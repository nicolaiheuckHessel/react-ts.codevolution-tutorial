import React from 'react'

type ShowIfProps = {
    condition: boolean,
    children: React.ReactNode
}

const ShowIf = ({ condition, children }: ShowIfProps): JSX.Element | null => {
    if (condition) {
        return (
            <>
                {children}
            </>
        );
    }
    return null;
}

export default ShowIf