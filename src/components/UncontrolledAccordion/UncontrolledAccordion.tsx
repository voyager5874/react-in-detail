import React, {useState} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";


type AccordionPropsType = {
    name:string
    // collapsed: boolean
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    const[collapsed, setCollapsed]=useState<boolean>(true)

    const  collapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={"accordionWrapper"}>
            <UncontrolledAccordionTitle name={props.name} callback={collapse}/>
            {collapsed || <UncontrolledAccordionBody/>}

        </div>
    )
}