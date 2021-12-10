import React from "react";

type AccordionTitleProps = {
    name: string
}


export const AccordionTitle = (props: AccordionTitleProps) => {
    return <>
        <h2>
            {props.name}
        </h2>
    </>
}