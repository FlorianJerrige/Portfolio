import React from 'react';
import ReactPlayer from "react-player";

// The InstrusSoundcloud component accepts a `url` prop
const InstrusSoundcloud = ({ url }) => {
  return (      
      <div className='max-w-4xl mx-auto p-4'>
        <ReactPlayer
          url={url} // Use the `url` prop here
          className="react-player"
          width="100%"
          height="auto"
          style={{
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        />
    </div>
  );
}

export default InstrusSoundcloud;
