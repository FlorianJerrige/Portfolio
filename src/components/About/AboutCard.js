import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, c'est <span className="purple">Mobzer ! </span>
            J'habite à <span className="purple"> Paris.</span>
            <br />
            Je propose aux artistes de les accompagner dans la création de leurs projets musicaux.
            <br />
            J'ai travaillé sur de nombreux projets, dans des styles variés (rap, pop, chanson française).
            <br />
            <br />
            J'aime travailler avec des artistes ambitieux. Je propose également du mixage et du mastering.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Composition Sur Mesure
            </li>
            <li className="about-activity">
              <ImPointRight /> Enregistrement & Mixage
            </li>
            <li className="about-activity">
              <ImPointRight /> Mastering
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Contacte-moi pour me parler de ton projet!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
