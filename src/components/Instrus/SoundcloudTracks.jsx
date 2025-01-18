import React from 'react';
import InstrusSoundcloud from './InstrusSoundcloud'; // Import the InstrusSoundcloud component

const SoundcloudTracks = () => {
  // Array of SoundCloud URLs
  const tracks = [
    "https://soundcloud.com/van-jerrige/prod-flocon",
    "https://soundcloud.com/van-jerrige/helsinki-179-bpm",
    "https://soundcloud.com/van-jerrige/sets/sakura",
    "https://soundcloud.com/van-jerrige/cola",
    "https://soundcloud.com/van-jerrige/turquoise",
    "https://soundcloud.com/van-jerrige/tien-tien-tien",
    "https://soundcloud.com/van-jerrige/grrrrr-oove",
    "https://soundcloud.com/van-jerrige/lebowski",
    "https://soundcloud.com/van-jerrige/84-13-rpz-monclar-la-caste",
    "https://soundcloud.com/van-jerrige/instru",
    "https://soundcloud.com/van-jerrige/le-banc",
    "https://soundcloud.com/van-jerrige/van-jerrige-chicago",
    "https://soundcloud.com/van-jerrige/84-13-rpz-monclar-la-caste",
    "https://soundcloud.com/van-jerrige/instru",
    "https://soundcloud.com/van-jerrige/le-banc",
    "https://soundcloud.com/van-jerrige/van-jerrige-chicago",
    "https://soundcloud.com/van-jerrige/prod-karma",
    "https://soundcloud.com/van-jerrige/prod-le-sorcier",

  ];

  return (
    <div className="project-section min-h-screen py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Mes <strong className="purple">Instrus</strong>
      </h1>
        <div class='overflow-auto'>
            {/* Loop through the tracks and render InstrusSoundcloud for each */}
                {tracks.map((url, index) => (
                <InstrusSoundcloud key={index} url={url} />
      ))}
        </div>
      
    </div>
  );
}

export default SoundcloudTracks;
