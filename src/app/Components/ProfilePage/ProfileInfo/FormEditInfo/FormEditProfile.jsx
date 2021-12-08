import React from "react"
import s from "../../../../css/Profile.module.css"
import {Field, reduxForm} from "redux-form"

const FormEditProfile = ({handleSubmit, contacts}) => {
    return (
        <form onSubmit={handleSubmit} className={s.profileEditForm}>
            <div>
                <span>Full name: </span>
                <Field name="fullName"
                       component="input"
                       type="type"
                       className={s.editFormInput}/>
            </div>
            <div>
                <span>Looking for a job: </span>
                <Field name="lookingForAJob"
                       component="input"
                       type="checkbox"/>
            </div>
            <div className={s.textareaSpanTop}>
                <span>Looking for a job description: </span>
                <Field name="lookingForAJobDescription"
                       component="textarea"
                       type="text"/>
            </div>
            <div className={s.textareaSpanTop}>
                <span>About me: </span>
                <Field name="aboutMe"
                       component="textarea"
                       type="text"/>
            </div>
            <div className={s.profileInfo}>
                <table>
                    Contacts: {Object.keys(contacts).map(el => {
                    return (
                        <tr key={el}>
                            <th className={s.first}>{el}:</th>
                            <th className={s.second}>
                                <Field name={"contacts." + el}
                                       component="input"
                                       type="text"
                                       className={s.editFormInput}
                                />
                            </th>
                        </tr>
                    )
                })}
                </table>
            </div>
            <button type="submit"
                    className={s.btnEditProfileInfo}>
                <i className={"material-icons"}>save</i>
            </button>
        </form>
    )
}

export const ProfileEditReduxForm = reduxForm({form: "profileEditForm"})(FormEditProfile)