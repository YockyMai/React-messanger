import s from "./Messages.scss";
import React from "react";

const MessageItem = (props) => {

    return (
        <div className={"messageItem" + ' ' + props.classMessage}>
            <img src="https://i.imgur.com/gqJvKwW.png" alt="Аватарка"/>
            <div className="textMessage">
                <div className="userName">
                    Valera
                </div>
                {props.message}
            </div>
        </div>
    );
}

export default MessageItem