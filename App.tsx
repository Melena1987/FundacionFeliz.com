
import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {
  const backgroundImageUrl = 'https://www.fundacionfeliz.com/images/home.jpg';

  return (
    <div className="relative min-h-screen w-full text-white overflow-y-auto">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      
      {/* Overlay to darken the image slightly for better text contrast */}
      <div className="fixed inset-0 z-[-1] bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-4 sm:px-8 py-8">
        {/* Header */}
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-4">
          <a href="#" className="text-lg font-medium text-shadow hover:opacity-80 transition-opacity">
            Inicio
          </a>
          <LanguageSwitcher />
        </header>

        <main className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto space-y-12 py-16 text-center">
          {/* Hero Title */}
          <div className="flex flex-col items-center text-shadow">
            <h2 className="text-xl sm:text-2xl font-light tracking-widest">BIENVENIDO A</h2>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-wide mt-2">
              FUNDACIÓN FELIZ
            </h1>
          </div>
          
          {/* Content Cards */}
          <div className="w-full flex flex-col items-center space-y-12">
            {/* About Card */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-left border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-shadow">FUNDACIÓN FELIZ</h3>
              <p className="text-base leading-relaxed mb-6">
                Es una Fundación con finalidad únicamente benéfica constituida en 2023 por voluntad de la familia RIVA.
              </p>
              <p className="text-base leading-relaxed mb-6">
                El objetivo de la Fundación es ayudar económicamente a cualquier organización benéfica que se ocupas de personas y animales sin límites territoriales como por ejemplo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Caridad Católica y Asociaciones de Caridad</li>
                <li>Asociaciones para el tratamiento de enfermedades y patologías infantiles.</li>
                <li>Asociaciones benéficas y de hospitalidad</li>
                <li>Asociaciones humanitarias</li>
                <li>Asociaciones para emergencias y desastres</li>
                <li>Asociaciones protectoras de animales</li>
                <li>Asociaciones para la protección de especies animales protegidas en riesgo de extinción.</li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-left border border-white/20 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-shadow">Email</h4>
                  <p>office@fundacionfeliz.com</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-shadow">Dirección</h4>
                  <p>Fundación Feliz</p>
                  <p>Via ai Mulini 15 6676</p>
                  <p>Bignasco - Suiza</p>
                  <p>IDI: CHE-488.376.245</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="w-full max-w-7xl mx-auto text-center py-6 text-sm text-gray-200">
          <p className="mb-1">Términos legales, Política de privacidad y Cookies</p>
          <p>&copy; 2024 Fundación Feliz</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
