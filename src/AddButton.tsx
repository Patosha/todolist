import React from 'react';


type ButtonPropsType = {
    title: string
    changeFilter: () => void
    btnClass?: string
}

export const AddButton = (props: ButtonPropsType) => {
    return (
        <button
            className={props.btnClass}
            onClick={props.changeFilter}>{props.title}
        </button>
    )
};