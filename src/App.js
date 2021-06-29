import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/'>
         <HomePage/>
       </Route >
       <Route exact path='/navigation'>
       <Navigation/>
       </Route>
       <Route></Route>
       <Route></Route>
     </Switch>
    </div>
  );
}

export default App;
