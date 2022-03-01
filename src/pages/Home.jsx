import React from 'react';
import Home from '../components/Home';
import HeroSection from '../components/Home/HeroSection';
import GlobalLayout from '../components/layouts/GlobalLayout';

const HomePage = () => {
    return (
        <GlobalLayout>
            <HeroSection/>
            <Home/>
        </GlobalLayout>
    );
};

export default HomePage;