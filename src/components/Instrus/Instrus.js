import React from "react";
import InstruPlayer from "./InstruPlayer";

const Instrus = () => {
  const tracks = [
    { title: "Helsinki", bpm: 130, tags: ["rap", "cinematic"], url: "/Assets/Instrus/Helsinki.mp3" },
    { title: "Sakura", bpm: 130, tags: ["rap", "sample", "japanese jazz"], url: "/Assets/Instrus/Sakura.mp3" },
    { title: "J.O.S", bpm: 95, tags: ["rap", "cloud"], url: "/Assets/Instrus/jos.mp3" },
    { title: "Blue", bpm: 130, tags: ["groove", "jazz", "chill"], url: "/Assets/Instrus/Blue.mp3" },
    { title: "Chalumeau", bpm: 130, tags: ["disco", "pop", "electro"], url: "/Assets/Instrus/Chalumeau.mp3" },
    { title: "Cobra", bpm: 130, tags: ["rap", "sample", "inspiring"], url: "/Assets/Instrus/Cobra.mp3" },
    { title: "Guappo", bpm: 130, tags: ["rap", "sombre", "cinematic"], url: "/Assets/Instrus/Guappo.mp3" },
    { title: "Karmel", bpm: 130, tags: ["rap", "baile funk", "beat switch"], url: "/Assets/Instrus/Karmel.mp3" },
    { title: "Manero", bpm: 120, tags: ["disco"], url: "/Assets/Instrus/Manero.mp3" },
    { title: "Requiem", bpm: 120, tags: ["rap", "cinematic"], url: "/Assets/Instrus/Requiem.mp3" },
    { title: "Riva", bpm: 120, tags: ["rap", "dnb", "uk garage"], url: "/Assets/Instrus/Riva.mp3" },
    { title: "Sugar", bpm: 120, tags: ["groove", "jazz", "rap"], url: "/Assets/Instrus/Sugar.mp3" },
    { title: "Turquoise", bpm: 120, tags: ["rap", "cloud", "chill"], url: "/Assets/Instrus/Turquoise.mp3" },
    { title: "Brazil", bpm: 95, tags: ["lo-fi", "jazzy"], url: "/Assets/Instrus/brazil.mp3" },
  ];

  return (
    <div className="project-section min-h-screen py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Mes <strong className="purple">Instrus</strong>
      </h1>
      <InstruPlayer tracks={tracks} />
    </div>
  );
};

export default Instrus;
