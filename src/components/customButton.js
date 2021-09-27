import React from 'react';
import './custom-button.css';
import {Button} from "react-bootstrap";

export function CustomButton({name,qcolor,loading}){

    // const[pad] = props.padding;
    return(
        <div className="bTun">
            {/*<Button>{props.name}{props.onClick}</Button>*/}
            <button className="custom-button" disabled={loading}>{name}</button>
            {/*<a className="custom-button">{name}</a>*/}
        </div>
    )
}