import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import Dialogs from './components/dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => 
          <Dialogs dialogsData={props.state.messagePage.dialogsData} 
          messagesData={props.state.messagePage.messagesData}
          />} />
          <Route path='/profile' render={ () => 
          <Content 
          profilePage={props.state.profilePage} 
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
