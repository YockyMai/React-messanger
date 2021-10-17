import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/Messages";
import {addPost_ActionCreator, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";


const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;

    let messageElement =
        state.messagesData.map( (messageEl) => <MessageItem message={messageEl.message} id={messageEl.id}/> )
    let dialogElement =
        state.dialogsData.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.avatar}/> )
    /*Создаем массив методом map который возращает готовый элемент с подставленными данными, взятый из Массива с данными dialogsData BLL*/
    function handleTest(e) {
        if (e.charCode == 13 && !e.shiftKey) {
            props.dispatch(sendMessageCreator());
        }
    }

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement} {/*Массив со всеми диалогами*/}
            </div>
            <div className={s.messages}>
                {messageElement} {/*Массив со всеми Сообщениями*/}
                <div className={s.chatInputBox}>
                    <textarea placeholder={'Напишите сообщение...'} value={newMessageBody} onChange={onNewMessageChange} onKeyPress={handleTest}/>
                    <button className={s.downloadImage}>
                        <img src="https://www.freeiconspng.com/uploads/photo-video-slr-camera-icon-512x512-pixel-12.png" alt="send"/>
                    </button>
                    <button className={s.sendMessage} onClick={onSendMessageClick}>
                        <img src="https://www.tandm.ee/wp-content/uploads/2021/02/sent.png" alt="send"/>
                    </button>
                </div>
            </div>
        </div>


    );
}

export default Dialogs;