// src/components/Footer/Footer.jsx
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-copy">© {year} - Proyecto React</p>

        <nav className="footer-nav" aria-label="Enlaces del proyecto">
          <a
            href="https://github.com/damolinadfdjaif22/project_react.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al repositorio en GitHub (se abre en una nueva pestaña)"
          >
            GitHub
          </a>
          <span aria-hidden="true"> | </span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al perfil de LinkedIn (se abre en una nueva pestaña)"
          >
            LinkedIn
          </a>
        </nav>

        <p className="footer-credit">Desarrollado por el equipo - Programación Integrativa</p>
      </div>
    </footer>
  );
}

export default Footer;

