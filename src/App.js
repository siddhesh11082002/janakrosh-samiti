import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

// Extracted email lists
export const TO_EMAILS = [
  "nitin.gadkari@nic.in", "secy-road@nic.in", "sangita.toppo-morth@gov.in", "wim.rth@nic.in", "iahe-training@gov.in", "trng.iahe-morth@nic.in", 
  "skyadav95@gmail.com", "yadavsk.up@nic.in", "erphelpdesk@nhai.org", "romumbai@nhai.org", "nhairomaharashtra@gmail.com", "piuthane@nhai.org", 
  "piuthane@gmail.com", "pune@nhai.org", "punenhai@gmail.com", "nashik@nhai.org", "nhaipiunashik@gmail.com", "trainingcell@nhai.org", 
  "raghavchandra@yahoo.com", "akhiljain_1949@yahoo.com", "bimaljulka1955@gmail.com", "ramasubban1951@gmail.com", "ramammad@hotmail.com", 
  "pbiassatish@gmail.com", "anilkupadhyay@yahoo.com", "vch-niti@gov.in", "ceo-niti@gov.in", "mos-planning@gov.in", "vk.saraswat@gov.in", 
  "rc.niti@gov.in", "vinodk.paul@gov.in", "rajiv.gauba@gov.in", "member-niti@gov.in", "member.ak@niti.gov.in", "member.srinivas@gov.in", 
  "kv.raju@niti.gov.in", "neelam.patel@nic.in", "ranjanrakesh100@gmail.com", "annaroy@nic.in", "ajit.pai@nic.in", "prem.bogzi@ias.nic.in", 
  "rajnath-pc@nic.in", "ahmed.i@nic.in", "yogesh.suri@nic.in", "as-niti@nic.in", "sudhenduj.17@gov.in", "chintan.vaishnav@gov.in", 
  "amishra-pc@gov.in", "mk.talwar@nic.in", "pc.sudhakar74@gov.in", "piyush.goyal@gov.in", "mos-ci@gov.in", "secy-ipp@nic.in", 
  "ashp.dpiit@gov.in", "as-aks@gov.in", "js-logistics@gov.in", "sagar.kadu@gov.in", "di-webmaster@digitalindia.gov.in", 
  "nodal.pmgatishakti@iimmumbai.ac.in", "csrk@nitw.ac.in", "cm@maharashtra.gov.in", "chiefminister@maharashtra.gov.in", 
  "prsecretary1tocm@maharashtra.gov.in", "cssangitrao@maharashtra.gov.in", "dcm@maharashtra.gov.in", "dycm@maharashtra.gov.in", 
  "cs@maharashtra.gov.in", "min.pwd@maharashtra.gov.in", "stmin.pwd@maharashtra.gov.in", "acs.pwd@maharashtra.gov.in", 
  "sec.pwdworks@maharashtra.gov.in", "usadm.pwd@maharashtra.gov.in", "usde.pwd@maharashtra.gov.in", "uscr.pwd@maharashtra.gov.in", 
  "usest.pwd@maharashtra.gov.in", "jsser.pwd@maharashtra.gov.in", "psec.ud1@maharashtra.gov.in", "acs.housing@maharashtra.gov.in", 
  "sec.ud2@maharashtra.gov.in", "psec.ud2@maharashtra.gov.in", "commissioner@nashikcorporation.in", "commissioner@nandedwaghala.gov.in", 
  "acs.transport@maharashtra.gov.in", "transport.commr-mh@gov.in", "jttc.tpt-mh@gov.in", "adtc.tpt-mh@gov.in", "dytcadmin.tpt-mh@gov.in", 
  "dytcenf1.tpt-mh@gov.in", "dytcenf2.tpt-mh@gov.in", "dycommr.comp@gmail.com", "helpdesk-vahan@gov.in", "helpdesk-sarathi@gov.in", 
  "helpdesk-mparivahan@gov.in", "helpdesk-echallan@gov.in", "divcom.konkan@maharashtra.gov.in", "ceo.zpthane@maharashtra.gov.in", 
  "ceozpraigad@gmail.com", "ceozprtg@gmail.com", "ceozpsindhudurg@gmail.com", "ceozp.palghar@maharashtra.gov.in", "commissioner@nmmc.gov.in", 
  "mc@thanecity.gov.in", "commissionerkdmc@gmail.com", "commissioner@umc.gov.in", "cvo@krcl.co.in", "pcscrpf@krcl.co.in", 
  "rrmkw@krcl.co.in", "rrmrn@krcl.co.in", "collector.thane@maharashtra.gov.in", "sdothane@gmail.com", "kalyansdo@gmail.com", 
  "sdobhiwandi@gmail.com", "ulhasnagarsdo@gmail.com", "collector.raigad@maharashtra.gov.in", "addlcoll-raigad@mah.gov.in", 
  "rdc-raigad@mah.gov.in", "dcgad-raigad@mah.gov.in", "dcelection-raigad@mah.gov.in", "dcegs-raigad@mah.gov.in", 
  "dsosupply-raigad@mah.gov.in", "dpoplanning-raigad@mah.gov.in", "sdoalibag@gmail.com", "sdopen2013@gmail.com", "sdopanvel@gmail.com", 
  "sdomangaon@gmail.com", "sdomahad1@gmail.com", "sdoroha2013@gmail.com", "sdokarjat2013@gmail.com", "sdoshriwardhan1@gmail.com", 
  "collector.ratnagiri@maharashtra.gov.in", "collector.sindhudurg@maharashtra.gov.in", "colleststn02.si-mh@nic.in", "collrdc.si-mh@gov.in"
];

