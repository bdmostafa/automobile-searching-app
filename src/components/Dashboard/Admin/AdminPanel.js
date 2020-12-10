import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './AdminPanel.css'

const Admin = () => {
    const history = useHistory();
    const goHome = () => {
        history.push('/')
    }
    return (
        <div className='admin'>
            <h1>Admin Panel Under Construction</h1>
            <p>Please wait for new features!</p>
            <Button
                onClick={goHome}
                variant="outline-primary"
            >Go Home</Button>
        </div>
    );
};

export default Admin;