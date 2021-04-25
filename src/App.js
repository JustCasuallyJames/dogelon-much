import './App.scss';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import CommandCenter from './components/commandCenter';
import Game from './components/game';
import Store from './components/Store';
import Login from './components/login';


function App() {
  const [userId, setUserId] = useState(0);
  useEffect(()=>{
    console.log(userId);

  }, [userId])
  return (
    <div className="App">
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route name="command-center" path="/command-center" component={CommandCenter}></Route> 
          <Route name="stonk-game" path="/stonk-game" component={Game}></Route>
          <Route name="store" path="/store" component={Store}></Route>
        </Switch>
      </BrowserRouter>
    
      
    </div>
  );
}


export default App;


