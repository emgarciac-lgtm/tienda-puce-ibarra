import SeccionCategoria from "../components/SeccionCategoria";
import CardLibro from "../components/CardLibro";

function Catalogo() {
  return (
    <div className="container">
      <h2 className="mb-4 fw-bold">Catálogo de libros</h2>

      <SeccionCategoria titulo="Programación">
        <CardLibro titulo="Eloquent JavaScript" autor="Marijn Haverbeke" anio="2018" paginas="472" stock="5" />
        <CardLibro titulo="JavaScript: The Good Parts" autor="Douglas Crockford" anio="2008" paginas="176" stock="2" />
        <CardLibro titulo="Clean Code" autor="Robert C. Martin" anio="2008" paginas="464" stock="0" />
      </SeccionCategoria>

      <SeccionCategoria titulo="Novelas">
        <CardLibro titulo="Cien años de soledad" autor="Gabriel García Márquez" anio="1967" paginas="471" stock="4" />
        <CardLibro titulo="Huasipungo" autor="Jorge Icaza" anio="1934" paginas="210" stock="1" />
        <CardLibro titulo="El principito" autor="Antoine de Saint-Exupéry" anio="1943" paginas="96" stock="6" />
      </SeccionCategoria>

      <SeccionCategoria titulo="Ciencia">
        <CardLibro titulo="Breve historia del tiempo" autor="Stephen Hawking" anio="1988" paginas="256" stock="2" />
        <CardLibro titulo="Cosmos" autor="Carl Sagan" anio="1980" paginas="365" stock="0" />
      </SeccionCategoria>
    </div>
  );
}

export default Catalogo;