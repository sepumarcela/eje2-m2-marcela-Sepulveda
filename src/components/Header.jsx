import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">URBAN THREADS</div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;