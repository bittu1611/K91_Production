import React, { useState, useRef } from "react";
import "./project.css";

// Videos import
import PV1 from "../../assets/images/PV1.mp4";
import PV2 from "../../assets/images/PV2.mp4";
import PV3 from "../../assets/images/PV3.mp4";
import PV4 from "../../assets/images/PV4.mp4";
import PV5 from "../../assets/images/PV5.mp4";
import PV6 from "../../assets/images/PV6.mp4";
import YT1 from "../../assets/images/YT1.mp4";
import YT2 from "../../assets/images/YT2.mp4";

// Images import
import Post1 from "../../assets/images/post1.jpg";
import Post2 from "../../assets/images/post2.jpg";
import Post3 from "../../assets/images/post3.jpg";

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef({});

  const projects = [
    { id: 1, type: "reel", videoUrl: PV1 },
    { id: 2, type: "reel", videoUrl: PV2 },
    { id: 3, type: "reel", videoUrl: PV3 },
    { id: 4, type: "reel", videoUrl: PV4 },
    { id: 5, type: "reel", videoUrl: PV5 },
    { id: 6, type: "reel", videoUrl: PV6 },
    { id: 7, type: "youtube", videoUrl: YT1 },
    { id: 8, type: "youtube", videoUrl: YT2 },
    { id: 9, type: "image", imageUrl: Post1 },
    { id: 10, type: "image", imageUrl: Post2 },
    { id: 11, type: "image", imageUrl: Post3 }
  ];

  const setVideoRef = (element, projectId) => {
    if (element) {
      videoRefs.current[projectId] = element;
    }
  };

  const handleVideoHover = (projectId) => {
    setActiveVideo(projectId);
    const videoElement = videoRefs.current[projectId];
    if (videoElement) {
      videoElement.currentTime = 0; // start from beginning
      videoElement.muted = false;
      videoElement.play().catch(() => {});
    }
  };

  const handleVideoLeave = (projectId) => {
    setActiveVideo(null);
    const videoElement = videoRefs.current[projectId];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 2; // thumbnail 2-sec
      videoElement.muted = true;
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-grid">

        {/* First Row - 3 Reels */}
        <div className="row reel-row">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className={`project-item reel-item ${
                activeVideo === project.id ? "hover-active" : ""
              }`}
              onMouseEnter={() => handleVideoHover(project.id)}
              onMouseLeave={() => handleVideoLeave(project.id)}
            >
              <div className="media-container">
                {project.type !== "image" ? (
                  <video
                    ref={(el) => setVideoRef(el, project.id)}
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="project-media"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 2; // thumbnail
                      e.currentTarget.pause();
                    }}
                  />
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={`Project ${project.id}`}
                    className="project-media"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Reels */}
        <div className="row reel-row">
          {projects.slice(3, 6).map((project) => (
            <div
              key={project.id}
              className={`project-item reel-item ${
                activeVideo === project.id ? "hover-active" : ""
              }`}
              onMouseEnter={() => handleVideoHover(project.id)}
              onMouseLeave={() => handleVideoLeave(project.id)}
            >
              <div className="media-container">
                <video
                  ref={(el) => setVideoRef(el, project.id)}
                  src={project.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="project-media"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 2;
                    e.currentTarget.pause();
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 2 YouTube Videos */}
        <div className="row youtube-row">
          {projects.slice(6, 8).map((project) => (
            <div
              key={project.id}
              className={`project-item youtube-item ${
                activeVideo === project.id ? "hover-active" : ""
              }`}
              onMouseEnter={() => handleVideoHover(project.id)}
              onMouseLeave={() => handleVideoLeave(project.id)}
            >
              <div className="media-container">
                <video
                  ref={(el) => setVideoRef(el, project.id)}
                  src={project.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="project-media"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 2;
                    e.currentTarget.pause();
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Row - 3 Posts */}
        <div className="row image-row">
          {projects.slice(8, 11).map((project) => (
            <div key={project.id} className="project-item image-item">
              <div className="media-container">
                <img
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  className="project-media"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;