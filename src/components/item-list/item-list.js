import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {
    render() {
        return (
            <div className="item-list">
                <ul>
                    <li>Люк Скайвокер</li>
                    <li>Еще кто-то</li>
                    <li>Еще кто-то</li>
                </ul>
            </div>
        )
    }
}
