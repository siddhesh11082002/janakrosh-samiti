import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>नवीन माहितीसाठी आमच्याशी जोडा! (Connect With Us)</h3>
          <ul className="contact-list">
            <li><strong>📞 WhatsApp/Phone:</strong> 8652505542</li>
            <li><strong>✉️ Email:</strong> janakroshsamiti@gmail.com</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>सोशल मीडिया (Social Media)</h3>
          <ul className="contact-list">
            <li><strong>📘 Facebook:</strong> मुंबई गोवा महामार्ग जनआक्रोश समिती / जन आक्रोश समिती</li>
            <li><strong>📸 Instagram:</strong> mumbai_goa_mds</li>
            <li><strong> X Twitter:</strong> @mumbai_goa_MDS</li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} जनआक्रोश समिती. सर्व हक्क सुरक्षित. (All Rights Reserved) | जय कोकण! जय महाराष्ट्र!</p>
      </div>
    </footer>
  );
}

export default Footer;