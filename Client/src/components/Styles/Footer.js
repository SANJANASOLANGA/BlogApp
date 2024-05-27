import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CookeryCorner</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/sanjana.solangaarachchi.33"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiFacebookCircleFill />
              </a> 
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/sanjana_solangaarachchi/?igshid=ZDdkNTZiNTM%3D"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
