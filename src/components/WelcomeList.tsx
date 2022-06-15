import React from 'react'
import { JsxAttributeLike } from 'typescript'
import Welcome from './Welcome'

type WelcomeListProps = {
    users: {
        name: String,
        messageCount: number,
        isLoggedIn: boolean,
        alias?: String
    }[]
}

const WelcomeList = (props: WelcomeListProps):JSX.Element => {
    return (
        <>
            {props.users.map(user => <Welcome key={user.name as React.Key} user={user} />)}
        </>
    );
}

export default WelcomeList