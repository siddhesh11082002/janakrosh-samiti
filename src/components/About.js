import React from 'react';
// We must import the 4 new groups from App.js instead of the old TO/CC lists
import { CENTRAL_GOVT_EMAILS, STATE_GOVT_EMAILS, LOCAL_ADMIN_EMAILS, MP_MLA_EMAILS } from '../App';

function About({ onEmailClick }) {
  return (
    <div className="page-container about-section">
      <h2 className="about-title">आमच्याबद्दल</h2>
      
      <p className="about-subtitle">
        जनआक्रोश समिती कोकणवासीयांच्या हक्कांसाठी आणि मुंबई-गोवा महामार्गाच्या पूर्णत्वासाठी कटिबद्ध आहे. आपला लढा समस्त कोकणवासियांसाठी!
      </p>
      
      <div className="cta-box">
        <h3 className="cta-title">
          डिजिटल ईमेल मोहीम (Digital Strike)
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
          १४० पेक्षा जास्त अधिकाऱ्यांना एकच ईमेल पाठवल्यास तो <strong>Spam</strong> मध्ये जाण्याची शक्यता असते. त्यामुळे अधिकाऱ्यांपर्यंत आपला आवाज नक्की पोहोचावा यासाठी आम्ही संपर्काची <strong>४ टप्प्यांत विभागणी</strong> केली आहे. कृपया खालील चारही बटणांवर क्लिक करून आपले निवेदन पाठवा.
        </p>

        {/* 4 Separate Buttons for Spam Protection */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '2rem' }}>
          <button className="email-btn" style={{ backgroundColor: '#2C3E50' }} onClick={() => onEmailClick(CENTRAL_GOVT_EMAILS)}>
            १. केंद्र सरकार आणि NHAI ला पाठवा (Central & NHAI)
          </button>
          
          <button className="email-btn" style={{ backgroundColor: '#D35400' }} onClick={() => onEmailClick(STATE_GOVT_EMAILS)}>
            २. राज्य सरकार आणि मंत्रीमंडळाला पाठवा (State Govt)
          </button>

          <button className="email-btn" style={{ backgroundColor: '#27AE60' }} onClick={() => onEmailClick(LOCAL_ADMIN_EMAILS)}>
            ३. जिल्हाधिकारी आणि प्रशासनाला पाठवा (Local Admin)
          </button>

          <button className="email-btn" style={{ backgroundColor: '#8E44AD' }} onClick={() => onEmailClick(MP_MLA_EMAILS)}>
            ४. खासदार आणि आमदारांना पाठवा (MPs & MLAs)
          </button>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <em>(टीप: सुरक्षेसाठी अधिकाऱ्यांचे ईमेल 'BCC' मध्ये लपवलेले असतील. ईमेल सेंड करण्यापूर्वी खाली आपले नाव टाकायला विसरू नका.)</em>
        </p>

        {/* Fallback Section using the new variables */}
        <details style={{ textAlign: 'left', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '5px', border: '1px solid #EAEAEA' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
            मॅन्युअली ईमेल आयडी कॉपी करा (Copy Email IDs) 
          </summary>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            
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