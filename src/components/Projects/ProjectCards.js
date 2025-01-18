import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player/youtube"; // Importer ReactPlayer pour intégrer les vidéos YouTube
import { FaYoutube } from "react-icons/fa";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Utilisation de ReactPlayer pour intégrer la vidéo YouTube */}
      <Card.Body>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            url={props.videoUrl} // Le lien de la vidéo YouTube
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            playing={false} // Laisser la vidéo non lue par défaut, vous pouvez ajouter un bouton pour la lecture si vous souhaitez
            controls={true} // Activer les contrôles de la vidéo
          />
        </div>
        
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Ajouter le bouton GitHub */}
        <Button variant="primary" href={props.ghLink} target="_blank">
        <FaYoutube />&nbsp;
          YouTube
        </Button>
        {"\n"}
        {"\n"}

       
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
