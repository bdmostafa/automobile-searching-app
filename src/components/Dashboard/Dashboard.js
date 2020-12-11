import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import './Dashboard.css';

const Dashboard = () => {
  const history = useHistory();
  const addNewCar = () => {
    history.push("/dashboard/user/add-car");
  };
  return (
    <>
      <Header />
      <div className="dashboard__area">
          <h2 style={{ textAlign: "center" }}>Welcome to dashboard</h2>
      <Button onClick={addNewCar} variant="outline-primary">
        Add a car
      </Button>
      </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;
