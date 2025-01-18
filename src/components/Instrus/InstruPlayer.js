import React, { useState, useRef } from "react";

const InstruPlayer = ({ tracks }) => {
  const audioRefs = useRef([]); // Tableau de références pour chaque audio
  const [playingIndex, setPlayingIndex] = useState(null); // Index du morceau en lecture

  // Fonction pour jouer ou mettre en pause un morceau
  const togglePlay = (index) => {
    const currentAudio = audioRefs.current[index];

    if (playingIndex !== index && currentAudio) {
      // Si un autre morceau est déjà en lecture, on le met en pause
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      // Jouer le morceau sélectionné
      currentAudio.play().then(() => {
        setPlayingIndex(index); // Mettre à jour l'index du morceau en lecture
      }).catch(error => {
        console.error("Error playing the audio:", error);
      });
    } else if (currentAudio) {
      // Si le morceau est déjà en lecture, on le met en pause
      currentAudio.pause();
      setPlayingIndex(null); // Réinitialiser l'index de lecture
    }
  };

  return (
    <div className="instru-player">
      <div className="track-list">
        <h2 className="text-xl font-semibold mb-5">Tracklist</h2>
        <ul>
          {tracks.map((track, index) => (
            <li key={index} className="track-item hover:bg-gray-700 cursor-pointer py-2 px-4 rounded">
              <span>{track.title}</span> - {track.bpm} BPM
              <div className="tags text-xs text-gray-400">
                {track.tags.join(", ")}
              </div>
              
              {/* Bouton play/pause et lecteur audio pour chaque morceau */}
              <div className="audio-player mt-2">
                <button
                  onClick={() => togglePlay(index)}
                  className="play-button bg-purple-500 text-white px-4 py-2 rounded-full"
                >
                  {playingIndex === index ? "Pause" : "Play"}
                </button>
                
                <audio
                  ref={(el) => (audioRefs.current[index] = el)} // Associer chaque audio à sa référence
                  onEnded={() => setPlayingIndex(null)} // Quand l'audio est terminé, réinitialiser l'index
                >
                  <source src={track.url} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstruPlayer;
