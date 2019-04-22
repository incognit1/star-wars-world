import React, { Component } from 'react'

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            this.props.getData().then(
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
