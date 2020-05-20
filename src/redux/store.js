import contentReducer from "./content-reducer";
import messageReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
    profilePage:{
    posts: 
    [
      {id: 1, message: 'Hi how are you', likesCount: 12},
      {id: 2, message: 'It is my post', likesCount: 9},      
      {id: 3, message: 'lolo', likesCount: 2},      
      {id: 4, message: 'blabla', likesCount: 13}
      ],
      newPostText: "lol"
  },
  messagePage:{
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
  },
  sidebar: {}    
},


    _callSubscriber() {
      console.log('state changed');
    },
    
    getState(){
      return this._state;
    },   
    subscribe(observer) {
      this._callSubscriber = observer;
    },
    
    dispatch(action) {
      debugger;
      this._state.profilePage = contentReducer(this._state.profilePage, action);
      this._state.messagePage = messageReducer(this._state.messagePage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);

    }
}

  window.store = store;
  export default store;