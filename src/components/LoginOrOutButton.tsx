import React, { useState } from 'react'
import BootstrapButton from '../util/BootstrapButton'
import { BootstrapColor } from '../util/BootstrapColor'

type User = {
    isLoggedIn: boolean
}

const LoginOrOutButton = () => {
    const [user, setUser] = useState<User | null>(null);

    const performLogin = () => {
        setUser({isLoggedIn: true});
    }
    const performLogud = () => {
        setUser({isLoggedIn: false});
    }

    return (
        <>
            {user?.isLoggedIn
                ? <BootstrapButton color={BootstrapColor.danger} onClick={performLogud}>Log ud</BootstrapButton>
                : <BootstrapButton color={BootstrapColor.success} onClick={performLogin}>Log ind</BootstrapButton>}
        </>
    )
}

export default LoginOrOutButton