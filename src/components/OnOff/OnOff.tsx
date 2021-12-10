import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const[on, setOn]=useState<boolean>(true)

    return (
        <div className={"onOffBox"}>
            <button className={`${on ? "buttonOn" : ""} onOffButton`} onClick={()=>{setOn(true)}}>On</button>
            <button className={`${!on ? "buttonOff" : ""} onOffButton`} onClick={()=>{setOn(false)}}>Off</button>
            <span className={`${on ? "buttonOn" : "buttonOff"} onOffLamp`}></span>
        </div>
    );
};

