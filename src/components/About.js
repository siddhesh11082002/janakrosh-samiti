import React from 'react';
import { ALL_EMAILS, CENTRAL_GOVT_EMAILS, STATE_GOVT_EMAILS, LOCAL_ADMIN_EMAILS, MP_MLA_EMAILS } from '../App';

function About({ onEmailClick }) {
  return (
    <div className="page-container about-section">
      <h2 className="about-title">आमच्याबद्दल</h2>
      
      <p className="about-subtitle">
        जनआक्रोश समिती कोकणवासीयांच्या हक्कांसाठी आणि मुंबई-गोवा महामार्गाच्या पूर्णत्वासाठी कटिबद्ध आहे. आपला लढा समस्त कोकणवासियांसाठी!
      </p>
      
      <div className="cta-box">
        <h3 className="cta-title">
          डिजिटल ईमेल मोहीम
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
          अपूर्ण, असुरक्षित मुंबई–गोवा महामार्गावर <strong>खारपाडा टोलवसुली तात्काळ स्थगित करण्याबाबत</strong> शासनाला थेट निवेदन पाठवण्यासाठी खालील बटणावर क्लिक करा. हा ईमेल एकाच क्लिकवर १४०+ अधिकाऱ्यांना पाठवला जाईल.
        </p>

        {/* SINGLE BUTTON FOR ALL EMAILS */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            className="email-btn" 
            style={{ backgroundColor: 'var(--accent-orange)', width: '100%', padding: '1.2rem', fontSize: '1.2rem' }} 
            onClick={() => onEmailClick(ALL_EMAILS)}
          >
            🚨 सर्व १४०+ अधिकाऱ्यांना एकाच क्लिकवर ईमेल पाठवा (Send to All)
          </button>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <em>(टीप: सुरक्षेसाठी अधिकाऱ्यांचे ईमेल 'BCC' मध्ये लपवलेले असतील. ईमेल सेंड करण्यापूर्वी खाली आपले नाव टाकायला विसरू नका.)</em>
        </p>

        {/* Fallback Section */}
        <details style={{ textAlign: 'left', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '5px', border: '1px solid #EAEAEA' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
            ईमेल पाठवण्यास अडचण येत आहे? मॅन्युअली कॉपी करा (Copy Email IDs) 
          </summary>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <em>काही मोबाईल ब्राउझर एकाच वेळी १४० ईमेल स्वीकारत नाहीत. अशा वेळी तुम्ही खालील ईमेल मॅन्युअली कॉपी करून पाठवू शकता.</em>
            </p>

            <p style={{ fontSize: '0.85rem', margin: '0' }}><strong>१. Central & NHAI:</strong></p>
            <textarea readOnly value={CENTRAL_GOVT_EMAILS.join(', ')} style={{ width: '100%', height: '40px', fontSize: '0.8rem', padding: '0.5rem' }} />

            <p style={{ fontSize: '0.85rem', margin: '0' }}><strong>२. State Govt:</strong></p>
            <textarea readOnly value={STATE_GOVT_EMAILS.join(', ')} style={{ width: '100%', height: '40px', fontSize: '0.8rem', padding: '0.5rem' }} />

            <p style={{ fontSize: '0.85rem', margin: '0' }}><strong>३. Local Admin:</strong></p>
            <textarea readOnly value={LOCAL_ADMIN_EMAILS.join(', ')} style={{ width: '100%', height: '40px', fontSize: '0.8rem', padding: '0.5rem' }} />

            <p style={{ fontSize: '0.85rem', margin: '0' }}><strong>४. MPs & MLAs:</strong></p>
            <textarea readOnly value={MP_MLA_EMAILS.join(', ')} style={{ width: '100%', height: '40px', fontSize: '0.8rem', padding: '0.5rem' }} />

          </div>
        </details>

      </div>
    </div>
  );
}

export default About;