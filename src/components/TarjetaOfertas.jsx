function TarjetasOfertas({ nombre, precioOriginal, descuento, stock, agregar }) {
  let precioNum = Number(precioOriginal);
  let descNum = Number(descuento);
  let stockNum = Number(stock);

  let montoDescuento = precioNum * (descNum / 100);
  let precioConDescuento = precioNum - montoDescuento;
  let iva = precioConDescuento * 0.15;
  let totalFinal = precioConDescuento + iva;

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

  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold">{nombre}</h5>
          <p className="card-text text-muted small mb-2">
            Oferta con {descNum.toFixed(0)}% de descuento (Antes ${precioNum.toFixed(2)}).
          </p>

          <p className="mb-1">Precio: ${precioConDescuento.toFixed(2)}</p>
          <p className="fw-bold text-secondary mb-1">IVA: ${iva.toFixed(2)}</p>
          <p className="fw-bold text-success mb-2">Total: ${totalFinal.toFixed(2)}</p>

          <div className="mb-3">
            <span className={`badge ${claseBadge} me-1`}>{textoEstado}</span>
            <span className="badge bg-secondary">Stock: {stockNum}</span>
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={() => agregar(nombre, precioConDescuento, false)}
          >
            Agregar a compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetasOfertas;