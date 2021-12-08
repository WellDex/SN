import React from "react"
import Post from "./Post"
import AddPost from "./AddPost"
import userPhoto from "../../../assets/userPhoto.png"

const Posts = React.memo(({posts, profileAvatar, addPost, fullName, deletePost}) => {
        let postsObj = posts.map(p => <Post key={p.id}
                                            id={p.id}
                                            fullName={fullName}
                                            profileAvatar={profileAvatar}
                                            post={p.post}
                                            deletePost={deletePost}/>)
    return (
        <>
            <AddPost avatarPhoto={profileAvatar != null ? profileAvatar : userPhoto}
                     addPost={addPost}/>
            {postsObj}
        </>
    )
})

export default Posts