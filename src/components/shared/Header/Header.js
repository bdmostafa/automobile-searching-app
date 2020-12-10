import React, { useContext } from "react";
import "./Header.css";
import { Jumbotron, Button, Form, FormControl } from "react-bootstrap";
// import '../assets/css/bootstrap.min.css';
import logo from "../../../assets/images/logo.png";
import { UserContext } from "../../../App";

const Header = () => {

    const { search, setSearch, setSearchBtn } = useContext(UserContext);

    const handleSearchBtn = (e) => {
        e.preventDefault();
        setSearchBtn(search.toLowerCase());
      };


  return (
    <div className="container-fluid text-center">
      <Jumbotron>
        <img className="w-25 mb-3" src={logo} alt="" />
        <h2>Welcome to Automobile Searching App!</h2>
        <p>
          The most efficient way to search your desired car from world-class
          brands and companies.
        </p>
        <p>
          <Button variant="primary">Learn More</Button>
        </p>
        <div className="w-50 m-auto">
          <Form className="d-flex">
            <FormControl
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="form-control"
            />
            <div className="ml-2">
              {" "}
              <Button
                onClick={handleSearchBtn}
                type="submit"
                variant="contained"
                className="btn btn-primary"
              >
                {" "}
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;
