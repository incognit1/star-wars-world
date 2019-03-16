import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header-block">
            <div className="logo">
                <p className="logo-title">star<br/>wars</p>
            </div>
            
            <ul className="nav">
                <li>Персонажи</li>
                <li>Космические корабли</li>
                <li>Планеты</li>
            </ul>
        </div>
    )
};

export default Header;
