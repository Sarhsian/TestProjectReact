const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    ]
  }
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
      if(action.type === ADD_POST) {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        }; 
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
      }else if(action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST })

export let updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})

  window.store = store;
  export default store;