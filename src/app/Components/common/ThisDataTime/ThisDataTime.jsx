import React from "react"
import Moment from "react-moment"

export default class ThisDataTime extends React.Component {
    render() {
        const date = new Date()
        return (
            <Moment format={"DD MMM YYYY"}>{date}</Moment>
        )
    }
}
