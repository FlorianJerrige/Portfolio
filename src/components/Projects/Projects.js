import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Importer le composant ProjectCards
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques uns de mes projets de compositions sur mesure pour des artistes comme Anouk, Apolline, S.N.T.C.H, ou encore Mossra !
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1: Chatify */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Anouk - Au matin des drames"
              description="J'ai aidé Anouk à composer ce morceau. J'ai également pris en charge l'enregistrement et mixage"
              ghLink="https://www.youtube.com/watch?v=spZ83hCq2Hw"
              videoUrl="https://www.youtube.com/watch?v=spZ83hCq2Hw" // Lien vers la vidéo YouTube
            />
          </Col>

          {/* Project 2: Bits-0f-C0de */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Anouk - Alice"
              description="J'ai aidé Anouk à composer ce morceau. J'ai également pris en charge l'enregistrement et mixage"
              ghLink="https://www.youtube.com/watch?v=IbbwM4LEJJk"
              videoUrl="https://www.youtube.com/watch?v=IbbwM4LEJJk" // Lien vers la vidéo YouTube
            />
          </Col>

          {/* Project 3: Editor.io */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Anouk - The echoes of your laughter"
              description="J'ai aidé Anouk à composer ce morceau. J'ai également pris en charge l'enregistrement et mixage"
              ghLink="https://www.youtube.com/watch?v=TatQs1k6w-o"
              videoUrl="https://www.youtube.com/watch?v=TatQs1k6w-o" // Lien vers la vidéo YouTube
            />
          </Col>

          {/* Project 4: Plant AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Mossra - Clignotant"
              description="J'ai aidé Mossra à composer ce morceau. J'ai également pris en charge l'enregistrement et mixage"
              ghLink="https://www.youtube.com/watch?v=llcqzYLEvWM"
              videoUrl="https://www.youtube.com/watch?v=llcqzYLEvWM" // Lien vers la vidéo YouTube
            />
          </Col>

          {/* Project 5: Ai For Social Good */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="S.N.T.C.H - Me rappelle pas"
              description="J'ai aidé S.N.T.C.H à composer ce morceau. J'ai également pris en charge l'enregistrement et mixage"
              ghLink="https://www.youtube.com/watch?v=Xw6u4jFUinY"
              videoUrl="https://www.youtube.com/watch?v=Xw6u4jFUinY" // Lien vers la vidéo YouTube
            />
          </Col>

          {/* Project 6: Face Recognition and Emotion Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Apolline - EGO (Official Video)"
              description="J'ai aidé Apolline à composer ce morceau. J'ai également pris en charge l'enregistrement et mixage"
              ghLink="https://www.youtube.com/watch?v=7h72Lf8NqKc"
              videoUrl="https://www.youtube.com/watch?v=7h72Lf8NqKc" // Lien vers la vidéo YouTube
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
