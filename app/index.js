import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import Home from './containers/home/home';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/home" component={Home}/>
  </Router>
), document.getElementById('app'));
