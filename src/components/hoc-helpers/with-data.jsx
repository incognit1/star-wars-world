import React, { Component } from 'react'

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData().then(
                res => this.setState({data: res}),
                error => console.log(error),
            )
        }

        render() {
            const { data } = this.state;

            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;
