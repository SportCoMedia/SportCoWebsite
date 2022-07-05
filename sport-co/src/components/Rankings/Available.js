import './Available.css';
import React, { Component } from 'react';
import  Navbar  from "../Navbar/Navbar.js";
import {httpGet} from "./get.js";
import Card from './Card/Card.js';
import SearchBar from './SearchBar/SearchBar.js'
let response = ""
function a(){
    response = httpGet("https://d9uktx2rncbs004-testbasketdb.adb.us-ashburn-1.oraclecloudapps.com/ords/bca_dev/rest-sportco/ga_boys_basketball_2022_available/");
    response = JSON.parse(response);
    console.log(response['items']);
}

class Available extends Component {
    state = { clicked: false }

    render (){
        return(
        <div onLoad={a()}>
            <Navbar />
            <div className="Available">
                <h1>ranking page</h1>
                <SearchBar accounts= {response} />

                <div className="cards_container">
                    {response['items'].map((user, index) => (
                        <Card userData = {user} key={index}/>
                    ))}
                </div>
            </div>
        </div>
        )
      
    }
}

export default Available