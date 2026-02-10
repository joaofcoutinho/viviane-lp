import Image from "next/image";

const speakers = [
  {
    name: "Naara e Sarah",
    role: "Ministração & Louvor",
    description:
      "Irmãs gêmeas com uma carreira musical que começou aos 13 anos gravando covers no YouTube. Destacaram-se no programa Raul Gil e, desde então, têm se apresentado em todo o Brasil, ministrando em eventos religiosos e culturais. Suas canções trazem consolo e esperança, refletindo a fé e a dependência em Jesus Cristo.",
    image: "/Palestrantes/Naara e Sarah.jpeg",
    highlight: true,
  },
  {
    name: "Sarah Farias",
    role: "Cantora Gospel",
    description:
      "Cantora gospel brasileira que se destaca por suas músicas inspiradoras e mensagens de fé. Iniciou sua carreira em 1998 e rapidamente se tornou referência no segmento. Canções como \"Sobrevivi\" e \"O Céu Está Me Sustentando\" alcançaram milhões de visualizações. Também se dedica a projetos sociais, levando amor e esperança para além dos palcos.",
    image: "/Palestrantes/PalestranteX4.jpeg",
    highlight: false,
  },
  {
    name: "Raylla Ohana",
    role: "Palestrante",
    description:
      "Figura proeminente no cenário espiritual, conhecida por seu testemunho de vida e pela maneira como a fé a ajudou a superar uma grave enfermidade. Sua história, que começou aos 16 anos, é um testemunho de propósito e confiança em Deus, inspirando outros a encontrarem força e significado em sua jornada espiritual.",
    image: "/Palestrantes/PalestranteY3.jpeg",
    highlight: false,
  },
  {
    name: "Azi Soares",
    role: "Palestrante",
    description:
      "Figura proeminente na comunidade cristã, conhecida por suas orações e ensinamentos. Suas palavras são vistas como bênção e inspiração para muitos. Azi traz um fogo de motivação e encorajamento, destacando-se em sua capacidade de transformar a vida de seus seguidores.",
    image: "/Palestrantes/PalestranteZ.jpeg",
    highlight: false,
  },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group text-center p-6 sm:p-8 rounded-2xl transition-all duration-500 ${
                speaker.highlight
                  ? "bg-gradient-to-br from-navy to-navy-dark border border-navy shadow-xl"
                  : "bg-warm-gray-light/30 border border-warm-gray/30 hover:shadow-lg"
              }`}
            >
              {/* Avatar */}
              <div
                className={`relative w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full mb-6 overflow-hidden border-2 ${
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
                  sizes="160px"
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
