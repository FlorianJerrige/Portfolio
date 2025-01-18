import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import studio1 from "../../Assets/studio1.jpg"
import studio3 from "../../Assets/studio3.jpg"
import studio2 from "../../Assets/studio2.jpg"
import studio4 from "../../Assets/studio4.jpg"
import pp from "../../Assets/pp.jpg"


import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-moi <span className="purple"> ME </span> PRESENTER
            </h1>
            <p className="home-about-body">
              Je propose aux artistes de les accompagner dans la création de leurs projets musicaux 🤷‍♂️
              <br />
              <br />Je maîtrise
              <i>
                <b className="purple"> la composition sur mesure, le mixage et le mastering </b>
              </i>
              <br />
              <br />
              J'aime composer pour divers styles musicaux. Je fais notamment des &nbsp;
              <i>
                <b className="purple">Instrus Rap </b> ou
                je joue de la guitare pour des artistes de{" "}
                <b className="purple">
                  Variété Française.
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={studio3} className="img-fluid w-60" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              N'hésite pas à m'envoyer un <span className="purple">message </span> sur Insta
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mobzer99/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
