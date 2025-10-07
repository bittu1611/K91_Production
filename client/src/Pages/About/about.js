import React, { useState, useEffect } from "react";
import "./about.css";
import AboutMyImg from "../../assets/images/AboutMyImg.jpg";
// Check these import paths
import SFI1 from "../../assets/images/after-effects.png";
import SFI2 from "../../assets/images/premiere-pro.png"; 
import SFI3 from "../../assets/images/photoshop.png";
import SFI4 from "../../assets/images/chatgpt.png";
function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "Video Production", level: 95 },
    { name: "Cinematography", level: 90 },
    { name: "Video Editing", level: 92 },
    { name: "Color Grading", level: 88 },
    { name: "Sound Design", level: 85 },
    { name: "Visual Effects", level: 80 }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className={`about-page ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">

        {/* Header Section */}
        <div className="about-header">
          <h1 className="about-title">About K91 PRODUCTION</h1>
          <p className="about-subtitle">
            Crafting Visual Stories That Captivate and Inspire
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">

          {/* Image Section */}
          <div className="about-image-section">
            <div className="image-container">
              <img
                src={AboutMyImg}
                alt="K91 Production Team"
                className="about-image"
              />
              <div className="image-overlay"></div>
              <div className="experience-badge">
                <span className="years">2+</span>
                <span className="text">Years Experience</span>
              </div>
            </div>
            <div className="skills-section">
                <h3 className="skills-title">Our Expertise</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>




            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Content Section */}
          <div className="about-text-section">
            <div className="text-content">

              <h2 className="section-title">Our Story</h2>
              <p className="description">
                <strong>I’m Hemant, founder of K91 Production</strong>, where passion meets creativity. With years of experience in video shooting and editing, I’ve turned a love for cameras into a growing production house.
              </p>

              <p className="description">
                My work blends storytelling with cinematic visuals to help brands, artists, and individuals make an impact. Beyond work, I find inspiration in real moments and close bonds. Dedicated, ambitious, and creative, I believe every frame has the power to tell a story.
              </p>

              <div className="mission-vision">
                <div className="mission">
                  <h3>🎯 Our Mission</h3>
                  <p>
To make every Sikar businessman’s brand go viral by creating impactful visuals, innovative stories, and digital strategies that drive lasting success.
                  </p>
                </div>

                <div className="vision">
                  <h3>🚀 Our Vision</h3>
                  <p>
                    To be the most trusted production partner for businesses and
                    creators, known for our creative vision, technical expertise,
                    and unwavering commitment to quality.
                  </p>
                </div>
              </div>


              {/* Skills Section */}
              
              {/* Why Choose Us */}
              <div className="features-section">
                <h3>✨ Why Choose K91 PRODUCTION?</h3>
                <div className="features-grid">
                  <div className="feature">
                    <h4>🎬 Creative Excellence</h4>
                    <p>Unique storytelling approaches that make your content stand out</p>
                  </div>
                  <div className="feature">
                    <h4>⚡ Quick Turnaround</h4>
                    <p>Efficient workflows without compromising on quality</p>
                  </div>
                  <div className="feature">
                    <h4>💎 Premium Quality</h4>
                    <p>State-of-the-art equipment and professional-grade output</p>
                  </div>
                  <div className="feature">
                    <h4>🤝 Client-Centric</h4>
                    <p>Your vision is our priority - we listen, we understand, we deliver</p>
                  </div>
                </div>
              </div>

            </div>
          </div>




  {/* Most Used Software Section */}

  
  {/* Software Section */}
    {/* Software Section */}
  <div className="software-section">
    <h3 className="software-title">Most Used Software</h3>
    <p className="software-subtitle">Tools that power my creativity and productivity</p>
    
    <div className="software-grid">
      <div className="software-card">
        <div className="software-icon">
          <img src={SFI1} alt="After Effects" />
        </div>
        <h4>After Effects</h4>
        <p>Motion Graphics & VFX</p>
        <div className="skill-bar">
          <div className="skill-progress ae-progress"></div>
        </div>
      </div>
      
      <div className="software-card">
        <div className="software-icon">
          <img src={SFI2} alt="Premiere Pro" />
        </div>
        <h4>Premiere Pro</h4>
        <p>Video Editing</p>
        <div className="skill-bar">
          <div className="skill-progress pp-progress"></div>
        </div>
      </div>
      
      <div className="software-card">
        <div className="software-icon">
          <img src={SFI3} alt="Photoshop" />
        </div>
        <h4>Photoshop</h4>
        <p>Photo Editing & Design</p>
        <div className="skill-bar">
          <div className="skill-progress ps-progress"></div>
        </div>
      </div>
      
      <div className="software-card">
        <div className="software-icon">
          <img src={SFI4} alt="ChatGPT" />
        </div>
        <h4>ChatGPT</h4>
        <p>AI Assistant & Coding</p>
        <div className="skill-bar">
          <div className="skill-progress chatgpt-progress"></div>
        </div>
      </div>
    </div>
  </div>
</div>



      

      </div>
    </div>
  );
}

export default About;