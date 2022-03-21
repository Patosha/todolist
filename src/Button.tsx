import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    title: string
    changeFilter: () => void
    btnClass?: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={props.btnClass}
            onClick={props.changeFilter}>{props.title}
        </button>
    )
};

export default Button;