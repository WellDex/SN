import React from "react"
import s from "../../../css/Profile.module.css"
import ThisDataTime from "../../common/ThisDataTime/ThisDataTime"
import userPhoto from "../../../assets/userPhoto.png"


const Post = ({id, profileAvatar, fullName, post, deletePost}) => {
    return (
        <section className={s.profileSection}>
            <div className={s.headPost}>
                <img src={profileAvatar != null ? profileAvatar : userPhoto}
                     className={s.postAvatarImg}/>
                <div className={s.marLeftFIOAndData}>
                    <p>{fullName}</p>
                    <ThisDataTime/>
                </div>
                <button onClick={() => deletePost(id)}
                        className={`${s.btnEditProfileInfo} ${s.btnDeletePostPosition}`}>
                    <i className={"material-icons"}>delete_forever</i>
                </button>
            </div>
            <div className={s.bodyPost}>{post}</div>
        </section>
    )
}

export default Post