import React from 'react';
import bgvideo from "../assets/bg.mp4"

export default function Home() {
  return (
    <div className="video-background">
      <video src={bgvideo} autoPlay muted loop width="100%" height="100%" style={{ objectFit: 'cover' }}></video>
    </div>
  )
}
