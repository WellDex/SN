import React from "react"
import s from "../../../css/Preloader.module.css"

const Preloader = () => {
    return (
        <div className={s.lds_spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default Preloader;