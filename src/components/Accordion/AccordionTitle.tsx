import React from "react";

type AccordionTitleProps = {
    name: string
    callback: () => void
}


export const AccordionTitle = (props: AccordionTitleProps) => {
    return <>
        <h2 onClick={props.callback}>
            {props.name}
        </h2>
    </>
}