import React from 'react';
import AddNewCar from '../components/Dashboard/User/AddNewCar';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

const AddCar = () => {
    document.title = "Add New Car | Automobile Searching App"
    return (
        <div>
            <Header />
            <AddNewCar />
            <Footer />
        </div>
    );
};

export default AddCar;