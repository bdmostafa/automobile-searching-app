import React, { useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import Car from './Car';
import './Cars.css';
import fakeCars from '../../fakeData/fakeCars'
import { useHistory } from 'react-router-dom';

const Cars = () => {

    const [cars, setCars] = useState({});
    
    const [detailsCar, setDetailsCar] = useState({});

    const history = useHistory();

    const handleCar = (id) => {
        // Update state on which car is to be edited
        const selectedCar = fakeCars.find(car => car._id === id);
        setDetailsCar(selectedCar);
        // Redirect to details car page
        history.push(`/dashboard/user/details-car`);
    }

    return (
        <Container className="text-center mb-5">

            <Row><h2 className="m-auto p-5">Featured Cars </h2></Row>

            <Row className="justify-content-center">
                {
                    fakeCars.length === 0
                    && 
                    <Button className="m-5 m-auto" variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                            Services Loading...
                        </Button>
                }
                {
                    fakeCars.length > 0
                    && fakeCars.map(car =>
                        <Car
                            key={car._id}
                            handleCar={handleCar}
                            car={car}
                        />
                    )
                }
            </Row>

        </Container>
    );
};

export default Cars;