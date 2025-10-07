import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './contact.css';

// SVG Icons Components
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.17-3.495-8.418"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
  </svg>
);

const Contact = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setSelectedService(location.state.selectedService);
      setFormData(prev => ({
        ...prev,
        service: location.state.selectedService
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    if (selectedService) {
      alert(`Thank you for your interest in ${selectedService}! We will contact you soon.`);
    } else {
      alert('Thank you for your message! We will contact you soon.');
    }
    
    setFormData({
      name: '',
      email: '',
      service: selectedService,
      message: ''
    });
  };

  // Social Media Links with real icons
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon />,
      url: 'https://wa.me/918619834121',
      color: '#25D366'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/k91_production?igsh=MXMwemNrdGxxd2IzNg==',
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/share/1CuBQDQ6JU/',
      color: '#1877F2'
    },
    {
      name: 'YouTube',
      icon: <YouTubeIcon />,
      url: 'https://youtube.com/@k91_production?si=fM7V_E9OGWtH0nvr',
      color: '#FF0000'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/hemant-kumar-538154341',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/Hemantk91',
      color: '#181717'
    }
  ];

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'hemant861983@gmail.com',
      link: 'mailto:hemant861983@gmail.com'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+91 8619834121',
      link: 'tel:+918619834121'
    },
    {
      icon: <LocationIcon />,
      title: 'Address',
      value: 'Nawalgarh Rd, Bhadwasi, Sikar, Rajasthan 332024',
      link: 'https://maps.app.goo.gl/13aUCFHsgFsW2VfC6'
    }
  ];

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={`contact-page ${isVisible ? 'visible' : ''}`}>
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact_title">
            {selectedService ? `Contact for ${selectedService}` : 'Get In Touch'}
          </h1>
          <p className="contact-subtitle">
            {selectedService 
              ? `Let's discuss your ${selectedService} project and bring your vision to life!`
              : 'Ready to create something amazing? Reach out to us!'
            }
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            
            {/* Basic Contact Info */}
            <div className="contact-info-cards">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="contact-info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLink(item.link)}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Service Display */}
            {selectedService && (
              <div className="selected-service-banner">
                <span className="service-badge">Selected Service</span>
                <h3>{selectedService}</h3>
              </div>
            )}

            {/* Social Media Links */}
            <div className="social-section">
              <h3 className="social-title">Follow & Connect</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <div
                    key={social.name}
                    className="social-card"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      '--social-color': social.color
                    }}
                    onClick={() => openLink(social.url)}
                  >
                    <div className="social-icon">{social.icon}</div>
                    <span className="social-name">{social.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Ad Films">Ad Films</option>
                  <option value="Short Films">Short Films</option>
                  <option value="Music Videos">Music Videos</option>
                  <option value="Wedding Shoots">Wedding Shoots</option>
                  <option value="Social Media Reels">Social Media Reels</option>
                  <option value="Brand Promotions">Brand Promotions</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={`Tell us about your ${selectedService || 'project'}...`}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                {selectedService ? `Get Quote for ${selectedService}` : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="quick-actions">
          <button 
            className="whatsapp-btn"
            onClick={() => openLink('https://wa.me/918619834121')}
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </button>
          <button 
            className="call-btn"
            onClick={(href="tel:+911234567890") => openLink('tel:+918619834121')}
          >
            <PhoneIcon />
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;