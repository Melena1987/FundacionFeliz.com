import React from 'react';
import type { Translations } from '../App';

interface LegalPageProps {
  translations: Translations;
}

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-shadow">{title}</h2>
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            {children}
        </div>
    </section>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        {children}
    </div>
);


const LegalPage: React.FC<LegalPageProps> = ({ translations: t }) => {
  return (
    <main className="flex-grow w-full max-w-4xl mx-auto py-16 px-4 sm:px-0">
      <div className="w-full bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-16 text-left border border-white/20 shadow-xl space-y-12">
        
        {/* Legal Terms Section */}
        <LegalSection title={t.legal_title}>
            <SubSection title={t.legal_info_title}>
                <p>{t.legal_info_name}</p>
                <p>{t.legal_info_address}</p>
                <p>{t.legal_info_tax}</p>
            </SubSection>
            <SubSection title={t.legal_terms_title}>
                <p>{t.legal_terms_p1}</p>
            </SubSection>
            <SubSection title={t.legal_ip_title}>
                <p>{t.legal_ip_p1}</p>
            </SubSection>
        </LegalSection>

        {/* Privacy Policy Section */}
        <LegalSection title={t.privacy_title}>
            <SubSection title={t.privacy_data_collection_title}>
                <p>{t.privacy_data_collection_p1}</p>
            </SubSection>
            <SubSection title={t.privacy_data_use_title}>
                <p>{t.privacy_data_use_p1}</p>
            </SubSection>
            <SubSection title={t.privacy_data_protection_title}>
                <p>{t.privacy_data_protection_p1}</p>
            </SubSection>
        </LegalSection>

        {/* Cookies Policy Section */}
        <LegalSection title={t.cookies_title}>
            <SubSection title={t.cookies_use_title}>
                <p>{t.cookies_use_p1}</p>
            </SubSection>
             <SubSection title={t.cookies_types_title}>
                <p>{t.cookies_types_p1}</p>
            </SubSection>
             <SubSection title={t.cookies_consent_title}>
                <p>{t.cookies_consent_p1}</p>
            </SubSection>
        </LegalSection>

      </div>
    </main>
  );
};

export default LegalPage;
