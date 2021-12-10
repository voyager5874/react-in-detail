import React from "react";

type PageTitleProps = {
    name: string
}


export const PageTitle = (props: PageTitleProps) => {
    return <>
        <h2>
            {props.name}
        </h2>
    </>
}