import { useState } from "react";

function Compras({ lista, vaciarLista }) {
  const [nombreCliente, setNombreCliente] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("Ibarra");
  const [genero, setGenero] = useState("Masculino");
  const [mostrarFactura, setMostrarFactura] = useState(false);

  const edadNum = Number(edad);
  const esMenor = edad !== "" && edadNum < 18;
  const esTerceraEdad = edad !== "" && edadNum > 65;

  const productosPermitidos = esMenor
    ? lista.filter((item) => !item.esLicor)
    : lista;

  const tieneLicoresBloqueados = esMenor && lista.some((item) => item.esLicor);

  const subtotal = productosPermitidos.reduce((acum, item) => acum + Number(item.precio), 0);

  const subtotalLicores = productosPermitidos
    .filter((item) => item.esLicor)
    .reduce((acum, item) => acum + Number(item.precio), 0);

  const porcentajeICE = !esMenor && edad !== "" ? 0.19 : 0;
  const ice = subtotalLicores * porcentajeICE;

  let porcentajeIVA = 0.15;
  let etiquetaIVA = "15%";

  if (edad === "" || esMenor) {
    porcentajeIVA = 0;
    etiquetaIVA = "0%";
  } else if (esTerceraEdad) {
    porcentajeIVA = 0.08;
    etiquetaIVA = "8%";
  }

  const iva = (subtotal + ice) * porcentajeIVA;
  const total = subtotal + ice + iva;

  function generarFactura(e) {
    e.preventDefault();
    if (!nombreCliente.trim() || edad === "") {
      alert("Por favor ingrese el nombre y la edad del cliente.");
      return;
    }
    setMostrarFactura(true);
  }

  function nuevaCompra() {
    vaciarLista();
    setNombreCliente("");
    setEdad("");
    setCiudad("Ibarra");
    setGenero("Masculino");
    setMostrarFactura(false);
  }

  return (
    <div className="container mt-3 mb-4">
      <h3>Total de productos: {lista.length}</h3>
      <h4>Mis productos seleccionados</h4>

      <ul>
        {lista.map((prod, index) => (
          <li key={index}>
            {prod.nombre}-{Number(prod.precio).toFixed(2)}{" "}
            {prod.esLicor && <span className="badge bg-warning text-dark">Licor</span>}
          </li>
        ))}
      </ul>

      <hr />

      <form onSubmit={generarFactura} className="card p-3 shadow-sm mb-3">
        <h5 className="fw-bold mb-3">Datos del Cliente</h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre del cliente:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ej: Juan Pérez"
              value={nombreCliente}
              onChange={(e) => {
                setNombreCliente(e.target.value);
                setMostrarFactura(false);
              }}
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Edad:</label>
            <input
              type="number"
              min="1"
              max="120"
              className="form-control"
              placeholder="Edad"
              value={edad}
              onChange={(e) => {
                setEdad(e.target.value);
                setMostrarFactura(false);
              }}
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Ciudad:</label>
            <select
              className="form-select"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            >
              <option value="Ibarra">Ibarra</option>
              <option value="Quito">Quito</option>
              <option value="Otavalo">Otavalo</option>
              <option value="Atuntaqui">Atuntaqui</option>
              <option value="Tulcán">Tulcán</option>
              <option value="Guayaquil">Guayaquil</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label">Género:</label>
            <select
              className="form-select"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <div className="mt-3 d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Generar Factura
          </button>
          <button type="button" className="btn btn-danger" onClick={nuevaCompra}>
            Hacer una nueva compra
          </button>
        </div>
      </form>

      {mostrarFactura && (
        <div className="card p-4 border-primary shadow-sm">
          <h4 className="text-primary fw-bold mb-3">FACTURA - TIENDA PUCE IBARRA</h4>
          <p className="mb-1"><strong>Cliente:</strong> {nombreCliente}</p>
          <p className="mb-1"><strong>Edad:</strong> {edadNum} años</p>
          <p className="mb-1"><strong>Ciudad:</strong> {ciudad}</p>
          <p className="mb-3"><strong>Género:</strong> {genero}</p>

          {tieneLicoresBloqueados && (
            <div className="alert alert-danger py-2">
              <strong>Aviso:</strong> Eres menor de edad, no puedes comprar alcohol.
            </div>
          )}

          <h6 className="fw-bold">Detalle de productos facturados:</h6>
          <ul>
            {productosPermitidos.map((prod, index) => (
              <li key={index}>
                {prod.nombre} - ${Number(prod.precio).toFixed(2)}
              </li>
            ))}
          </ul>

          <hr />
          <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
          <h5>ICE (10% en licores): ${ice.toFixed(2)}</h5>
          <h5>IVA ({etiquetaIVA}): ${iva.toFixed(2)}</h5>
          <h4 className="fw-bold text-success mt-2">Total a pagar: ${total.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}

export default Compras;