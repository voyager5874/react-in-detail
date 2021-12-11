import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<number>(0)
    const [menu1Collapsed, setMenu1Collapsed] = useState<boolean>(true)
    const [menu2Collapsed, setMenu2Collapsed] = useState<boolean>(true)
    const [currentSwitch1State, setSwitch1State] = useState<boolean>(true)
    const [currentSwitch2State, setSwitch2State] = useState<boolean>(true)

    return (
        <div className={"allContentWrapper"}>
            <PageTitle name={"This is page title"}/>
            <div className={"componentsWrapper"}>
                <span>Controlled</span>
                <div>
                    <h3>Article 1</h3>
                    <Rating onClick={setRatingValue} value={ratingValue}/>
                </div>
                <Accordion name={"Menu_1"} callback={() => setMenu1Collapsed(!menu1Collapsed)} collapsed={menu1Collapsed}/>
                <Accordion name={"Menu_2"} callback={() => setMenu2Collapsed(!menu2Collapsed)} collapsed={menu2Collapsed}/>

                <OnOff callback={(desirableSwitchState:boolean)=>setSwitch1State(desirableSwitchState)} on={currentSwitch1State}/>
                <OnOff callback={(desirableSwitchState:boolean)=>setSwitch2State(desirableSwitchState)} on={currentSwitch2State}/>
                <span>Uncontrolled</span>
                <UncontrolledOnOff on={false}/>
                <UncontrolledAccordion name={"click me"}/>
                <UncontrolledRating/>
            </div>

        </div>
    );
}


export default App;


