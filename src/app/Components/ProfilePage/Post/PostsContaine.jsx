import React from "react"
import {connect} from "react-redux"
import {getUserProfile} from "../../common/Selectors/profileSelectors"
import Posts from "./Posts"
import {addPost, deletePost, loadPostInLocalStorage} from "../../../Redux/Reducers/ProfileReducer"

class PostsContaine extends React.Component {

    componentDidMount() {
        if (!this.props.posts.length) {
            this.props.loadPostInLocalStorage()
        }
    }

    componentWillUnmount() {
        if (this.props.posts.length) {
            localStorage.setItem("posts", JSON.stringify(this.props.posts))
        }
    }

    render() {
        return <Posts profileAvatar={this.props.profile.photos.small}
                      posts={this.props.posts}
                      fullName={this.props.profile.fullName}
                      newPostText={this.props.newPostText}
                      addPost={this.props.addPost}
                      deletePost={this.props.deletePost}/>
    }
}

let mapStateToProps = state => ({
    profile: getUserProfile(state),
    posts: state.profilePage.posts
})

export default connect(mapStateToProps, {addPost, loadPostInLocalStorage, deletePost})(PostsContaine)