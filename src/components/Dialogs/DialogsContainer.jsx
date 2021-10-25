import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        newMessageBody : state.messagesPage.newMessageBody,
        messagesPage : state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage : () => {
            dispatch(sendMessageCreator());
        },
        onNewMessageChange : (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
  

export default DialogsContainer;