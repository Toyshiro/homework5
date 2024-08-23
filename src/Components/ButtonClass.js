import React from "react";

export default class ButtonClass extends React.Component {
    render() {
        return(<button onClick={this.props.handle}>Запрос</button>);
    }
}