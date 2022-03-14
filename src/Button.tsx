import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    title: string
    changeFilter: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.changeFilter}>{props.title}</button>
    )
};

export default Button;