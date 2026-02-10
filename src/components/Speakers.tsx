import Image from "next/image";

const speakers = [
  {
    name: "Missionária Viviane Santos",
    role: "Idealizadora",
    description:
      "Fundadora do Mulheres Cheias de Graça, Viviane é a voz profética que Deus levantou para alcançar mulheres em todo o Brasil e no mundo.",
    image: "/Fotos-Viviane/Viviane 3.JPG.jpeg",
    highlight: true,
  },
  {
    name: "Palestrante Convidada",
    role: "Convidada",
    description:
      "Uma voz poderosa que Deus está levantando para abençoar esta edição com palavra profética.",
    image: "/Palestrantes/PalestranteX4.jpeg",
    highlight: false,
  },
  {
    name: "Palestrante Convidada",
    role: "Convidada",
    description:
      "Mais uma mulher de Deus que trará palavra profética e transformadora nesta conferência.",
    image: "/Palestrantes/PalestranteY3.jpeg",
    highlight: false,
  },
  {
    name: "Palestrante Convidada",
    role: "Convidada",
    description:
      "Uma mulher de Deus que ministrará com unção e autoridade espiritual.",
    image: "/Palestrantes/PalestranteZ.jpeg",
    highlight: false,
  },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Quem Ministra
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Palestrantes &amp;{" "}
            <span className="gold-gradient-text">Ministras</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Speakers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group text-center p-6 rounded-2xl transition-all duration-500 ${
                speaker.highlight
                  ? "bg-gradient-to-br from-navy to-navy-dark border border-navy shadow-xl"
                  : "bg-warm-gray-light/30 border border-warm-gray/30 hover:shadow-lg"
              }`}
            >
              {/* Avatar with real photo */}
              <div
                className={`relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full mb-6 overflow-hidden border-2 ${
                  speaker.highlight
                    ? "border-sand/60"
                    : "border-warm-gray/30"
                }`}
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${
                  speaker.highlight ? "text-sand" : "text-amber"
                }`}
              >
                {speaker.role}
              </p>
              <h3
                className={`font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold mb-3 ${
                  speaker.highlight ? "text-white" : "text-navy"
                }`}
              >
                {speaker.name}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  speaker.highlight ? "text-white/60" : "text-navy/60"
                }`}
              >
                {speaker.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
