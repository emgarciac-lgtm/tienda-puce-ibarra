import { Link } from "react-router-dom";

function Encabezado({ titulo }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <Link className="navbar-brand fw-bold text-primary" to="/">
        {titulo}
      </Link>
      <div className="navbar-nav d-flex flex-row gap-3">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
        <Link className="nav-link" to="/productos">
          Productos
        </Link>
        <Link className="nav-link" to="/catalogo">
          Catálogo
        </Link>
        <Link className="nav-link" to="/ofertas">
          Ofertas
        </Link>
        <Link className="nav-link" to="/compras">
          Mis Compras
        </Link>
        <Link className="nav-link" to="/contactos">
          Contactos
        </Link>
      </div>
    </nav>
  );
}

export default Encabezado;