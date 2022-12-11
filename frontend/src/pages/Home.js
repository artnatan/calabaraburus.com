import React from 'react';
import { Image } from 'react-bootstrap'
import Slider from '../components/slider';
import SoonProject from '../components/soon_project';
import TopProject from '../components/top_project';

import '../css/main.css';

import a_city from '../img/a_city.png';
import e_city from '../img/e_city_1.png';
import ships_battle_2 from '../img/ships_battle_2.png';
import ships_battle_3 from '../img/ships_battle_3.png';

import city from '../img/city.png';
import selo from '../img/selo.png';
import saloon from '../img/saloon.png';
import sheriff from '../img/sheriff.png';


export const Home = (props) => (
    <>
        <div id='home'>
            <Image src={props.banner} className="d-block w-100" alt="First slide" />
        </div>

        <div style={{ "paddingTop": "100px" }}>
            <TopProject />
        </div>
        <Slider slide_1={e_city} slide_2={a_city} slide_3={ships_battle_3} slide_4={ships_battle_2} />
        <hr />

        <div style={{ "paddingTop": "100px" }}>
            <SoonProject />
        </div>
        <Slider slide_1={city} slide_2={selo} slide_3={saloon} slide_4={sheriff} />
        
    </>
)