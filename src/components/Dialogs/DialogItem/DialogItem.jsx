import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.scss";
import React from "react";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;  // ссылка (path)
    return (
        <NavLink to={path}>
            <div className={s.dialog}>
                <img src={props.ava} alt="ava" className={s.userAvatar}/>
                <p className={s.userName}>
                    {props.name}
                </p>
            </div>
        </NavLink>
    );
}

export default DialogItem;