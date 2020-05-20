const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
      {id: 1, message: 'hi'},
      {id: 2, message: 'Loals das das das'},
      {id: 3, message: 'IT LOL KEK'},
      {id: 4, message: 'IT LOL KEK'},
      {id: 5, message: 'IT LOL KEK'},
      {id: 6, message: 'IT LOL KEK'}
    ],
    dialogsData: [
      {id: 1, name: 'Pedro'},
      {id: 2, name: 'Vazgen'},
      {id: 3, name: 'LoL'},
      {id: 4, name: 'Kek'},
      {id: 5, name: 'Chebureck'},
      {id: 6, name: 'Zaz'}
    ],
    newMessageBody: ""
  }

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messageReducer;