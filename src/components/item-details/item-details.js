import React, {Component} from 'react';
import './item-details.css';
import Spinner from "../spinner";

const Record = ({item, field, label}) => (
    <li className="list-group-item">
        <span className="term">{label}: </span>
        <span>{item[field]}</span>
    </li>
);

export {
    Record,
}

class ItemDetails extends Component {
    state = {
        item   : null,
        image  : null,
        error  : false,
        loading: false,
    };

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) {
            return;
        }

        this.setState({loading: true});

        getData(itemId)
            .then(item =>
                this.setState({
                    item,
                    image  : getImageUrl(item),
                    loading: false,
                })
            );
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    render() {
        const ItemDetailsView = (item, imageUrl) => {
            return (<React.Fragment>
                <div className="card-body">
                    <div>
                        <img className="img"
                             src={imageUrl}
                             alt=""/>
                    </div>

                    <div>
                        <h4>{item.name}</h4>
                        <ul className="list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {item});
                                })
                            }
                        </ul>
                    </div>

                </div>
            </React.Fragment>)
        };

        const itemView   = (!this.state.loading && this.state.item) ? ItemDetailsView(this.state.item, this.state.image) : null;
        const loaderView = this.state.loading ? <Spinner/> : null;
        const emptyView = (!this.state.itemId && !this.state.loading && !this.state.item) && (<p>Не выбран элемент</p>);

        return (
            <div className="item-details card">
                {itemView}
                <div className="loader">
                    {emptyView}
                    {loaderView}
                </div>
            </div>
        )
    }
}

export default ItemDetails
