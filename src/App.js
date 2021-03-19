import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Fideris from './components/Fideris';
import Spinings from './components/Spinings';
import Grunts from './components/Grunts';
import Pludins from './components/Pludins';
import Navigation from './components/Navigation';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/fideris" component={Fideris}/>
             <Route path="/spiningosana" component={Spinings}/>
             <Route path="/gruntsmakskeresana" component={Grunts}/>
             <Route path="/pludinmakskeresana" component={Pludins}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;