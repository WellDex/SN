import React from "react"
import ProfilePage from "./ProfilePage"
import {connect} from "react-redux"
import {getProfile, getStatus, updatePhoto, updateProfile, updateStatus} from "../../Redux/Reducers/ProfileReducer"
import {withRouter} from "react-router-dom"
import {compose} from "redux"
import {getMyId, getUserProfile, getUserStatus} from "../common/Selectors/profileSelectors"

class ProfileContaine extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.myUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <ProfilePage myUserId={this.props.myUserId}
                            userId={this.props.match.params.userId}
                            profile={this.props.profile}
                            status={this.props.status}
                            updateProfile={this.props.updateProfile}
                            updatePhoto={this.props.updatePhoto}
                            updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = state => ({
    profile: getUserProfile(state),
    myUserId: getMyId(state),
    status: getUserStatus(state),
})

export default compose(
    connect(mapStateToProps, {getProfile, updateProfile, getStatus, updateStatus, updatePhoto}),
    withRouter
)(ProfileContaine)