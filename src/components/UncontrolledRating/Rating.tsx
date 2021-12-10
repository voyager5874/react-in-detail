import React, {useState} from "react";
import {Star} from "./Star";


export const UncontrolledRating = (props: any) => {
        const[rating, setRating]=useState(0)


return (
    <div className={"starBox"}>
            <span onClick={()=>setRating(1)}><Star given={rating>0}/></span>
            <span onClick={()=>setRating(2)}><Star given={rating>1}/></span>
            <span onClick={()=>setRating(3)}><Star given={rating>2}/></span>
            <span onClick={()=>setRating(4)}><Star given={rating>3}/></span>
            <span onClick={()=>setRating(5)}><Star given={rating>4}/></span>


    </div>
)

}