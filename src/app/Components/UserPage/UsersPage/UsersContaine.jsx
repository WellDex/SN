import React from "react"
import {connect} from "react-redux"
import {follow, getUsers, unfollow} from "../../../Redux/Reducers/UsersReducer"
import {getUsers as users} from "../../common/Selectors/usersSelectors"
import Users from "./Users"

class UsersContaine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            users: [],
            isLoading: true
        }
    }

    followUnfollowFilter = (id, action) => {
        switch (action) {
            case "follow": {
                this.props.follow(id)
                break
            }
            case "unfollow": {
                this.props.unfollow(id)
                break
            }
        }

        let newUsers = this.state.users

        for (let user of newUsers) {
            if (user.id === id) {
                user.followed ? user.followed = false : user.followed = true
                break
            }
        }

        this.setState({users: newUsers})
    }

    handleScroll = e => {
        const {scrollTop, clientHeight, scrollHeight} = e.currentTarget

        if (scrollHeight - parseInt(scrollTop) === clientHeight) {
            this.setState({page: this.state.page + 1})
            this.props.getUsers(this.state.page)
        }
    }

    componentDidMount() {
        this.props.getUsers(this.state.page)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users !== this.props.users && this.props.users !== undefined) {
            this.setState({isLoading: true})
            this.setState(({users}) => ({users: [...users, ...this.props.users]}))
            this.setState({isLoading: false})
        }
    }

    render() {
        return (
            <Users users={this.state.users}
                   handleScroll={this.handleScroll}
                   isLoading={this.state.isLoading}
                   followUnfollowFilter={this.followUnfollowFilter}
            />
        )
    }
}

let mapStateToProps = state => ({
    users: users(state)
})

export default connect(mapStateToProps, {getUsers, follow, unfollow})(UsersContaine)