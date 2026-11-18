import { useState, useEffect } from "react";
import CardProducto from "../components/CardProducto";

function Catalogoweb({ agregar }) {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos.products);
        setCargando(false);
      })
      .catch(() => {
        setError("No se carga los datos");
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Productos cargando...</p>;
  }

  if (error !== "") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div className="row">
        {productos.map((prod) => (
          <CardProducto
            key={prod.id}
            nombre={prod.title}
            precio={prod.price}
            disponible={prod.stock}
            imagen={prod.thumbnail}
            agregar={agregar}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogoweb;