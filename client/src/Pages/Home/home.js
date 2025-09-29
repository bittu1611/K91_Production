import React, { useRef, useEffect } from "react";
import "./home.css";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Ensure video autoplay (muted first)
    if (video) {
      video.muted = true; 
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay blocked, muted video played");
        });
      }
    }

    // Scroll-based volume control & unmute
    const handleScroll = () => {
      if (video) {
        const scrollTop = window.scrollY;
        const maxScroll = window.innerHeight;
        const scrollRatio = Math.min(scrollTop / maxScroll, 1);

        // Unmute after some scroll
        if (scrollTop > 50 && video.muted) {
          video.muted = false;
        }

        video.volume = 1 - scrollRatio; // volume decreases with scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default Home;