export const CC_EMAILS = [
  "dcm@maharashtra.gov.in", "min.industry@maharashtra.gov.in", "MLA_SAWANTWADI@maharashtra.gov.in", 
  "narayan.rane@mpls.sansad.in", "sunil.tatkare55@mpls.sansad.in", "arvind.sawant@mpls.sansad.in", 
  "gaikwad.varsha3@mpls.sansad.in", "MLA_Kankavli@maharashtra.gov.in", "MLA_Kudal@maharashtra.gov.in", 
  "MLA_Rajapur@maharashtra.gov.in", "MLA_Guhagar@maharashtra.gov.in"
];

function App() {
  
  const handleEmailClick = () => {
    const subject = "अपूर्ण, असुरक्षित मुंबई–गोवा महामार्गावर खारपाडा टोलवसुली तात्काळ स्थगित करण्याबाबत जनभावनेतुन निवेदन";
    
    const body = `
महोदय,

कोकण म्हणजे केवळ एक भौगोलिक प्रदेश नाही; ती आमची मायभूमी, आमची संस्कृती, परंपरा आणि भावविश्व आहे. मुंबईच्या धावपळीच्या जीवनातून कोकणाकडे निघताना प्रत्येक कोकणकराच्या मनात आपल्या मातीत परतण्याची ओढ असते. पण दुर्दैवाने आज मुंबई–गोवा महामार्ग हा प्रवासाचा आनंद नसून त्रास, भीती आणि संताप यांचे प्रतीक बनला आहे.

गेल्या १८ वर्षांपासून मुंबई–गोवा महामार्गाचे काम सुरू आहे. एवढा प्रदीर्घ काळ उलटूनही रस्ता पूर्ण झालेला नाही. अपूर्ण कामे, खड्डेमय रस्ते, वाहतूककोंडी, धूळ, चुकीचे दिशादर्शक फलक, अपुरी प्रकाशयोजना, धोकादायक ब्लॅक स्पॉट्स, सर्व्हिस रोडचा अभाव आणि आपत्कालीन सुविधांची कमतरता यामुळे हजारो कोकणवासीयांनी आपले प्राण गमावले आहेत. अनेक कुटुंबे उद्ध्वस्त झाली, अनेकांच्या संसारावर दुःखाचे सावट आले.

अशा या अपूर्ण आणि धोकादायक महामार्गावर खारपाडा येथे टोलवसुली सुरू करणे म्हणजे कोकणवासीयांच्या जखमेवर मीठ चोळण्यासारखे आहे. “सेवा शून्य, मग शुल्क का?” हा प्रश्न आज प्रत्येक प्रवाशाच्या मनात आहे.

महाराष्ट्र पथकर धोरण आणि NHAI च्या नियमांनुसार रस्ता पूर्ण होऊन सुरक्षिततेचे निकष पूर्ण झाल्यानंतरच टोल आकारणी अपेक्षित असते. प्रकल्प अपूर्ण असल्यास, सेवा पातळी खालावल्यास किंवा सुरक्षा सुविधा उपलब्ध नसल्यास टोल स्थगित किंवा कमी करण्याची तरतूद आहे. मात्र या सर्व नियमांची सरळसरळ पायमल्ली होत असल्याचे दिसत आहे.

खारपाडा टोलप्लाझा येथील टोलधाड ही केवळ आर्थिक वसुली नसून कोकणवासीयांच्या सहनशीलतेची क्रूर परीक्षा आहे. सरकारने जर जनतेकडून पैसे घ्यायचे असतील, तर आधी सुरक्षित, दर्जेदार आणि सुविधायुक्त महामार्ग द्यावा. अन्यथा ही टोलवसुली म्हणजे विकास नव्हे, तर उघड अन्याय आणि लूट आहे.

त्यामुळे आमच्या खालील मागण्या तात्काळ मान्य करण्यात याव्यात:

• खारपाडा टोलप्लाझावरील टोलवसुली तात्काळ स्थगित करावी.
• महामार्गाचा स्वतंत्र तांत्रिक व सुरक्षा ऑडिट अहवाल सार्वजनिक करावा.
• ब्लॅक स्पॉट्स, साइनज, रोड मार्किंग, प्रकाशयोजना आणि सुरक्षा उपाय तातडीने पूर्ण करावेत.
• आपत्कालीन सेवा, ऍम्ब्युलन्स, शौचालये, पिण्याचे पाणी व प्रवासी सुविधा उपलब्ध कराव्यात.
• स्थानिक नागरिक आणि वारंवार प्रवास करणाऱ्यांसाठी सवलत/फ्री-पास योजना लागू करावी.
• आंदोलन प्रतिनिधी, शासन आणि NHAI यांच्यात तातडीची त्रिपक्षीय बैठक घेऊन लिखित निर्णय जाहीर करावा.

कोकणातील जनता विकासाच्या विरोधात नाही; पण अपूर्ण, असुरक्षित आणि जीवघेण्या महामार्गावर अन्यायकारक टोलवसुलीच्या विरोधात नक्कीच आहे. हा लढा केवळ रस्त्याचा नाही, तर कोकणवासीयांच्या सन्मानाचा, सुरक्षिततेचा आणि न्यायाचा आहे.

सरकारने जनतेच्या भावना समजून घ्याव्यात, महाराष्ट्र पथकर धोरणातील नियमांची काटेकोर अंमलबजावणी करावी आणि कोकणवासीयांना न्याय द्यावा, ही नम्र पण ठाम विनंती.

धन्यवाद.

आपला विश्वासू,
[नाव]
[गाव/तालुका/जिल्हा]
[मोबाईल]`;

    const toStr = TO_EMAILS.join(',');
    const ccStr = CC_EMAILS.join(',');
    const bccEmail = "janakroshsamiti@gmail.com";
    
    // Construct the mailto link
    window.location.href = `mailto:${toStr}?cc=${ccStr}&bcc=${bccEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-container">
      <main className="content">
        <Home />
        <About onEmailClick={handleEmailClick} />
      </main>

      <button className="floating-btn" onClick={handleEmailClick} aria-label="Send Email">
        ✉️ ईमेल पाठवा
      </button>

      <Footer />
    </div>
  );
}

export default App;