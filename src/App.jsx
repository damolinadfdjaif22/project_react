// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Persona 2 debe crear este componente
import Hero from './components/hero/Hero'; // según tu repo actual es lowercase; ajusta si renombraste
import FeatureCard from './components/FeatureCard';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import './index.css'; // usa el archivo que mostraste

function App() {
  const [theme, setTheme] = useState('light');
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Persistencia del tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Cargar features.json usando import dinámico dentro de useEffect
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    import('./data/features.json')
      .then((module) => {
        // module puede exportar default o ser el array directo
        const data = module.default ?? module;
        if (mounted) {
          setFeatures(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error cargando features.json:', err);
        if (mounted) {
          setError('No se pudieron cargar las características.');
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={`app ${theme}`}>
      {/* Header puede usar theme y onToggleTheme */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <section className="features" aria-live="polite">
          <h2 className="sr-only">Características</h2>

          {loading && <p>Cargando características...</p>}
          {error && <p role="alert">{error}</p>}

          {!loading && !error && (
            <div className="features-grid">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          )}
        </section>

        <Stats />
      </main>

      <Footer />
    </div>
  );
}

export default App;
