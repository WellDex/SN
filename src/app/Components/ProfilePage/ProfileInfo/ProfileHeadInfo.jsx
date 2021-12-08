import React from "react"
import s from "../../../css/Profile.module.css"
import {EditStatusReduxForm} from "./FormEditInfo/FormEditStatus"

const ProfileHeadInfo = ({info, editStatus, setEditStatus, status, updateStatus, changeEditStatus}) => {
    let submit = formData => updateStatus(formData).then(setEditStatus())
    let getInitialValues = () => ({status: status})

    return (
        <div className={s.headInfo}>
            <div className={s.fio_status}>
                <h1>{info.fullName}</h1>
                {editStatus
                    ? <EditStatusReduxForm onSubmit={submit}
                                           initialValues={getInitialValues()}/>
                    : <h2 onDoubleClick={changeEditStatus}>{status}</h2>
                }
            </div>
            <div className={s.lookingForAJob}>
                <span>Looking for a job:</span>
                {info.lookingForAJob
                    ? <i className={"material-icons"}>check</i>
                    : <i className={"material-icons"}>clear</i>
                }
            </div>
            <div className={s.lookingForAJob}>
                <span>Looking for a job description:</span>
                <span>{info.lookingForAJobDescription}</span>
            </div>
            <div className={s.lookingForAJob}>
                <span>About me:</span>
                <span>{info.aboutMe}</span>
            </div>
        </div>
    )
}

export default ProfileHeadInfo