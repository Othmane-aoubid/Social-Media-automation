import React from 'react';
import './LandingPage.css';
import HeroSection from '../HeroSection';
import Features from '../Features';
import Pricing from '../Pricing'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <HeroSection /> 
            <Features />
            <Pricing />
        </div>
    );
};

export default LandingPage;
