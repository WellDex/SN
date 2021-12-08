import React from "react"
import {getUsers as users} from "../../common/Selectors/usersSelectors"
import ProfileFriends from "./ProfileFriends"
import {getFollowUsers, getUsers} from "../../../Redux/Reducers/UsersReducer"
import {connect} from "react-redux"

class ProfileFriendsContaine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            friends: []
        }
    }

    getFriends = () => {
        this.props.getFollowUsers(this.state.page)
        this.pushFriendsInLocalState()
    }

    pushFriendsInLocalState = () => {
        for (let friend of this.props.users) {
            if (friend.followed === true) {
                this.state.friends.push(friend)
            }
            if (this.state.friends.length === 6) {
                break
            }
        }
        this.setState({page: this.state.page + 1})
    }

    componentDidMount() {
        this.getFriends()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users !== this.props.users && this.props.users !== undefined) {
            if (this.state.friends.length < 6) {
                this.getFriends()
            }
        }
    }

    render() {
        return (
            <ProfileFriends friends={this.state.friends}/>
        )
    }
}

let mapStateToProps = state => ({
    users: users(state)
})

export default connect(mapStateToProps, {getFollowUsers})(ProfileFriendsContaine)