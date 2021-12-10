import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";


function App() {
    const [ratingValue, setRatingValue] = useState<number>(0)
    const [menu1Collapsed, setMenu1Collapsed] = useState<boolean>(true)
    const [menu2Collapsed, setMenu2Collapsed] = useState<boolean>(true)

    return (
        <div className={"allContentWrapper"}>
            <PageTitle name={"This is page title"}/>
            <div className={"componentsWrapper"}>
                <div>
                    <h3>Article 1</h3>
                    <Rating onClick={setRatingValue} value={ratingValue}/>
                </div>
                <div>
                    <h3>Article 2</h3>
                    <Rating onClick={setRatingValue} value={ratingValue}/>
                </div>

                <Accordion name={"Menu_1"} callback={() => setMenu1Collapsed(!menu1Collapsed)} collapsed={menu1Collapsed}/>
                <Accordion name={"Menu_2"} callback={() => setMenu2Collapsed(!menu2Collapsed)} collapsed={menu2Collapsed}/>

                <OnOff on={false}/>
                <OnOff on={true}/>
                <UncontrolledAccordion name={"click me"}/>
                <UncontrolledRating/>
            </div>

        </div>
    );
}


export default App;


