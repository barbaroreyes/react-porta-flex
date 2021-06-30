import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import './App.css';
import Name from './components/Name';
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/'>
         <HomePage/>
         <Welcome/>
        </Route >
     </Switch>
    </div>
  );
}

export default App;
