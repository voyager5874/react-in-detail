import {Star} from "./Star";
import React from "react";

// export type RatingValueType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }

// type RatingPropsType = {
//     value: RatingValueType
//     onClick: (value: RatingValueType) => void
// }

type RatingPropsType = {
    value: number
    onClick: (value: number) => void
}

export const Rating = (props: RatingPropsType) => {

        return(
            <div className={"starBox"}>
                <Star callback={props.onClick} weight={0} given={props.value > 0}/>
                <Star callback={props.onClick} weight={2} given={props.value > 1}/>
                <Star callback={props.onClick} weight={3} given={props.value > 2}/>
                <Star callback={props.onClick} weight={4} given={props.value > 3}/>
                <Star callback={props.onClick} weight={5} given={props.value > 4}/>
            </div>
        )

}