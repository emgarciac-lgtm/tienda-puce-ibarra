function CardLibro({ titulo, autor, anio, paginas, stock }) {
  let numPaginas = Number(paginas);
  let numStock = Number(stock);

  // Cálculo automático: 10 páginas diarias (redondeado hacia arriba)
  let diasLectura = Math.ceil(numPaginas / 10);

  // Lógica de colores para el stock
  let claseBadge = "bg-success";
  let textoStock = `Disponible: Quedan ${numStock}`;

  if (numStock >= 2 && numStock <= 3) {
    claseBadge = "bg-warning text-dark";
    textoStock = `Pocos ejemplares: Quedan ${numStock}`;
  } else if (numStock < 2) {
    claseBadge = "bg-danger";
    textoStock = "Agotado";
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm border-0 bg-light">
        <div className="card-body">
          <h5 className="card-title fw-bold text-dark">{titulo}</h5>
          <p className="card-text text-muted small mb-1">{autor} - {anio}</p>
          <p className="card-text fw-semibold mb-1">{numPaginas} páginas</p>
          <p className="card-text text-primary small mb-3">Se lee en {diasLectura} días</p>
          
          <div>
            <span className={`badge ${claseBadge}`}>
              {textoStock}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLibro;