import React from "react"
import s from "../../css/Profile.module.css"
import userPhoto from "../../assets/userPhoto.png"

const ProfilePhoto = ({myUserId, profileAvatar, updatePhoto, userId}) => {
    let onSetNewPhoto = e => {
        if (e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }

    return (
        <section className={s.profileSection}>
            <img src={profileAvatar != null ? profileAvatar : userPhoto}
                 className={s.profileAvatarImg}/>
            {
                +userId !== myUserId && userId === undefined
                    ? <div>
                        <input type={"file"}
                               id={"Ifile"}
                               onChange={onSetNewPhoto}
                               className={s.inputFile}/>
                        <label for={"Ifile"}
                               className={s.profileBtnEditAvatar}>
                            Edit</label>
                    </div>
                    : null
            }
        </section>
    )
}

export default ProfilePhoto