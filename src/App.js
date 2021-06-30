import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import './App.css';
import Name from './components/Name';


function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/'>
         <HomePage/>
         <Name/>
         <Name/>
         <Name/>
         <Name/>
         <Name/>
         <Name/>
         <Name/>
         <Name/>

       </Route >
      
     </Switch>
    </div>
  );
}

export default App;
