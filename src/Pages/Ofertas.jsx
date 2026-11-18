import { useState, useEffect } from "react";
import TarjetasOfertas from "../components/TarjetaOfertas";

function Ofertas({ agregar }) {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8&skip=12")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setOfertas(datos.products);
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar las ofertas");
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando ofertas...</p>;
  }

  if (error !== "") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Ofertas</h2>

      <div className="row">
        {ofertas.map((prod) => (
          <TarjetasOfertas
            key={prod.id}
            nombre={prod.title}
            precioOriginal={prod.price}
            descuento={prod.discountPercentage}
            stock={prod.stock}
            agregar={agregar}
          />
        ))}
      </div>

      <h3>Tabla de Ofertas</h3>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descuento</th>
            <th>Precio Final</th>
            <th>IVA</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {ofertas.map((prod) => {
            const precio = Number(prod.price);
            const porcentaje = Number(prod.discountPercentage);
            const valorDescuento = precio * (porcentaje / 100);
            const precioFinal = precio - valorDescuento;
            const iva = precioFinal * 0.15;

            return (
              <tr key={prod.id}>
                <td>{prod.title}</td>
                <td>${valorDescuento.toFixed(2)}</td>
                <td>${precioFinal.toFixed(2)}</td>
                <td>${iva.toFixed(2)}</td>
                <td style={{ color: porcentaje > 10 ? "red" : "gray" }}>
                  {porcentaje > 10 ? "Gran Descuento" : "Descuento Normal"}
                </td>
                <td>
                  <button onClick={() => agregar(prod.title, precioFinal, false)}>
                    Agregar a compra
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Ofertas;