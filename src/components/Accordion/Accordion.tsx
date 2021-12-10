import React from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    name:string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div className={"accordionWrapper"}>
            <AccordionTitle name={props.name}/>
            {props.collapsed || <AccordionBody/>}

        </div>
    )
}