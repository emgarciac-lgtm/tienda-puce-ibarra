import { useState } from "react";

function CardProducto({ nombre, precio, disponible, stock, imagen, agregar, esLicor = false }) {
  const [contador, setContador] = useState(0);
  const [descuento, setDescuento] = useState(0);

  let precioNum = Number(precio);
  let stockNum = Number(disponible || stock);

  let iva = precioNum * 0.15;
  let totalUnitario = precioNum + iva;

  let subtotal = totalUnitario * contador;
  let montoDescuento = subtotal * (descuento / 100);
  let totalConDescuento = subtotal - montoDescuento;

  let claseBadge = "bg-success";
  let textoEstado = "Disponible";

  if (stockNum > 10) {
    claseBadge = "bg-success";
    textoEstado = "Disponible";
  } else if (stockNum >= 5 && stockNum <= 10) {
    claseBadge = "bg-warning text-dark";
    textoEstado = "Disponible";
  } else {
    claseBadge = "bg-danger";
    textoEstado = "Agotado";
  }

  function mostrarProducto() {
    setContador(contador + 1);
  }

  function comprarProducto() {
    if (agregar) {
      agregar(nombre, precioNum, esLicor);
    }
    setContador(0);
    setDescuento(0);
  }

  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100 shadow-sm">
        {imagen && (
          <img
            src={imagen}
            alt={nombre}
            className="card-img-top"
            style={{ height: "160px", objectFit: "contain" }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title fw-bold">{nombre}</h5>
          <p className="card-text text-muted small mb-2">Producto 1 a precio {precioNum}.</p>

          <p className="mb-1">Precio: ${precioNum.toFixed(2)}</p>
          <p className="fw-bold text-secondary mb-1">IVA: ${iva.toFixed(2)}</p>
          <p className="fw-bold text-success mb-2">Total: ${totalUnitario.toFixed(2)}</p>

          <div className="mb-3">
            <span className={`badge ${claseBadge} me-1`}>{textoEstado}</span>
            <span className="badge bg-secondary">Stock: {stockNum}</span>
          </div>

          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-primary w-50" onClick={mostrarProducto}>
              Agregar
            </button>
            <button className="btn btn-danger w-50" onClick={comprarProducto}>
              Comprar
            </button>
          </div>

          <h5 className="text-center mb-1">Cantidad: {contador}</h5>

          <h6 className="mb-1">%Descuento</h6>
          <input
            type="number"
            min="0"
            className="form-control mb-2 text-center"
            value={descuento}
            onChange={(e) => setDescuento(parseInt(e.target.value) || 0)}
          />

          <h6 className="text-center text-success fw-bold m-0">
            Total con descuento: ${totalConDescuento.toFixed(2)}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CardProducto;