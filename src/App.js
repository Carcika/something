import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/mainmenu'
import NavBar from './components/navbar'
import './styles/menu.css'

function App() {
  return(
    <React.Fragment>
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/" exact component={Menu} />         
          </Switch>
        </Router>
        <div className='space'></div>
      </React.Fragment>
  )
}

export default App;