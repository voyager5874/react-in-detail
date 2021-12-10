import React from "react";
import {BsStar, BsStarFill} from "react-icons/bs";


type StarPropsType = {
    given: boolean
    callback: (weight: number) => void
    weight: number
}

export const Star = (props: StarPropsType) => {

    return <span onClick={() => props.callback(props.weight)}>{props.given ? <BsStarFill/> : <BsStar/>}</span>

}