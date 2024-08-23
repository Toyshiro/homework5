import React from "react";
import ButtonClass from './ButtonClass.js';
import axios from 'axios';

export default class InputClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    
    apiRequest = () => {
        let url = this.state.value;
        //alert(this.state.value);
        if(url.length <= 0){
            this.props.handleRes("Адрес запроса был пуст", true);
            return;
        }

        //https://catfact.ninja/fact
        axios.get(url).then((resp) => {
            console.log(resp.data);
            this.props.handleRes(resp.data.fact, false);
        }).catch((error) => {
            console.log(error);
            this.props.handleRes(error.message, true);
        });
    };

    changeValue = (val) => {
        this.setState({value: val})
    };

    render() {
        return (<div>
            <input onChange={(e) => this.changeValue(e.target.value)}></input>
            <ButtonClass handle={this.apiRequest}/>
        </div>);
    }
}