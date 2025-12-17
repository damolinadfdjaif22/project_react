import "../styles/Header.css";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <h1>Mi Página React</h1>
      <button onClick={onToggleTheme}>
        Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </header>
  );
}

export default Header;
