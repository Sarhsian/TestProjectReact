import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/content/ContentContainer';
import HeaderContainer from './components/header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/dialogs' 
                render={ () => <DialogsContainer />} />
          <Route path='/profile/:userId?' 
                render={ () => <ContentContainer />} />
          <Route path='/users'
                render={ () => <UsersContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
