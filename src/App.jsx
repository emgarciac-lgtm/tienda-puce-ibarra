import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Encabezado from "./components/encabezado";
import Pie from "./components/pie";
import Productos from "./Pages/Productos";
import Compras from "./Pages/Compras";
import Catalogoweb from "./Pages/Catalogoweb";
import Ofertas from "./Pages/Ofertas";
import "./App.css";

function App() {
  const [lista, setLista] = useState([]);

  function agregar(nombre, precio, esLicor = false) {
    const producto = { nombre: nombre, precio: precio, esLicor: esLicor };
    setLista([...lista, producto]);
  }

  function vaciar() {
    setLista([]);
  }

  return (
    <BrowserRouter>
      <div className="container bg bg-primary">
        <Encabezado titulo="PUCE Ibarra" />

        <main className="bg-light p-3">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Bienvenido a la tienda PUCESI</h2>
                  <p>Somos la mejor tienda del norte del país.</p>
                </div>
              }
            />
            <Route
              path="/contactos"
              element={
                <div>
                  <h2>Contactos</h2>
                  <p>Ibarra, Ecuador</p>
                </div>
              }
            />
            <Route path="/productos" element={<Productos agregar={agregar} />} />
            <Route path="/compras" element={<Compras lista={lista} vaciarLista={vaciar} />} />
            <Route path="/catalogo" element={<Catalogoweb agregar={agregar} />} />
            <Route path="/ofertas" element={<Ofertas agregar={agregar} />} />
          </Routes>
        </main>

        <Pie />
      </div>
    </BrowserRouter>
  );
}

export default App;