import React from "react";
import web from "../src/images/gym.jpg";
import { NavLink } from 'react-router-dom';
import About from './About';
import Common from './Common';


const Home=()=>{
    return (
        <>
        <Common text='HI!I am Eshan Chourasia' imgsrc={web} visit={About} btname="contact me"/>
        
        </>
    )
}
export default Home ;