import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/profile' render={ () => <Content />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
