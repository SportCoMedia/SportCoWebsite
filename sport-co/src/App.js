import './App.css';
import Available from './components/Rankings/Available.js';
import React, { Component } from 'react';
import Home from "./components/Home.js";
import { HashRouter, Route,Routes} from 'react-router-dom';
class App extends Component {
  render() {
    return (      
       <HashRouter>
        <div>
            <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/Available" element={<Available />}></Route>
           </Routes>
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;
