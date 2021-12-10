import React from "react";
import {BsStar, BsStarFill} from "react-icons/bs";

type StarPropsType = {
    given: boolean
}

export const Star = (props: StarPropsType) => {
    if (props.given) {
        return <BsStarFill/>
    }
    if (!props.given) {
         return <BsStar/>
    }
    return <span>star</span>

}