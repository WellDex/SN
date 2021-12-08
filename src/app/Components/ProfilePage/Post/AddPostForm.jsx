import React from "react"
import {Field, reduxForm, reset} from "redux-form"
import s from "../../../css/Profile.module.css"

const AddPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}
              className={s.addPostFormContainer}>
            <Field
                name="newPostText"
                placeholder="Anything new?"
                component="textarea"
            />
            <button type="submit">Add post</button>
        </form>
    )
}

const afterSubmit = (result, dispatch) => dispatch(reset("AddNewPost"))
export const AddPostReduxForm = reduxForm({
    form: "AddNewPost",
    onSubmitSuccess: afterSubmit
})(AddPostForm)