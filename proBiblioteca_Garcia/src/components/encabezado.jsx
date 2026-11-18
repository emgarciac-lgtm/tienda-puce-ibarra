import { Link } from "react-router-dom";

function Encabezado({ titulo }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">{titulo}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contactos">Contactos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Encabezado;