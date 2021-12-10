import React from "react";
import {BsStar, BsStarFill} from "react-icons/bs";


type StarPropsType = {
    given: boolean
    starWeight: number
    callback:(rating:number)=>void
}

export const Star = (props: StarPropsType) => {
    return (
        <span onClick={()=>props.callback(props.starWeight)}>
            {props.given ? <BsStarFill/> : <BsStar/>}
        </span>)
}