import React, { useState } from 'react';
import '../../index.css';

const Hero = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  return (

    <section className="hero-section">
      <div className="hero-content">
        {/* Titular estático */}
        <h1>Bienvenidos a React Learning</h1>
        
        {/* Subtítulo estático */}
        <h2>Domina la creación de interfaces modernas</h2>
        
        <p>
          Este es un proyecto demostrativo para la asignatura de Programación Integrativa.
          Aprenderemos sobre componentes, props y hooks.
        </p>

        {/* Renderizado condicional basado en el estado */}
        {mostrarDetalle && (
          <p className="hero-extra-info">
            React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. 
            ¡Es la librería más popular para el desarrollo web actual!
          </p>
        )}

        {/* Botón interactivo */}
        <button onClick={toggleDetalle} className="hero-button">
          {mostrarDetalle ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    </section>
  );
};

export default Hero;