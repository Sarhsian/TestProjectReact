import React from 'react';
import s from './Dialogs.module.css';
import  DialogItem  from './DialogItem/DialogItem';
import  Message  from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer';
const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{ messagesElements } </div>
                <div>
                    <div><textarea value={ newMessageBody }
                    onChange={ onNewMessageChange }
                     placeholder='Enter your message'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;