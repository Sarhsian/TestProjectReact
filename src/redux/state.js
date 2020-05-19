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
    getState(){
      return this._state;
    },
    _callSubscriber() {
      console.log('state changed');
    },
    addPost(postMessage){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
    
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
    },
    subscribe(observer) {
      this._callSubscriber = observer;
    }
}

  window.store = store;
  export default store;