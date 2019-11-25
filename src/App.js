import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Component App
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Confirmation from './components/Confirmation';
import Instructive from './components/Instructive';
import RegisterMaterial from './components/RegisterMaterial'
import List from './components/List';
import Schedule from './components/Schedule';
import InfoUser from './components/InfoUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Confirmation" component={Confirmation}/>
        <Route exact path="/Instructive" component={Instructive} />
        <Route exact path="/RegisterMaterial" component={RegisterMaterial}/>
        <Route exact path="/List" component={List}/>
        <Route exact path="/Schedule" component={Schedule}/>
        <Route exact path="/InfoUser" component={InfoUser}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;