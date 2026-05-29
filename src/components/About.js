import React from 'react';
import { TO_EMAILS, CC_EMAILS } from '../App';

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
          अपूर्ण, असुरक्षित मुंबई–गोवा महामार्गावर <strong>खारपाडा टोलवसुली तात्काळ स्थगित करण्याबाबत</strong> शासनाला अधिकृत निवेदन पाठवण्यासाठी खालील बटणावर क्लिक करा. हा ईमेल थेट संबंधित मंत्री, NHAI अधिकारी, जिल्हाधिकारी आणि लोकप्रतिनिधींना (१४०+ अधिकारी) पाठवला जाईल.
        </p>
        
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <em>(बटणावर क्लिक केल्यावर तुमचा ईमेल ॲप उघडेल. पाठवण्यापूर्वी तळाशी असलेले तुमचे नाव आणि संपर्क तपशील भरण्यास विसरू नका.)</em>
        </p>
        
        <button className="email-btn" onClick={onEmailClick} style={{ marginBottom: '2rem' }}>
          शासनाला ईमेल पाठवा (Send Official Email)
        </button>

        {/* Fallback Section for Manual Copy-Pasting */}
        <details style={{ textAlign: 'left', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '5px', border: '1px solid #EAEAEA' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
            ईमेल पाठवण्यास अडचण येत आहे? (Manual Copy Paste) 
          </summary>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
              <strong>TO (अधिकारी वर्ग):</strong>
            </p>
            <textarea 
              readOnly 
              value={TO_EMAILS.join(', ')} 
              style={{ width: '100%', height: '80px', fontSize: '0.85rem', padding: '0.5rem', borderColor: '#CCC', borderRadius: '4px' }}
            />

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
              <strong>CC (खासदार व आमदार):</strong>
            </p>
            <textarea 
              readOnly 
              value={CC_EMAILS.join(', ')} 
              style={{ width: '100%', height: '50px', fontSize: '0.85rem', padding: '0.5rem', borderColor: '#CCC', borderRadius: '4px' }}
            />
          </div>
        </details>

      </div>
    </div>
  );
}

export default About;