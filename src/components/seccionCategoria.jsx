function SeccionCategoria({ titulo, children }) {
  return (
    <section className="mb-4">
      <div className="bg-info text-white p-2 mb-3 rounded">
        <h5 className="m-0">{titulo}</h5>
      </div>
      <div className="row">
        {children}
      </div>
    </section>
  );
}

export default SeccionCategoria;