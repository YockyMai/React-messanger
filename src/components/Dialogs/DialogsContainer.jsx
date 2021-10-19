import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let messagesPage = props.store.getState().messagesPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let newMessageBody = props.store.getState().messagesPage.newMessageBody;

    return (
        <Dialogs newMessageBody={newMessageBody}
                 messagesPage={messagesPage}
                 sendMessage={sendMessage}
                 onNewMessageChange={onNewMessageChange} />
    );
}

export default DialogsContainer;