import './App.scss';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CommandCenter from './components/commandCenter';
import Game from './components/game';
import Store from './components/Store'
//<Charts></Charts>

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CommandCenter}></Route> 
          <Route path="/stonk-game" component={Game}></Route>
      
        </Switch>
      </BrowserRouter>
    
      
    </div>
  );
}


export default App;


