const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: 
    [
      {id: 1, message: 'Hi how are you', likesCount: 12},
      {id: 2, message: 'It is my post', likesCount: 9},      
      {id: 3, message: 'lolo', likesCount: 2},      
      {id: 4, message: 'blabla', likesCount: 13}
      ],
      newPostText: "lol"
  };


const contentReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
              }; 
              state.posts.push(newPost);
              state.newPostText = '';      
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})

export default contentReducer;