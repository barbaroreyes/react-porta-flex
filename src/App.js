import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import './App.css';
import Name from './components/Name';
import Welcome from './components/Welcome'
import Title from './components/Title';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/'>
        <Welcome/>
          <HomePage/>
          <Title/>
          <Form/>
         </Route >
     </Switch>
    </div>
  );
}

export default App;
