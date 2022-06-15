import React from 'react'

type WelcomeProps = {
    user: {
        name: String,
        messageCount: number,
        isLoggedIn: boolean,
        alias?: String
    },
}

const Welcome = ({ user }: WelcomeProps): JSX.Element => {
    let name = user.name;
    if (user.alias !== undefined) {
        name = user.alias
    }

    return (
        <div>
            <h1>Welcome {name}</h1>
            {user.isLoggedIn && (<p>You have {user.messageCount} new messages</p>)}
        </div>
    )
}

export default Welcome