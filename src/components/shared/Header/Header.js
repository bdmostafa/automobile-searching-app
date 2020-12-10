import React from 'react';
import './Header.css';
import { Jumbotron, Button } from 'react-bootstrap';
// import '../assets/css/bootstrap.min.css';
import logo from '../../../assets/images/logo.png';


const Header = () => {
    return (
        <div className="container-fluid text-center">
            <Jumbotron>
                <img className="w-25 mb-3" src={logo} alt="" />
                <h2>Welcome to Automobile Searching App!</h2>
                <p>
                    The most efficient way to search your desired car from world-class brands and companies.
                </p>
                <p>
                    <Button variant="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Header;