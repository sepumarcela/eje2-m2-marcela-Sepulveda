import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="features">
      <FeatureCard
        icon="🎨"
        title="DISEÑO ÚNICO"
        text="Piezas exclusivas con estética urbana y minimalista"
      />
      <FeatureCard
        icon="✔"
        title="CALIDAD PREMIUM"
        text="Materiales de alta calidad para máxima durabilidad"
      />
      <FeatureCard
        icon="⚡"
        title="ENVÍO RÁPIDO"
        text="Entrega express en 24-48 horas"
      />
    </section>
  );
};

export default Features;