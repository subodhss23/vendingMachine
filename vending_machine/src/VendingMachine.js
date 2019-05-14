import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import vendingMachineImg from './VendingMachine.png';
import './VendingMachine.css';

class VendingMachine extends React.Component{
    render(){
        return (
            <div 
                className="VendingMachine"
                style={{backgroundImage: `url(${vendingMachineImg})`}}
                >
                <Message>
                    <Link to="/soda">Soda</Link>
                </Message>

                <Message>
                    <Link to="/chips">Chips</Link> <br/>
                    <Link to="/sardines">Sardines</Link>
                </Message>
            </div>
        );
    }
}

export default VendingMachine; 