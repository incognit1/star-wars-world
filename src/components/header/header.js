import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-block">
            <div className="logo">
                <Link to='/'>
                    <p className="logo-title">star<br/>wars</p>
                </Link>
            </div>

            <ul className="nav">
                <li><Link to='/people/'>Персонажи</Link></li>
                <li><Link to='/starships/'>Космические корабли</Link></li>
                <li><Link to='/planets/'>Планеты</Link></li>
            </ul>
        </div>
    )
};

export default Header;
