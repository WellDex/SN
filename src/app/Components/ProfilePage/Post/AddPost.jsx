import React from "react"
import s from "../../../css/Profile.module.css"
import {AddPostReduxForm} from "./AddPostForm"

const AddPost = ({addPost, avatarPhoto}) => {
    let onAddPost = formData => {
        let newPost = {
            id: new Date().getMilliseconds(),
            post: formData.newPostText
        }
        addPost(newPost)
    }
    return (
        <section className={`${s.profileSection} ${s.addPostContainer}`}>
            <img src={avatarPhoto}
                 className={s.AddPostAvatarImg}/>
            <AddPostReduxForm onSubmit={onAddPost}/>
        </section>
    )
}

export default AddPost