const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
    };

    localStorage.setItem("formData", JSON.stringify(data));
    alert("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "50px" }}>
      <input name="nombre" placeholder="Nombre" required />
      <input name="email" placeholder="Email" required />
      <button>Enviar</button>
    </form>
  );
};