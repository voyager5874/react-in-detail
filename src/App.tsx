import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";


function App() {
    return (
        <div className={"allContentWrapper"}>
            <PageTitle name={"This is page title"}/>
            <div className={"componentsWrapper"}>
                <div>
                    <h3>Article 1</h3>
                    <Rating value={5}/>
                </div>
                <div>
                    <h3>Article 2</h3>
                    <Rating value={1}/>
                </div>

                <Accordion name={"Menu_1"} collapsed={true}/>
                <Accordion name={"Menu_2"} collapsed={false}/>

                <OnOff on={false}/>
                <OnOff on={true}/>
                <UncontrolledAccordion name={"click me"}/>
                <UncontrolledRating/>
            </div>

        </div>
    );
}


export default App;


