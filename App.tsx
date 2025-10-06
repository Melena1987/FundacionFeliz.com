import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import LegalPage from './components/LegalPage';

const translations = {
  es: {
    nav_home: 'Inicio',
    hero_welcome: 'BIENVENIDO A',
    hero_title: 'FUNDACIÓN FELIZ',
    about_title: 'FUNDACIÓN FELIZ',
    about_p1: 'Es una Fundación con finalidad únicamente benéfica constituida en 2023 por voluntad de la familia RIVA.',
    about_p2: 'El objetivo de la Fundación es ayudar económicamente a cualquier organización benéfica que se ocupas de personas y animales sin límites territoriales como por ejemplo:',
    about_li1: 'Caridad Católica y Asociaciones de Caridad',
    about_li2: 'Asociaciones para el tratamiento de enfermedades y patologías infantiles.',
    about_li3: 'Asociaciones benéficas y de hospitalidad',
    about_li4: 'Asociaciones humanitarias',
    about_li5: 'Asociaciones para emergencias y desastres',
    about_li6: 'Asociaciones protectoras de animales',
    about_li7: 'Asociaciones para la protección de especies animales protegidas en riesgo de extinción.',
    contact_email_title: 'Email',
    contact_address_title: 'Dirección',
    contact_address_l1: 'Fundación Feliz',
    contact_address_l2: 'Via ai Mulini 15 6676',
    contact_address_l3: 'Bignasco - Suiza',
    contact_address_l4: 'IDI: CHE-488.376.245',
    footer_legal: 'Términos legales, Política de privacidad y Cookies',
    footer_copy: '© 2026 Fundación Feliz',
    legal_title: 'Términos Legales',
    legal_info_title: '1. Información Legal',
    legal_info_name: 'Nombre: Fundación Feliz',
    legal_info_address: 'Domicilio: Via ai Mulini 15, 6676 Bignasco',
    legal_info_tax: 'Identificación Fiscal: CHE-488.376.245',
    legal_terms_title: '2. Condiciones de Uso',
    legal_terms_p1: 'El acceso y uso de este sitio web se rige por los términos y condiciones aquí descritos. Al acceder y utilizar este sitio web, aceptas estos términos en su totalidad.',
    legal_ip_title: '3. Propiedad Intelectual',
    legal_ip_p1: 'Todo el contenido de este sitio web, incluyendo, pero no limitado a textos, imágenes, y logos, es propiedad de la Fundación Feliz. No se permite su uso sin autorización previa.',
    privacy_title: 'Política de Privacidad',
    privacy_data_collection_title: '1. Recopilación de Datos',
    privacy_data_collection_p1: 'Recopilamos datos personales que nos proporcionas voluntariamente, como nombre y dirección de correo electrónico, cuando te pones en contacto con nosotros.',
    privacy_data_use_title: '2. Uso de Datos',
    privacy_data_use_p1: 'Utilizamos tus datos para responder a tus consultas y proporcionarte información sobre nuestra fundación.',
    privacy_data_protection_title: '3. Protección de Datos',
    privacy_data_protection_p1: 'Nos comprometemos a proteger tus datos y no los compartiremos con terceros sin tu consentimiento.',
    cookies_title: 'Política de Cookies',
    cookies_use_title: '1. Uso de Cookies',
    cookies_use_p1: 'Este sitio web utiliza cookies para mejorar la experiencia del usuario y proporcionar funcionalidades adicionales.',
    cookies_types_title: '2. Tipos de Cookies',
    cookies_types_p1: 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para recopilar información sobre cómo los visitantes utilizan nuestro sitio web.',
    cookies_consent_title: '3. Consentimiento',
    cookies_consent_p1: 'Al continuar navegando en nuestro sitio web, aceptas el uso de cookies.',
  },
  en: {
    nav_home: 'Home',
    hero_welcome: 'WELCOME TO',
    hero_title: 'FUNDACIÓN FELIZ',
    about_title: 'FUNDACIÓN FELIZ',
    about_p1: 'It is a Foundation with a purely charitable purpose established in 2023 by the will of the RIVA family.',
    about_p2: 'The objective of the Foundation is to financially help any charitable organization that deals with people and animals without territorial limits, such as:',
    about_li1: 'Catholic Charity and Charity Associations',
    about_li2: 'Associations for the treatment of childhood diseases and pathologies.',
    about_li3: 'Charitable and hospitality associations',
    about_li4: 'Humanitarian associations',
    about_li5: 'Associations for emergencies and disasters',
    about_li6: 'Animal welfare associations',
    about_li7: 'Associations for the protection of protected animal species at risk of extinction.',
    contact_email_title: 'Email',
    contact_address_title: 'Address',
    contact_address_l1: 'Fundación Feliz',
    contact_address_l2: 'Via ai Mulini 15 6676',
    contact_address_l3: 'Bignasco - Switzerland',
    contact_address_l4: 'IDI: CHE-488.376.245',
    footer_legal: 'Legal terms, Privacy policy and Cookies',
    footer_copy: '© 2026 Fundación Feliz',
    legal_title: 'Legal Terms',
    legal_info_title: '1. Legal Information',
    legal_info_name: 'Name: Fundación Feliz',
    legal_info_address: 'Address: Via ai Mulini 15, 6676 Bignasco',
    legal_info_tax: 'Tax ID: CHE-488.376.245',
    legal_terms_title: '2. Terms of Use',
    legal_terms_p1: 'Access to and use of this website are governed by the terms and conditions described herein. By accessing and using this website, you accept these terms in their entirety.',
    legal_ip_title: '3. Intellectual Property',
    legal_ip_p1: 'All content on this website, including, but not limited to, text, images, and logos, is the property of Fundación Feliz. Its use is not permitted without prior authorization.',
    privacy_title: 'Privacy Policy',
    privacy_data_collection_title: '1. Data Collection',
    privacy_data_collection_p1: 'We collect personal data that you voluntarily provide to us, such as name and email address, when you contact us.',
    privacy_data_use_title: '2. Use of Data',
    privacy_data_use_p1: 'We use your data to respond to your inquiries and provide you with information about our foundation.',
    privacy_data_protection_title: '3. Data Protection',
    privacy_data_protection_p1: 'We are committed to protecting your data and will not share it with third parties without your consent.',
    cookies_title: 'Cookies Policy',
    cookies_use_title: '1. Use of Cookies',
    cookies_use_p1: 'This website uses cookies to improve the user experience and provide additional functionality.',
    cookies_types_title: '2. Types of Cookies',
    cookies_types_p1: 'We use necessary technical cookies for the site\'s operation and analytical cookies to collect information about how visitors use our website.',
    cookies_consent_title: '3. Consent',
    cookies_consent_p1: 'By continuing to browse our website, you agree to the use of cookies.',
  },
  fr: {
    nav_home: 'Accueil',
    hero_welcome: 'BIENVENUE À',
    hero_title: 'FUNDACIÓN FELIZ',
    about_title: 'FUNDACIÓN FELIZ',
    about_p1: 'C\'est une Fondation à but purement caritatif créée en 2023 par la volonté de la famille RIVA.',
    about_p2: 'L\'objectif de la Fondation est d\'aider financièrement toute organisation caritative qui s\'occupe des personnes et des animaux sans limites territoriales, comme par exemple :',
    about_li1: 'Charité catholique et associations caritatives',
    about_li2: 'Associations pour le traitement des maladies et pathologies infantiles.',
    about_li3: 'Associations caritatives et d\'hospitalité',
    about_li4: 'Associations humanitaires',
    about_li5: 'Associations pour les urgences et les catastrophes',
    about_li6: 'Associations de protection des animaux',
    about_li7: 'Associations pour la protection des espèces animales protégées en voie d\'extinction.',
    contact_email_title: 'Email',
    contact_address_title: 'Adresse',
    contact_address_l1: 'Fundación Feliz',
    contact_address_l2: 'Via ai Mulini 15 6676',
    contact_address_l3: 'Bignasco - Suisse',
    contact_address_l4: 'IDI: CHE-488.376.245',
    footer_legal: 'Mentions légales, Politique de confidentialité et Cookies',
    footer_copy: '© 2026 Fundación Feliz',
    legal_title: 'Mentions Légales',
    legal_info_title: '1. Informations Légales',
    legal_info_name: 'Nom: Fundación Feliz',
    legal_info_address: 'Adresse: Via ai Mulini 15, 6676 Bignasco',
    legal_info_tax: 'Identification Fiscale: CHE-488.376.245',
    legal_terms_title: '2. Conditions d\'Utilisation',
    legal_terms_p1: 'L\'accès et l\'utilisation de ce site web sont régis par les termes et conditions décrits ici. En accédant et en utilisant ce site web, vous acceptez ces conditions dans leur intégralité.',
    legal_ip_title: '3. Propriété Intellectuelle',
    legal_ip_p1: 'Tout le contenu de ce site web, y compris, mais sans s\'y limiter, les textes, images et logos, est la propriété de la Fundación Feliz. Son utilisation n\'est pas autorisée sans autorisation préalable.',
    privacy_title: 'Politique de Confidentialité',
    privacy_data_collection_title: '1. Collecte de Données',
    privacy_data_collection_p1: 'Nous collectons les données personnelles que vous nous fournissez volontairement, telles que le nom et l\'adresse e-mail, lorsque vous nous contactez.',
    privacy_data_use_title: '2. Utilisation des Données',
    privacy_data_use_p1: 'Nous utilisons vos données pour répondre à vos demandes et vous fournir des informations sur notre fondation.',
    privacy_data_protection_title: '3. Protection des Données',
    privacy_data_protection_p1: 'Nous nous engageons à proteger vos données et ne les partagerons pas avec des tiers sans votre consentement.',
    cookies_title: 'Politique de Cookies',
    cookies_use_title: '1. Utilisation des Cookies',
    cookies_use_p1: 'Ce site web utilise des cookies pour améliorer l\'expérience utilisateur et fournir des fonctionnalités supplémentaires.',
    cookies_types_title: '2. Types de Cookies',
    cookies_types_p1: 'Nous utilisons des cookies techniques nécessaires au fonctionnement du site et des cookies analytiques pour collecter des informations sur la manière dont les visiteurs utilisent notre site web.',
    cookies_consent_title: '3. Consentement',
    cookies_consent_p1: 'En continuant à naviguer sur notre site web, vous acceptez l\'utilisation de cookies.',
  },
  it: {
    nav_home: 'Home',
    hero_welcome: 'BENVENUTO A',
    hero_title: 'FUNDACIÓN FELIZ',
    about_title: 'FUNDACIÓN FELIZ',
    about_p1: 'È una Fondazione con finalità puramente benefiche costituita nel 2023 per volontà della famiglia RIVA.',
    about_p2: 'L\'obiettivo della Fondazione è aiutare finanziariamente qualsiasi organizzazione di beneficenza che si occupa di persone e animali senza limiti territoriali, come ad esempio:',
    about_li1: 'Carità Cattolica e Associazioni di Carità',
    about_li2: 'Associazioni per la cura di malattie e patologie infantili.',
    about_li3: 'Associazioni di beneficenza e ospitalità',
    about_li4: 'Associazioni umanitarie',
    about_li5: 'Associazioni per emergenze e disastri',
    about_li6: 'Associazioni per la protezione degli animali',
    about_li7: 'Associazioni per la protezione delle specie animali protette a rischio di estinzione.',
    contact_email_title: 'Email',
    contact_address_title: 'Indirizzo',
    contact_address_l1: 'Fundación Feliz',
    contact_address_l2: 'Via ai Mulini 15 6676',
    contact_address_l3: 'Bignasco - Svizzera',
    contact_address_l4: 'IDI: CHE-488.376.245',
    footer_legal: 'Termini legali, Informativa sulla privacy e Cookie',
    footer_copy: '© 2026 Fundación Feliz',
    legal_title: 'Termini Legali',
    legal_info_title: '1. Informazioni Legali',
    legal_info_name: 'Nome: Fundación Feliz',
    legal_info_address: 'Indirizzo: Via ai Mulini 15, 6676 Bignasco',
    legal_info_tax: 'Identificazione Fiscale: CHE-488.376.245',
    legal_terms_title: '2. Condizioni d\'Uso',
    legal_terms_p1: 'L\'accesso e l\'uso di questo sito web sono regolati dai termini e dalle condizioni qui descritti. Accedendo e utilizzando questo sito web, accetti questi termini nella loro interezza.',
    legal_ip_title: '3. Proprietà Intellettuale',
    legal_ip_p1: 'Tutto il contenuto di questo sito web, inclusi, ma non solo, testi, immagini e loghi, è di proprietà della Fundación Feliz. Il suo utilizzo non è consentito senza previa autorizzazione.',
    privacy_title: 'Politica sulla Privacy',
    privacy_data_collection_title: '1. Raccolta dei Dati',
    privacy_data_collection_p1: 'Raccogliamo i dati personali che ci fornisci volontariamente, come nome e indirizzo email, quando ci contatti.',
    privacy_data_use_title: '2. Uso dei Dati',
    privacy_data_use_p1: 'Utilizziamo i tuoi dati per rispondere alle tue domande e fornirti informazioni sulla nostra fondazione.',
    privacy_data_protection_title: '3. Protezione dei Dati',
    privacy_data_protection_p1: 'Ci impegniamo a proteggere i tuoi dati e non li condivideremo con terzi senza il tuo consenso.',
    cookies_title: 'Politica sui Cookie',
    cookies_use_title: '1. Uso dei Cookie',
    cookies_use_p1: 'Questo sito web utilizza i cookie per migliorare l\'esperienza dell\'utente e fornire funzionalità aggiuntive.',
    cookies_types_title: '2. Tipi di Cookie',
    cookies_types_p1: 'Utilizziamo cookie tecnici necessari per il funzionamento del sito e cookie analitici per raccogliere informazioni su come i visitatori utilizzano il nostro sito web.',
    cookies_consent_title: '3. Consenso',
    cookies_consent_p1: 'Continuando a navigare sul nostro sito web, accetti l\'uso dei cookie.',
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations.es;


const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');
  const [page, setPage] = useState<'home' | 'legal'>('home');
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleHomeClick = () => {
    if (page === 'home') {
      window.location.reload();
    } else {
      setPage('home');
    }
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-y-auto">
      {/* Background Image is now handled by CSS on the body tag */}
      
      {/* Overlay to darken the image slightly for better text contrast */}
      <div className="fixed inset-0 z-[-1] bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
        {/* Header */}
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sm:px-8">
          <button
            onClick={handleHomeClick}
            className="text-lg font-medium text-shadow transition-opacity hover:opacity-80"
          >
            {t.nav_home}
          </button>
          <LanguageSwitcher currentLang={language} setLang={setLanguage} />
        </header>

        {page === 'home' ? (
           <main className="flex-grow flex flex-col items-center w-full">
            {/* Hero Section */}
            <section 
              className="w-full min-h-screen flex flex-col items-center justify-center text-center text-shadow"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h2 className="text-xl sm:text-2xl font-light tracking-widest">{t.hero_welcome}</h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mt-4">
                  {t.hero_title}
                </h1>
              </div>
            </section>
            
            {/* Content Cards Section */}
            <section className="w-full flex flex-col items-center py-20 px-4 sm:px-8">
              <div className="w-full max-w-4xl space-y-24">
                {/* About Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-left border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-4 text-shadow">{t.about_title}</h3>
                  <p className="text-base leading-relaxed mb-6">
                    {t.about_p1}
                  </p>
                  <p className="text-base leading-relaxed mb-6">
                    {t.about_p2}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>{t.about_li1}</li>
                    <li>{t.about_li2}</li>
                    <li>{t.about_li3}</li>
                    <li>{t.about_li4}</li>
                    <li>{t.about_li5}</li>
                    <li>{t.about_li6}</li>
                    <li>{t.about_li7}</li>
                  </ul>
                </div>

                {/* Contact Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-left border border-white/20 shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-shadow">{t.contact_email_title}</h4>
                      <p>office@fundacionfeliz.com</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-shadow">{t.contact_address_title}</h4>
                      <p>{t.contact_address_l1}</p>
                      <p>{t.contact_address_l2}</p>
                      <p>{t.contact_address_l3}</p>
                      <p>{t.contact_address_l4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        ) : (
          <LegalPage translations={t} />
        )}
        
        {/* Footer */}
        <footer className="w-full max-w-7xl mx-auto text-center py-6 text-sm text-gray-200 px-4 sm:px-8">
           <button 
             onClick={() => setPage('legal')}
             disabled={page === 'legal'}
             className={`mb-1 focus:outline-none ${
                page === 'legal'
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:underline'
              }`}
           >
            {t.footer_legal}
          </button>
          <p>{t.footer_copy}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;