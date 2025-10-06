
import React from 'react';

const FlagIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 5 3"
    className="w-8 h-auto rounded-sm border border-white/50 shadow-md"
  >
    {children}
  </svg>
);

const LanguageSwitcher: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <a href="#" className="hover:opacity-75 transition-opacity">
        <FlagIcon>
          <rect width="5" height="3" fill="#ffce00"/>
          <rect width="5" height="2" y="0" fill="#c00"/>
          <rect width="5" height="1" y="0" fill="#c00"/>
          <rect width="5" height="1" y="2" fill="#ffce00"/>
        </FlagIcon>
      </a>
      <a href="#" className="hover:opacity-75 transition-opacity">
        <FlagIcon>
          <rect width="5" height="3" fill="#fff"/>
          <path d="M2 0v3 M0 1.5h5" stroke="#c00" strokeWidth=".6"/>
          <path d="M0 0l2 1.5L0 3 M5 0l-2 1.5L5 3" stroke="#00247d" strokeWidth=".4"/>
        </FlagIcon>
      </a>
      <a href="#" className="hover:opacity-75 transition-opacity">
        <FlagIcon>
          <rect width="5" height="3" fill="#fff"/>
          <rect width="2" height="3" x="0" fill="#002654"/>
          <rect width="1" height="3" x="4" fill="#ed2939"/>
        </FlagIcon>
      </a>
      <a href="#" className="hover:opacity-75 transition-opacity">
        <FlagIcon>
          <rect width="5" height="3" fill="#fff"/>
          <rect width="1.667" height="3" x="0" fill="#009246"/>
          <rect width="1.667" height="3" x="3.333" fill="#ce2b37"/>
        </FlagIcon>
      </a>
    </div>
  );
};

export default LanguageSwitcher;
