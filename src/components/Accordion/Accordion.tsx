import React from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    name:string
    collapsed: boolean
    callback: () => void
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div className={"accordionWrapper"}>
            <AccordionTitle name={props.name} callback={props.callback}/>
            {props.collapsed || <AccordionBody/>}

        </div>
    )
}