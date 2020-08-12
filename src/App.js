import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store"
import RootComp from './components';
import {Provider} from "react-redux" 
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() { 
    return ( 
      <Provider store = {store}>
        <RootComp/>
      </Provider>
     );
  }
}
 
export default App;