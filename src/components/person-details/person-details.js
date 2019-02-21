import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details">
                <div className="img">
                    <img src="http://www.thegadgetstore.ie/user/products/large/r2d2-robot-star-wars-droid-interactive-wifi-rc.png" alt=""/>
                </div>

                <div className="info">
                    <h4>Title</h4>
                    <p>Пол: </p>
                    <p>День рождения: </p>
                    <p>Цвет глаз:</p>
                </div>
            </div>
        )
    }
}
