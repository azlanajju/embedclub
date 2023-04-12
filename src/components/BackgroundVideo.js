import React from "react";
import myVid from './assets/bg.mp4'

export default function BackgroundVideo() {
  return (
    <div class="relative z-10">
      {/* <!-- Content here --> */}
      <video class="absolute top-0 left-0 w-full h-full" autoplay muted loop>
        <source src={myVid} type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black opacity-50 z-0 backdrop-blur-lg"></div>
    </div>
  );
}
