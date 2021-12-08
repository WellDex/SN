import React from "react"
import Friends from "./Friedns"
import {connect} from "react-redux"
import {getFollowUsers, getUsers} from "../../../Redux/Reducers/UsersReducer"
import {getUsers as users} from "../../common/Selectors/usersSelectors"

class FriendsContaine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            friends: [],
            isLoading: true
        }
    }

    getFriends = () => {
        this.props.getFollowUsers(this.state.page)
        this.setState({isLoading: true})
        this.pushFriendsInLocalState()
        this.setState({isLoading: false})
    }

    pushFriendsInLocalState = () => {
        for (let friend of this.props.users) {
            if (friend.followed === true) {
                this.state.friends.push(friend)
            }
        }
        this.setState({page: this.state.page + 1})
    }

    handleScroll = e => {
        const {scrollTop, clientHeight, scrollHeight} = e.currentTarget

        if (scrollHeight - parseInt(scrollTop) === clientHeight) {
            this.getFriends()
        }
    }

    componentDidMount() {
        this.getFriends()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users !== this.props.users && this.props.users !== undefined) {
            if (this.state.friends.length < 10) {
                this.getFriends()
            }
        }
    }

    render() {
        return (
            <Friends friends={this.state.friends}
                     handleScroll={this.handleScroll}
                     isLoading={this.state.isLoading}/>
        )
    }
}

let mapStateToProps = state => ({
    users: users(state)
})

export default connect(mapStateToProps, {getFollowUsers})(FriendsContaine)