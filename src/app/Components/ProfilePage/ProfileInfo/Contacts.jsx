import React from "react"
import s from "../../../css/Profile.module.css"

const Contacts = ({contacts}) => {
    return (
        <div className={s.profileInfo}>
            <table>
                {
                    Object.keys(contacts).map(key => {
                        if (contacts[key] === null || contacts[key] === "") {
                            return
                        } else {
                            return (
                                <tr>
                                    <th className={s.first}>
                                        {key}:
                                    </th>
                                    <th className={s.second}>
                                        {contacts[key] === null || "" ? "none" : <a href={`https://${contacts[key]}`}
                                                                                    target="_blank"
                                                                                    className={s.second}>{contacts[key]}</a>}
                                    </th>
                                </tr>
                            )
                        }
                    })
                }
            </table>
        </div>
    )
}

export default Contacts