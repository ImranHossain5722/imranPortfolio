import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import MyProjects from '../MyProject/MyProjects';
import HomeTopSection from './HomeSections/HomeTopSection';

const Home = () => {
    return (
        
        <div className='Home-main'>
            <div className='image'>
            <HomeTopSection></HomeTopSection>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>

           </div> 
        </div>
    );
};

export default Home;