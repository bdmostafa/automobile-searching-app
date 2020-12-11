import React, { useContext } from "react";
import "./Header.css";
import { Jumbotron, Button, Form, FormControl } from "react-bootstrap";
import { UserContext } from "../../../App";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  const { search, setSearch, setSearchBtn } = useContext(UserContext);

  const path = useLocation().pathname;

  const handleSearchBtn = (e) => {
    e.preventDefault();
    setSearchBtn(search.toLowerCase());
  };

  return (
    <div className="container-fluid text-center">
      <div style={{backgroundColor: "#e9ecef"}}>
        <NavBar />
      </div>
      
      {(path === "/" || path === "/home") && (
        <Jumbotron className="jumbotronHeader">
          <h2>Welcome to Automobile Searching App!</h2>
          <p>
            The most efficient way to search your desired car from world-class
            brands and companies.
          </p>
          <div className="w-50 m-auto">
            <Form className="d-flex">
              <FormControl
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="form-control jumbotronHeader__search"
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
          </div>{" "}
        </Jumbotron>
      )}
    </div>
  );
};

export default Header;
