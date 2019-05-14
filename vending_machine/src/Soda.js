import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import sodaImg from './Soda.png';
import './Soda.css';

class Soda extends Component{
    render(){
        return (
            <div className="Soda">
            <img src={sodaImg} alt='coca cola can' />
            <Message>
                <h1>Soda is my favorite</h1>
                <h2>But now I drink sparkling water instead.</h2>
                <p> I still miss Soda.</p>
            </Message>
                <img src={sodaImg} alt='coca cola can' />
                    <Link to='/'>Go Back</Link>
            </div>
        );
    }
}
export default Soda;