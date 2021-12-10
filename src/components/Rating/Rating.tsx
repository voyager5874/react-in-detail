import {Star} from "./Star";
import React from "react";


type RatingProps = {
    value: 0|1|2|3|4|5
}

export const Rating = (props: RatingProps) => {

        return(
            <div className={"starBox"}>
                <Star given={props.value > 0}/>
                <Star given={props.value > 1}/>
                <Star given={props.value > 2}/>
                <Star given={props.value > 3}/>
                <Star given={props.value > 4}/>
            </div>
        )

}