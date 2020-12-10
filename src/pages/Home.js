import React from 'react';
import Cars from '../components/Cars/Cars';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
    document.title = "Home Page | Automobile Searching App"
    return (
        <div>
            <Header />
            <Cars />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;