import React from 'react';
import type { Language } from '../App';

interface LanguageSwitcherProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

const FlagButton: React.FC<{
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  ariaLabel: string;
}> = ({ onClick, isActive, children, ariaLabel }) => (
  <button
    onClick={onClick}
    className={`w-6 h-6 rounded-full overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
      isActive
        ? 'border-white/80 scale-110 shadow-lg'
        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
    }`}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setLang }) => {
  return (
    <div className="flex items-center space-x-1 md:space-x-2 bg-black/10 backdrop-blur-sm p-1 rounded-full">
      <FlagButton onClick={() => setLang('es')} isActive={currentLang === 'es'} ariaLabel="Switch to Spanish">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-full h-full">
          <rect width="3" height="2" fill="#c60b1e"/>
          <rect width="3" height="1" y="0.5" fill="#ffc400"/>
        </svg>
      </FlagButton>
      <div className="h-5 w-px bg-white/30"></div>
      <FlagButton onClick={() => setLang('en')} isActive={currentLang === 'en'} ariaLabel="Switch to English">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full">
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
        </svg>
      </FlagButton>
      <div className="h-5 w-px bg-white/30"></div>
      <FlagButton onClick={() => setLang('fr')} isActive={currentLang === 'fr'} ariaLabel="Switch to French">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-full h-full">
          <rect width="1" height="2" fill="#002395"/>
          <rect width="1" height="2" x="1" fill="#fff"/>
          <rect width="1" height="2" x="2" fill="#ed2939"/>
        </svg>
      </FlagButton>
      <div className="h-5 w-px bg-white/30"></div>
      <FlagButton onClick={() => setLang('it')} isActive={currentLang === 'it'} ariaLabel="Switch to Italian">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-full h-full">
          <rect width="1" height="2" fill="#009246"/>
          <rect width="1" height="2" x="1" fill="#fff"/>
          <rect width="1" height="2" x="2" fill="#ce2b37"/>
        </svg>
      </FlagButton>
    </div>
  );
};

export default LanguageSwitcher;