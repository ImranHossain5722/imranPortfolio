import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import MySkills from '../MySkills/MySkills';
import HomeTopSection from './HomeSections/HomeTopSection';

const Home = () => {
    return (
        <div className='Home-main'>
            <HomeTopSection></HomeTopSection>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
        </div>
    );
};

export default Home;