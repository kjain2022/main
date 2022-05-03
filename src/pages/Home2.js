import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjThree} from '../components/InfoSection/Data';
import InfoSection2 from '../components/InfoSection2';
import { homeObjOne,homeObjTwo } from '../components/InfoSection2/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Steps from '../components/Steps';
import Steps2 from '../components/Steps2';
import Steps3 from '../components/Steps3';



const Home2 = () => {
    const [isOpen, setIsOpen] =useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection2 {...homeObjOne}/>
    <InfoSection2 {...homeObjTwo}/>
    <Steps/>
    <InfoSection {...homeObjThree}/>
    <Steps2/>
    <Steps3/>
    <Footer/>
    
    

      
    </>
  )
}

export default Home2;
