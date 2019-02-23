import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        itemList: null,
    };

    componentDidMount() {
        const {getData} = this.props;

        getData().then(
            res => this.setState({itemList: res}),
            error => console.log(error),
        )
    }

    renderItems(items) {
        const {onPersonSelected} = this.props;

        return items.map(
            (item) => {
                const {id} = item;
                const renderItem = this.props.children;

                return (
                    <li className="list-group-item"
                        onClick={() => onPersonSelected(id)}
                        key={id}>{renderItem(item)}
                    </li>)
            }
        );
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>;
        }

        const itemListView = this.renderItems(itemList);

        return (
            <div className="itemList">
                <ul className="list-group">
                    {itemListView}
                </ul>
            </div>
        )
    }
}
