import React from "react";
import { Card, Col } from "react-bootstrap";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Car = ({ car, handleCar }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const {
    _id,
    name,
    features,
    img,
    price,
    star,
    bestSeller,
    reviews,
    petrol,
    km,
    manual,
    sport,
    color,
    year,
  } = car;

  return (
    <Col xs={12} sm={6} md={4} onClick={() => handleCar(_id)}>
      <animated.div
        className="card-animated"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Card className="card-style">
          <Card.Body>
            <Card.Img
              variant="top"
              //   src={cars && `data:image/png;base64,${service.img.img}`}
              src={img}
              className="w-75 m-3 card-img-top"
            />
            <Card.Title>{name}</Card.Title>
            <Card.Text> {features} </Card.Text>
            <Card.Text> {price} </Card.Text>
            <Card.Text> {star} </Card.Text>
            <Card.Text> {bestSeller && bestSeller} </Card.Text>
            <Card.Text> {km} </Card.Text>
            <Card.Text> {reviews} </Card.Text>
            <Card.Text> {petrol && petrol} </Card.Text>
            <Card.Text> {manual && manual} </Card.Text>
            <Card.Text> {sport && sport} </Card.Text>
            <Card.Text> {color} </Card.Text>
            <Card.Text> {year} </Card.Text>
          </Card.Body>
        </Card>
      </animated.div>
    </Col>
  );
};

export default Car;
