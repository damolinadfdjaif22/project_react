import { useState } from 'react';

function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="hero">
      <h2>Bienvenido a React</h2>
      <p>Aplicación creada con Vite y React.</p>

      {showMore && (
        <p>
          React permite construir interfaces de usuario reutilizables
          mediante componentes.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Mostrar menos' : 'Mostrar más'}
      </button>
    </section>
  );
}

export default Hero;
