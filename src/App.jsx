import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import FeatureCard from './components/FeatureCard';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import featuresData from './data/features.json';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [features, setFeatures] = useState([]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />

      <section className="features">
        {features.map(feature => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>

      <Stats />
      <Footer />
    </div>
  );
}

export default App;
