import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOff";
import {Select} from "./components/Select/Select";


export type SelectItemType = {
    title: string
    value: number
}

function App() {
    const selectItems =
        [
            {title: "React", value:0},
            {title: "Redux", value:1},
            {title: "SPA", value:2},
            {title: "SOLID", value:3},
            {title: "Babel transpiler", value:4}
        ]
    const [ratingValue, setRatingValue] = useState<number>(0)
    const [menu1Collapsed, setMenu1Collapsed] = useState<boolean>(true)
    const [menu2Collapsed, setMenu2Collapsed] = useState<boolean>(true)
    const [currentSwitch1State, setSwitch1State] = useState<boolean>(true)
    const [currentSwitch2State, setSwitch2State] = useState<boolean>(true)
    const [currentSelectItem, setSelectItem] = useState<SelectItemType>(selectItems[0])


    const menuItems1 = ["react", "redux", "will", "know"]
    const menuItems2 = ["BLL", "UI", "flux"]

    return (
        <div className={"allContentWrapper"}>
            <PageTitle name={"This is page title"}/>
            <div className={"componentsWrapper"}>
                <span>Controlled</span>
                <div>
                    <h3>Article 1</h3>
                    <Rating onClick={setRatingValue} value={ratingValue}/>
                </div>
                <Accordion name={"Menu_1"} items={menuItems1} callback={() => setMenu1Collapsed(!menu1Collapsed)}
                           collapsed={menu1Collapsed}/>
                <Accordion name={"Menu_2"} items={menuItems2} callback={() => setMenu2Collapsed(!menu2Collapsed)}
                           collapsed={menu2Collapsed}/>

                <OnOff callback={(desirableSwitchState: boolean) => setSwitch1State(desirableSwitchState)}
                       on={currentSwitch1State}/>
                <OnOff callback={(desirableSwitchState: boolean) => setSwitch2State(desirableSwitchState)}
                       on={currentSwitch2State}/>
                <Select callback={setSelectItem} items={selectItems} value={currentSelectItem.value}/>
                <span>Uncontrolled</span>
                <UncontrolledOnOff on={false}/>
                <UncontrolledAccordion name={"click me"}/>
                <UncontrolledRating/>
            </div>

        </div>
    );
}


export default App;


