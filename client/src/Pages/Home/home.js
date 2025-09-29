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
    <div className="home-container">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          loop
          playsInline
        >
          <source src="/home_img/killshortvideo.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="overlay-text">
          <h1 className="fade-in">Welcome to My Website</h1>
          <p className="slide-up">Building Modern & Professional Websites</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2>Scroll Down Content</h2>
        <p>
          Video continues playing in loop. Volume decreases as you scroll
          down. Scroll back up to increase volume again.
        </p>
      </section>
      <h2>home </h2>
      <h3>sourabh</h3>

    </div>
  );
}

export default Home;
