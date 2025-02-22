import React, { useEffect, useState } from 'react';

function Video() {
  const [videoUrl, setVideoUrl] = useState('https://youtu.be/OOhNmskVbQw?si=gRxkS7wjjWsdUfw6');

  useEffect(() => {
    // Fetch the video URL from the backend (replace with your API endpoint)
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch('/api/video');  // Replace with your backend API
        const data = await response.json();
        setVideoUrl(data.videoUrl); // Assuming the backend returns a { videoUrl: 'https://youtube.com/...' }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideoUrl();
  }, []);

  if (!videoUrl) {
    return <div className="text-center text-lg text-gray-500">Loading video...</div>;
  }

  return (
   <div className='bg-gray-200 pt-20'>
     <div className="video-container  px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Watch Our Latest Video</h2>
      <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
        {/* YouTube Embed */}
        <iframe
          className="absolute top-0 left-0 w-full h-9/10 rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
   </div>
  );
}

// Utility function to extract video ID from YouTube URL
const extractVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^/]+\/[^\n\s]*|(?:v|e(?:mbed)?)\/([^?&\s]*))|youtu\.be\/([^?&\s]*))/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : '';
};

export default Video;
