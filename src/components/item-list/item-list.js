import React from 'react';
import './item-list.css';
import Spinner from "../spinner";

const ItemList = (props) => {
    const {data} = props;

    const renderItems = (items) => {
        const {onItemSelected} = props;

        return items.map(
            (item) => {
                const {id}          = item;
                const uniqueContent = props.children(item);

                return (
                    <li className="list-group-item"
                        onClick={() => onItemSelected(id)}
                        key={id}>{uniqueContent}
                    </li>)
            }
        );
    };

    if (!data) {
        return <Spinner/>;
    }

    const itemListView = renderItems(data);

    return (
        <div className="item-list">
            <ul className="list-group">
                {itemListView}
            </ul>
        </div>
    );

};

export default ItemList;
