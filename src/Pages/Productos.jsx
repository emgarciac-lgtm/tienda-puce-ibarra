import SeccionCategoria from "../components/seccionCategoria";
import CardProducto from "../components/CardProducto";

function Productos({ agregar }) {
  return (
    <div className="container mt-3">
      <SeccionCategoria titulo="Mi lista de Productos">
        <div className="w-100 mb-2">
          <h4 className="text-primary fw-bold">Licores</h4>
        </div>
        <CardProducto nombre="Pilsener" precio="5" disponible={20} agregar={agregar} esLicor={true} />
        <CardProducto nombre="Club" precio="15" disponible={8} agregar={agregar} esLicor={true} />
        <CardProducto nombre="Modelo" precio="2.5" disponible={6} agregar={agregar} esLicor={true} />
        <CardProducto nombre="Poker" precio="3.5" disponible={3} agregar={agregar} esLicor={true} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Secciones">
        <div className="w-100 mb-2">
          <h4 className="text-primary fw-bold">Snacks</h4>
        </div>
        <CardProducto nombre="Kachitos" precio="0.5" disponible={30} agregar={agregar} />
        <CardProducto nombre="Tostitos" precio="0.5" disponible={12} agregar={agregar} />
        <CardProducto nombre="Doritos" precio="1" disponible={30} agregar={agregar} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Bebidas">
        <div className="w-100 mb-2">
          <h4 className="text-primary">Gomitas</h4>
        </div>
        <CardProducto nombre="TRULULU" precio="0.5" disponible={30} agregar={agregar} />
        <CardProducto nombre="MOGUL" precio="1" disponible={12} agregar={agregar} />
        <CardProducto nombre="LAFOTO" precio="0.75" disponible={30} agregar={agregar} />
      </SeccionCategoria>
    </div>
  );
}

export default Productos;