import React from "react";
import {BsStar, BsStarFill} from "react-icons/bs";

type StarPropsType = {
    given: boolean
}

export const Star = (props: StarPropsType) => {
    return (
        <span>
            {props.given ? <BsStarFill/> : <BsStar/>}
        </span>)
}