import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header-block">
            <div className="logo">
                <img src="https://bobandsuewilliams.com/images/star-wars-logo-1.png" alt=""/>
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
