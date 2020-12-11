import React from 'react';
import EditDeleteCar from '../components/Dashboard/User/EditDeleteCar';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

const DetailsCar = () => {
    document.title = "Car Details Page | Automobile Searching App"
    return (
        <div>
            <Header />
            <EditDeleteCar />
            <Footer />
        </div>
    );
};

export default DetailsCar;