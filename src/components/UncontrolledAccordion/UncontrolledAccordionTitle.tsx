import React from "react";

type AccordionTitleProps = {
    name: string
    callback:()=>void
}


export const UncontrolledAccordionTitle = (props: AccordionTitleProps) => {
    return <>
        <h2 onClick={props.callback} className={"clickableTitle"}>
            {props.name}
        </h2>
    </>
}