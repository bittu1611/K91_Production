import React from 'react';
import './service.css';

const services = [
  { emoji: '🎬', title: 'Music & Short Film', desc: 'Professional shooting and production for music videos and short films.' },
  { emoji: '📸', title: 'Product Shoot', desc: 'High-quality photos & videos for products, commercials, and promotions.' },
  { emoji: '🎥', title: 'Professional Reels & YouTube Videos', desc: 'Engaging reels and YouTube content creation for brands and creators.' },
  { emoji: '🎙️', title: 'Voice Over', desc: 'Male or female voice as per requirement for ads, videos, or narration.' },
  { emoji: '✍️', title: 'Script Writing', desc: 'Creative script writing for ads, reels, and YouTube content.' },
  { emoji: '🖥️', title: 'Editing & VFX', desc: 'Editing with VFX, color grading, and watermark on demand for polished videos.' },
];

const ServicePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Services</h1>
        <p>We create high-quality video content and digital media solutions.</p>
      </section>

      {/* Services Grid */}
      <section className="services">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="emoji">{service.emoji}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to start your project?</h2>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default ServicePage;
