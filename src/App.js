import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

// GROUP 1: Central Govt, MoRTH & NHAI (~30 emails)
export const CENTRAL_GOVT_EMAILS = [
  "nitin.gadkari@nic.in", "secy-road@nic.in", "sangita.toppo-morth@gov.in", "wim.rth@nic.in", 
  "skyadav95@gmail.com", "yadavsk.up@nic.in", "erphelpdesk@nhai.org", "romumbai@nhai.org", 
  "nhairomaharashtra@gmail.com", "piuthane@nhai.org", "piuthane@gmail.com", "pune@nhai.org", 
  "punenhai@gmail.com", "nashik@nhai.org", "nhaipiunashik@gmail.com", "vch-niti@gov.in", 
  "ceo-niti@gov.in", "mos-planning@gov.in", "vk.saraswat@gov.in", "rc.niti@gov.in", 
  "vinodk.paul@gov.in", "rajiv.gauba@gov.in", "member.ak@niti.gov.in", "member.srinivas@gov.in", 
  "kv.raju@niti.gov.in", "neelam.patel@nic.in", "ranjanrakesh100@gmail.com", "piyush.goyal@gov.in", 
  "mos-ci@gov.in", "secy-ipp@nic.in"
];

// GROUP 2: State Govt, CMO, Ministers & PWD (~30 emails)
export const STATE_GOVT_EMAILS = [
  "cm@maharashtra.gov.in", "chiefminister@maharashtra.gov.in", "prsecretary1tocm@maharashtra.gov.in", 
  "cssangitrao@maharashtra.gov.in", "dcm@maharashtra.gov.in", "dycm@maharashtra.gov.in", 
  "cs@maharashtra.gov.in", "min.pwd@maharashtra.gov.in", "stmin.pwd@maharashtra.gov.in", 
  "acs.pwd@maharashtra.gov.in", "sec.pwdworks@maharashtra.gov.in", "usadm.pwd@maharashtra.gov.in", 
  "usde.pwd@maharashtra.gov.in", "uscr.pwd@maharashtra.gov.in", "psec.ud1@maharashtra.gov.in", 
  "acs.housing@maharashtra.gov.in", "sec.ud2@maharashtra.gov.in", "psec.ud2@maharashtra.gov.in", 
  "acs.transport@maharashtra.gov.in", "transport.commr-mh@gov.in", "adtc.tpt-mh@gov.in", 
  "min.industry@maharashtra.gov.in", "udaysamant99@gmail.com", "kesarkardeepak@yahoo.com", 
  "ravindrachavan.mla@gmail.com", "aditti7@yahoo.co.in"
];

// GROUP 3: Local Administration, Collectors & SDOs (~35 emails)
export const LOCAL_ADMIN_EMAILS = [
  "divcom.konkan@maharashtra.gov.in", "ceo.zpthane@maharashtra.gov.in", "ceozpraigad@gmail.com", 
  "ceozprtg@gmail.com", "ceozpsindhudurg@gmail.com", "ceozp.palghar@maharashtra.gov.in", 
  "commissioner@nmmc.gov.in", "mc@thanecity.gov.in", "commissionerkdmc@gmail.com", 
  "collector.thane@maharashtra.gov.in", "sdothane@gmail.com", "kalyansdo@gmail.com", 
  "sdobhiwandi@gmail.com", "ulhasnagarsdo@gmail.com", "collector.raigad@maharashtra.gov.in", 
  "addlcoll-raigad@mah.gov.in", "rdc-raigad@mah.gov.in", "dcgad-raigad@mah.gov.in", 
  "dcelection-raigad@mah.gov.in", "dcegs-raigad@mah.gov.in", "sdoalibag@gmail.com", 
  "sdopen2013@gmail.com", "sdomangaon@gmail.com", "sdomahad1@gmail.com", "sdoroha2013@gmail.com", 
  "sdokarjat2013@gmail.com", "sdoshriwardhan1@gmail.com", "collector.ratnagiri@maharashtra.gov.in", 
  "collector.sindhudurg@maharashtra.gov.in", "colleststn02.si-mh@nic.in"
];

// GROUP 4: MPs & MLAs (~25 emails)
export const MP_MLA_EMAILS = [
  "narayan.rane@mpls.sansad.in", "sunil.tatkare7@gmail.com", "sunil.tatkare55@mpls.sansad.in", 
  "nareshmhaske@gmail.com", "nareshmhaske.mp@mpls.sansad.in", "shrikant.shinde@mpls.sansad.in", 
  "shrikantshinde87@yahoo.in", "sureshmhatre170@gmail.com", "suresh.mhatre170@mpls.sansad.in", 
  "hemantsavara@yahoo.co.in", "hemant.savara@mpls.sansad.in", "Arvindsawant@gmail.com", 
  "arvind.sawant@sansad.nic.in", "waikarravindra@gmail.com", "ravindrawaikar.mp@mpls.sansad.in", 
  "gaikwad.varsha3@gmail.com", "gaikwad.varsha3@mpls.sansad.in", "sanjaydinapatil@rediffmail.com", 
  "anil.desai@mpls.sansad.in", "priyanka.c19@sansad.nic.in", "s.raut@sansad.nic.in", "praful@sansad.nic.in", 
  "MLA_SAWANTWADI@maharashtra.gov.in", "MLA_Kankavli@maharashtra.gov.in", "MLA_Kudal@maharashtra.gov.in", 
  "MLA_Rajapur@maharashtra.gov.in", "MLA_Guhagar@maharashtra.gov.in", "dnyaneshwar1980@gmail.com"
];

