// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Persona 2: colocar Header en esta ruta
import Hero from './components/hero/Hero'; // Si renombraste la carpeta, ajusta la ruta; la ruta aquí coincide con tu repo actual
import FeatureCard from './components/FeatureCard'; // Asegura FeatureCard en esta ruta
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import './index.css';

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
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  // Cargar features.json
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    import('./data/features.json')
      .then((module) => {
        const data = module.default ?? module;
        if (mounted) {
          setFeatures(Array.isArray(data) ? data : []);
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
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <section className="features" aria-live="polite" aria-busy={loading}>
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
