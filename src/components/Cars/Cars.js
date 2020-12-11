import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import Car from "./Car";
import "./Cars.css";
import fakeCars from "../../fakeData/fakeCars";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Cars = () => {
  const { cars, setCars, search, setDetailsCar } = useContext(UserContext);

  const history = useHistory();

  const handleCar = (id) => {
    // Update state on which car is to be edited
    const selectedCar = cars.find((car) => car._id === id);
    setDetailsCar(selectedCar);
    // Redirect to details car page
    history.push(`/dashboard/user/details-car`);
  };

  useEffect(() => {
    setCars(fakeCars);
  }, []);

  return (
    <Container className="text-center mb-5">
      <Row>
        <h2 className="m-auto p-5">Featured Cars </h2>
      </Row>

      <Row className="justify-content-center">
        {cars.length === 0 && (
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
        )}
        {/* {cars.length > 0 &&
          cars.map((car) => (
            <Car key={car._id} handleCar={handleCar} car={car} />
          ))} */}

        {cars.length > 0 && 
          cars.filter((car) => car.name.toLowerCase().includes(search.trim()))
          .map((car) => (
            <Car key={car._id} handleCar={handleCar} car={car} />
          ))}
      </Row>
    </Container>
  );
};

export default Cars;
