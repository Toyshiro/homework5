import ButtonFunc from './ButtonFunc.js';
import { useState } from 'react';
import axios from 'axios';

function InputFunc({handleRes}) {

    const [value, setValue] = useState("");
    function apiRequest() {

        if(value.length <= 0){
            handleRes("Адрес запроса был пуст", true);
            return;
        }

        //https://catfact.ninja/fact
        axios.get(value).then((resp) => {
            console.log(resp.data);
            handleRes(resp.data.fact, false);
        }).catch((error) => {
            console.log(error);
            handleRes(error.message, true);
        });
    }
    return (<div>
        <input onChange={(e) => setValue(e.target.value)}></input>
        <ButtonFunc handle={apiRequest} />
    </div>);
}
export default InputFunc;