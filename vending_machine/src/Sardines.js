import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Sardines.css";

class Sardines extends Component{
    render(){
        return (
            <div 
                className="Sardines"
                style={{
                    backgroundImage: "url(https://66.media.tumblr.com/d160dba2d7bdcaa6c972b477f6acd5d7/tumblr_njvnd9zupc1qm9k25o1_500.gif)"
                }}>
                <h1>you don't eat the sardines. the sardines, they eat you!</h1>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

export default Sardines;