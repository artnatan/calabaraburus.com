import React from 'react';
import Slider from '../components/slider';
import SoonProject from '../components/soon_project';
import TopProject from '../components/top_project';

import '../css/main.css';

import jonka from '../img/jonka.png';
import sold_ship from '../img/sold_ship.png';
import castle_2 from '../img/castle_2.png';
import v_casle from '../img/v_casle.png';

import city from '../img/city.png';
import selo from '../img/selo.png';
import saloon from '../img/saloon.png';
import sheriff from '../img/sheriff.png';


export const Home = (props) => (
    <>
        <div id='home' style={{ "height": "700px" }}>
            <img src={props.banner} className="d-block w-100" alt="First slide" />
        </div>

        <div style={{ "paddingTop": "100px" }}>
            <TopProject />
        </div>
        <Slider slide_1={jonka} slide_2={sold_ship} slide_3={castle_2} slide_4={v_casle} />
        <hr />

        <div style={{ "paddingTop": "100px" }}>
            <SoonProject />
        </div>
        <Slider slide_1={city} slide_2={selo} slide_3={saloon} slide_4={sheriff} />
        
    </>
)