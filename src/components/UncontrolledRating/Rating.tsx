import React, {useState} from "react";
import {Star} from "./Star";


export const UncontrolledRating = (props: any) => {
        const[rating, setRating]=useState(0)



return (
    <div className={"starBox"}>
            <span><Star callback={setRating} starWeight={1} given={rating>0}/></span>
            <span><Star callback={setRating} starWeight={2} given={rating>1}/></span>
            <span><Star callback={setRating} starWeight={3} given={rating>2}/></span>
            <span><Star callback={setRating} starWeight={4} given={rating>3}/></span>
            <span><Star callback={setRating} starWeight={5} given={rating>4}/></span>
    </div>
)

}