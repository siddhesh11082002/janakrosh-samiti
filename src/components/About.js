import React from 'react';

function About({ onEmailClick }) {
  return (
    <div className="page-container about-section">
      <h2 className="about-title">आमच्याबद्दल</h2>
      
      <p className="about-subtitle">
        जनआक्रोश समिती कोकणवासीयांच्या हक्कांसाठी आणि मुंबई-गोवा महामार्गाच्या पूर्णत्वासाठी कटिबद्ध आहे. आपला लढा समस्त कोकणवासियांसाठी!
      </p>
      
      <div className="cta-box">
        <h3 className="cta-title">
          ईमेल मोहीम (Official Email Campaign)
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
          अपूर्ण, असुरक्षित मुंबई–गोवा महामार्गावर <strong>खारपाडा टोलवसुली तात्काळ स्थगित करण्याबाबत</strong> शासनाला अधिकृत निवेदन पाठवण्यासाठी खालील बटणावर क्लिक करा.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <em>(बटणावर क्लिक केल्यावर तुमचा ईमेल ॲप उघडेल आणि हा मजकूर आपोआप तयार होईल. पाठवण्यापूर्वी तळाशी असलेले तुमचे नाव आणि संपर्क तपशील भरण्यास विसरू नका.)</em>
        </p>
        
        <button className="email-btn" onClick={onEmailClick}>
          शासनाला ईमेल पाठवा (Send Official Email)
        </button>
      </div>
    </div>
  );
}

export default About;