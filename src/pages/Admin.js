import React from 'react';
import AdminPanel from '../components/Dashboard/Admin/AdminPanel';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

const Admin = () => {
    document.title = "Admin Panel | Automobile Searching App"
    return (
        <>
            <Header />
            <AdminPanel />
            <Footer />
        </>
    );
};

export default Admin;