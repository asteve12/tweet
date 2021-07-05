import React from 'react';
import Login from './login_page/login';
import Signin from './signup/signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
const initialState = {
  displayHome: false,
  displayExplore: false,
  displayNotification: false,
  displayMessage: false,
  displayBookmark: false,
  displayList: false,
  displayProfile: false,
};

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route path='/' exact>
            <Login></Login>
          </Route>
          <Route path='/login'>
            <Signin></Signin>
          </Route>
          <Route path='/home'>
            <Home show={{ ...initialState, displayHome: true }}></Home>
          </Route>
          <Route path='/explore'>
            <Home show={{ ...initialState, displayExplore: true }}></Home>
          </Route>
          <Route path='/message'>
            <Home show={{ ...initialState, displayMessage: true }}></Home>
          </Route>
          <Route path='/Bookmark'>
            <Home show={{ ...initialState, displayBookmark: true }}></Home>
          </Route>
          <Route path='/list'>
            <Home show={{ ...initialState, displayList: true }}></Home>
          </Route>
          <Route path='/profile'>
            <Home show={{ ...initialState, displayProfile: true }}></Home>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