function App() {
  
  // This function now accepts an array of emails so it can handle different groups
  const handleEmailClick = (emailGroupArray) => {
    const subject = "अपूर्ण, असुरक्षित मुंबई–गोवा महामार्गावर खारपाडा टोलवसुली तात्काळ स्थगित करण्याबाबत जनभावनेतुन निवेदन";
    
    const body = `महोदय,

कोकण म्हणजे केवळ एक भौगोलिक प्रदेश नाही; ती आमची मायभूमी, आमची संस्कृती, परंपरा आणि भावविश्व आहे. मुंबईच्या धावपळीच्या जीवनातून कोकणाकडे निघताना प्रत्येक कोकणकराच्या मनात आपल्या मातीत परतण्याची ओढ असते. पण दुर्दैवाने आज मुंबई–गोवा महामार्ग हा प्रवासाचा आनंद नसून त्रास, भीती आणि संताप यांचे प्रतीक बनला आहे.

गेल्या १८ वर्षांपासून मुंबई–गोवा महामार्गाचे काम सुरू आहे. एवढा प्रदीर्घ काळ उलटूनही रस्ता पूर्ण झालेला नाही. अपूर्ण कामे, खड्डेमय रस्ते, वाहतूककोंडी, धूळ, चुकीचे दिशादर्शक फलक, अपुरी प्रकाशयोजना, धोकादायक ब्लॅक स्पॉट्स, सर्व्हिस रोडचा अभाव आणि आपत्कालीन सुविधांची कमतरता यामुळे हजारो कोकणवासीयांनी आपले प्राण गमावले आहेत.

अशा या अपूर्ण आणि धोकादायक महामार्गावर खारपाडा येथे टोलवसुली सुरू करणे म्हणजे कोकणवासीयांच्या जखमेवर मीठ चोळण्यासारखे आहे. “सेवा शून्य, मग शुल्क का?” हा प्रश्न आज प्रत्येक प्रवाशाच्या मनात आहे.

महाराष्ट्र पथकर धोरण आणि NHAI च्या नियमांनुसार रस्ता पूर्ण होऊन सुरक्षिततेचे निकष पूर्ण झाल्यानंतरच टोल आकारणी अपेक्षित असते. मात्र या सर्व नियमांची सरळसरळ पायमल्ली होत असल्याचे दिसत आहे. सरकारने जर जनतेकडून पैसे घ्यायचे असतील, तर आधी सुरक्षित, दर्जेदार आणि सुविधायुक्त महामार्ग द्यावा.

आमच्या खालील मागण्या तात्काळ मान्य करण्यात याव्यात:
• खारपाडा टोलप्लाझावरील टोलवसुली तात्काळ स्थगित करावी.
• महामार्गाचा स्वतंत्र तांत्रिक व सुरक्षा ऑडिट अहवाल सार्वजनिक करावा.
• ब्लॅक स्पॉट्स, प्रकाशयोजना आणि सुरक्षा उपाय तातडीने पूर्ण करावेत.
• आपत्कालीन सेवा, ऍम्ब्युलन्स, शौचालये व प्रवासी सुविधा उपलब्ध कराव्यात.
• स्थानिक नागरिक आणि वारंवार प्रवास करणाऱ्यांसाठी सवलत/फ्री-पास योजना लागू करावी.
• आंदोलन प्रतिनिधी, शासन आणि NHAI यांच्यात तातडीची त्रिपक्षीय बैठक घ्यावी.

सरकारने जनतेच्या भावना समजून घ्याव्यात आणि कोकणवासीयांना न्याय द्यावा, ही नम्र विनंती.

आपला विश्वासू,
[नाव]
[गाव/तालुका/जिल्हा]
[मोबाईल]
`;

    // Anti-Spam Logic:
    // 1. Put the Samiti's email in the 'TO' field so it looks like a direct email.
    // 2. Put ALL officials in the 'BCC' field so they don't see the massive list of other recipients.
    const toEmail = "janakroshsamiti@gmail.com"; 
    const bccEmails = emailGroupArray.join(',');
    
    window.location.href = `mailto:${toEmail}?bcc=${bccEmails}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-container">
      <main className="content">
        <Home />
        <About onEmailClick={handleEmailClick} />
      </main>
      
      {/* Floating button defaults to Group 1 (Central/NHAI) for quick action */}
      <button className="floating-btn" onClick={() => handleEmailClick(CENTRAL_GOVT_EMAILS)} aria-label="Send Email">
        ✉️ ईमेल पाठवा
      </button>

      <Footer />
    </div>
  );
}

export default App;