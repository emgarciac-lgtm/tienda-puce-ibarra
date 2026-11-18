function SeccionCategoria({ titulo, children }) {
  return (
    <section className="mb-4">
      <h4 className="fw-bold text-secondary mb-3">{titulo}</h4>
      <div className="row">
        {children}
      </div>
    </section>
  );
}

export default SeccionCategoria;