import { BrowserRouter, Routes, Route } from "react-router-dom";
import Encabezado from "./components/Encabezado";
import Pie from "./components/pie";
import Inicio from "./Pages/inicio";
import Catalogo from "./Pages/Catalogo";
import Contactos from "./Pages/Contactos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Encabezado titulo="Biblioteca Letras del Norte" />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </main>

        <Pie estudiante="Eric Mateo Garcia Correa" />
      </div>
    </BrowserRouter>
  );
}

export default App;