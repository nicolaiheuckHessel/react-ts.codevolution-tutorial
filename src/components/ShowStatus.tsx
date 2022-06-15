import React from 'react'
import { Status } from '../util/StatusEnum'

type StatusProps = {
    statusEnum?: Status,
    statusString?: "loading" | "success" | "error"
}

const ShowStatus = (props: StatusProps): JSX.Element => {
    let statusEnum: Status = Status.Loading;
    if (props.statusEnum !== null && props.statusEnum !== undefined) { 
        statusEnum = props.statusEnum;
    }
    else if (props.statusEnum === null && props.statusString !== null) {
        switch (props.statusString) {
            case "loading":
                statusEnum = Status.Loading;
                break;
            case "error":
                statusEnum = Status.Error;
                break;
            case "success":
                statusEnum = Status.Success;
                break;
        }
    }

    switch (statusEnum) {
        case Status.Loading:
            return <h2>Loading...</h2>
        case Status.Error:
            return <h2 color='red'>Failed to fetch data</h2>
        case Status.Success:
            return <h2>Successfully loaded data</h2>
        default:
            return <h2 color='red'>Error. Invalid status</h2>
    }
}

export default ShowStatus