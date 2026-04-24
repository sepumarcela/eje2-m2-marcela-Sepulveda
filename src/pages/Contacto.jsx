const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
    };

    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "50px" }}>
      <input name="nombre" placeholder="Nombre" />
      <input name="email" placeholder="Email" />
      <button>Enviar</button>
    </form>
  );
};

export default Contacto;