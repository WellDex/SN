import React, {useState} from "react"
import s from "../../../css/Profile.module.css"
import {ProfileEditReduxForm} from "./FormEditInfo/FormEditProfile"
import ProfileData from "./ProfileData"

const ProfileInfo = ({myUserId, userId, info, updateProfile, status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [editStatus, setEditStatus] = useState(false)

    let submit = formData => updateProfile(formData).then(() => setEditMode(false))

    return (
        <section className={s.profileSection}>
            {editMode
                ? <ProfileEditReduxForm onSubmit={submit}
                                        initialValues={info}
                                        contacts={info.contacts}/>
                : <ProfileData userId={userId}
                               myUserId={myUserId}
                               info={info}
                               status={status}
                               editStatus={editStatus}
                               setEditStatus={() => setEditStatus(false)}
                               updateStatus={updateStatus}
                               changeEditStatus={() => setEditStatus(true)}
                               changeEditMode={() => setEditMode(true)}/>

            }
        </section>
    )
}

export default ProfileInfo