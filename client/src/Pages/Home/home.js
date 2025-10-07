import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import videoSource from '../../assets/images/killvideo.mp4';

const Home = () => {
  const videoRef = useRef(null);
  const servicesRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const navigate = useNavigate();

  // Video load and auto-play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
      video.play().catch(error => {
        console.log("Auto-play blocked");
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    video.muted = false;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Services scroll animation (final fix)
  useEffect(() => {
    const currentServicesRef = servicesRef.current; // ✅ local copy to fix warning

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentServicesRef) {
      observer.observe(currentServicesRef);
    }

    return () => {
      if (currentServicesRef) {
        observer.unobserve(currentServicesRef); // ✅ use local copy
      }
    };
  }, []);

  // Scroll volume control
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollPosition = window.scrollY;
        const newVolume = Math.max(0, 1 - scrollPosition / 300);
        videoRef.current.volume = newVolume;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to contact page
  const openServiceContact = (serviceName, serviceId) => {
    navigate('/contact', {
      state: {
        selectedService: serviceName,
        serviceId: serviceId
      }
    });
  };

  // Scroll to next section function
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const services = [
    { id: 1, title: "AD Video", description: "Powerful ad films that capture attention, connect emotionally, and communicate your brand’s core message effectively.", image: "/images/ad-films.jpg", icon: "🎬" },
    { id: 2, title: "Social Media Reels", description: "Engaging short reels crafted to boost visibility, drive conversations, and create lasting social media impressions.", image: "/images/social-reels.jpg", icon: "📱" },
    { id: 3, title: "Music Videos", description: "Stunning music videos that combine creativity, storytelling, and visuals to bring your songs alive beautifully.", image: "/images/music-videos.jpg", icon: "🎵" },
    { id: 4, title: "Short Films", description: "Creative short films with impactful storytelling, high-quality visuals, and emotions that deeply connect with audiences.", image: "/images/short-films.jpg", icon: "📽" },
    { id: 5, title: "Wedding Shoots", description: "Cinematic wedding shoots capturing timeless moments, raw emotions, and unforgettable memories in breathtaking visual storytelling.", image: "/images/wedding-shoots.jpg", icon: "💒" },
    { id: 6, title: "Brand Promotions", description: "Strategic brand promotion videos designed to increase recognition, build trust, and drive meaningful customer engagement.", image: "/images/brand-promotions.jpg", icon: "🚀" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home">
        <div className="video-container">
          <video
            ref={videoRef}
            className={`background-video ${isVideoReady ? 'visible' : 'hidden'}`}
            loop
            playsInline
            muted={false}
            preload="auto"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-background-overlay"></div>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-heading">
              <span className="k91-text">K91</span>
              <span className="production-text">PRODUCTION</span>
            </h1>
            <p className="description">
              Hum ek creative production house hain jo ads, short films, music videos, wedding shoots, reels aur brand promotions me apna alag hi cinematic touch dete hain. Har frame me emotion, style aur perfection humari pehchaan hai.
            </p>
            <div className="hero-button">
              <div className="wrapper">
                <div className="link_wrapper">
                  <button className="view-work-btn" onClick={scrollToNextSection}>
                    View Service
                  </button>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                      <path d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className={`services-section ${isServicesVisible ? 'visible' : ''}`}
      >
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our Premium Services</h2>
            <p className="services-subtitle">
              Professional video production services that bring your vision to life with creativity and excellence.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${isServicesVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-image">
                  <div className="image-placeholder">
                    <span className="service-icon">{service.icon}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <button
                    className="contact-btn"
                    onClick={() => openServiceContact(service.title, service.id)}
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;