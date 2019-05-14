import React from 'react';
import { Link } from 'react-router-dom';

import './VendingMachine.css';

class VendingMachine extends React.Component{
    render(){
        return (
            <div 
                className="VendingMachine">
                
                <h1>This is the Vending Machine Bitch!!!</h1>
                <Link to="/soda">Soda</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/sardines">Sardines</Link>

            </div>
        );
    }
}

export default VendingMachine; 