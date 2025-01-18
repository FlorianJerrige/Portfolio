import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMacos } from "react-icons/si";
import waves from "../../Assets/waves.avif";
import flstudio from "../../Assets/flstudio.png";
import arturia from "../../Assets/arturia.png";
import valhalla from "../../Assets/valhalla.png";
import spectrasonics from "../../Assets/spectrasonics.png";
import splice from "../../Assets/splice.png";
import cableguys from "../../Assets/cableguys.png";
import antares from "../../Assets/antares.png";

const imgStyle = {
  width: "100px",
  height: "100px",
  objectFit: "contain", // Pour garder le ratio d'aspect
  filter: "brightness(0) invert(1)", // Si vous voulez appliquer un filtre
};

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={waves} alt="Waves Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={flstudio} alt="FL Studio Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={arturia} alt="Arturia Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={valhalla} alt="Valhalla Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={spectrasonics} alt="Spectrasonics Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={splice} alt="Splice Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cableguys} alt="Cableguys Logo" style={imgStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={antares} alt="Antares Logo" style={imgStyle} />
      </Col>
    </Row>
  );
}

export default Toolstack;
