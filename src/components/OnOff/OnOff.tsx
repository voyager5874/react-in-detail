import React from 'react';

type OnOffPropsType = {
    on: boolean
    callback: (desirableSwitchState:boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onOffButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        debugger
        if(e.currentTarget.id==="onButton"){
            props.callback(true)
        }
        if(e.currentTarget.id==="offButton"){
            props.callback(false)
        }
    }

     return (
        <div className={"onOffBox"}>
            <button id={"onButton"}
                    className={`${props.on ? "buttonOn" : ""} onOffButton`}
                    onClick={onOffButtonClickHandler}>On</button>
            <button id={"offButton"}
                    className={`${!props.on ? "buttonOff" : ""} onOffButton`}
                    onClick={onOffButtonClickHandler}>Off</button>
            <span className={`${props.on ? "buttonOn" : "buttonOff"} onOffLamp`}></span>
        </div>
    );
};

