import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import loginComponent from './LoginComponent'
import adminComponent from './adminComponent'
import welcomeComponent from './welcomeComponent'

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={loginComponent}/>
            <Route exact path='/admin' component={adminComponent}/>
            <Route exact path='/welcome' component={welcomeComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}