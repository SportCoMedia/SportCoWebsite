import './App.css';
import Available from './components/Rankings/Available.js';
import React, { Component } from 'react';
import Home from "./components/Home.js";
import { BrowserRouter, Route,Routes} from 'react-router-dom';
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/Available" element={<Available />}></Route>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
