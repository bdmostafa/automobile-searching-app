import {
  faCodepen,
  faFacebookF,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const path = useLocation().pathname;
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          {(path === "/" || path === "/home") && (
            <Row>
              <Col>
                <ul className="list-unstyled text-left">
                  <h3>Automobile Searching App</h3>
                  <li>About</li>
                  <li>Terms & COnditions</li>
                  <li>Privacy Policy</li>
                  <li>Support 24/7/365</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled text-left">
                  <h3>Features</h3>
                  <li>Add New Car</li>
                  <li>Edit Existing Car</li>
                  <li>Delete Listed Car</li>
                  <li>Quick Search</li>
                  <li>AI Integration</li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled text-left">
                  <h3>Community</h3>
                  <li>Leaders</li>
                  <li>Racer</li>
                  <li>Professionals</li>
                  <li>Partners</li>
                  <li>Blog</li>
                </ul>
              </Col>
            </Row>
          )}

          <Row>
            <Col className="text-left p-2 text-decoration-none">
              <p>
                &copy;Copyright {new Date().getFullYear()}. Automobile Searching
                App. Developed by <a href="https://mdmostafa.com">Mostafa</a>
              </p>
            </Col>
            <Col className="text-right pr-5">
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  className="text-primary mr-1"
                  icon={faFacebookF}
                />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon className="text-info mr-1" icon={faLinkedin} />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon className="text-dark mr-1" icon={faGithub} />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  className="text-secondary mr-1"
                  icon={faCodepen}
                />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon className="text-danger" icon={faYoutube} />
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
