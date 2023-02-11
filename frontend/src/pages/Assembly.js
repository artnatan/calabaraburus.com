import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import React from 'react';

// import NaviBar from './components/navibar.js';

import { Home } from './Home';
import { Projects } from './Projects';
import { AboutUs } from './About';
import { Contact } from './Contact';
// import { Bottom } from './Bottom';

import port from '../img/port.png';
import sword from '../img/sword_2.png';
import hedgehog from '../img/ezch.png';
import piu from '../img/piu_1.png';
import jonka from '../img/jonka.png';
import fan from '../img/cubeguys_footballer_10.png';
import dom from '../img/dom_1.png';
import island from '../img/island_1.png';
import car from '../img/car_2.png';

function Assembly() {
  return (
    <>
      {/* <header>
        <NaviBar />
      </header> */}
      <main>
        <div >
          <Home banner={port} />
        </div>
        <hr />

        <div id='projects' style={{ "paddingTop": "100px" }}>
          <Projects project_1={sword} project_2={hedgehog} project_3={piu} project_4={fan} project_5={jonka} />
        </div>
        <hr />

        <div id='about' style={{ "paddingTop": "100px" }}>
          <AboutUs slide_1={dom} slide_2={car} slide_3={island} />
        </div>
        <hr />

        <div id='contact' style={{ "paddingTop": "100px" }}>
          <Contact />
        </div>

        {/* <div id='bottom' style={{ "paddingTop": "20px" }}>
          <Bottom />
        </div> */}
{/* 
        <div style={{ "paddingTop": "100px" }}></div> */}
      </main>
    </>
  );
}

export default Assembly;

