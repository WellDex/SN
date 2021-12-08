import React from "react"
import s from "../../../../css/Profile.module.css"
import {Field, reduxForm} from "redux-form"

const FormEditStatus = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
                <Field name="status"
                       component="input"
                       type="type"
                       className={s.editFormInput}/>
            <button type="submit"
                    className={s.btnEditProfileInfo}>
                <i className={"material-icons"}>save</i>
            </button>
        </form>
    )
}

export const EditStatusReduxForm = reduxForm({form: "EditStatus"})(FormEditStatus)