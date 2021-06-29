import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/'>
         <HomePage/>
       </Route>
       <Route></Route>
       <Route></Route>
       <Route></Route>
     </Switch>
    </div>
  );
}

export default App;
