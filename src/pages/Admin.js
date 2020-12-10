import React from 'react';
import AdminPanel from '../components/Dashboard/Admin/AdminPanel';

const Admin = () => {
    document.title = "Admin Panel | Automobile Searching App"
    return (
        <div>
            <AdminPanel />
        </div>
    );
};

export default Admin;