import React from 'react';
import logo from '../assets/images/logo.png'

const HeaderComponent = () => {
    return ( 
        <header>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <label className="App-name">CITY BUILDER</label>
            </div>
        </header>
     );
}
 
export default HeaderComponent;