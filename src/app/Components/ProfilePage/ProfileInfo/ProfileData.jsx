import React from "react"
import ProfileHeadInfo from "./ProfileHeadInfo"
import Contacts from "./Contacts"
import s from "../../../css/Profile.module.css"

const ProfileData = ({myUserId, userId, info, changeEditMode, changeEditStatus, editStatus, setEditStatus, status, updateStatus}) => {
    return (
        <>
            {+userId !== myUserId && userId === undefined
                ? <button onClick={changeEditMode}
                          className={`${s.btnEditProfileInfo} ${s.btnEditProfilePosition}`}>
                    <i className={"material-icons"}>edit</i>
                </button>
                : null
            }
            <ProfileHeadInfo info={info}
                             status={status}
                             editStatus={editStatus}
                             updateStatus={updateStatus}
                             changeEditStatus={changeEditStatus}
                             setEditStatus={setEditStatus}/>
            <Contacts contacts={info.contacts}/>
        </>
    )
}

export default ProfileData