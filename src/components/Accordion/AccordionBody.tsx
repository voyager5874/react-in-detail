import React from "react";

type AccordionBodyType = {
    items:Array<string>
}

export const AccordionBody = (props: AccordionBodyType) => {
    return (

        <ul>
            {props.items.map((item, index)=><li key={index}>{item}</li>)}
        </ul>

    );
};