import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Nossa Hist&oacute;ria
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Uma hist&oacute;ria que nasceu no
            <br />
            <span className="gold-gradient-text">
              prop&oacute;sito de Deus
            </span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Viviane photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-warm-gray/30 shadow-lg">
              <Image
                src="/Fotos-Viviane/Viviane 1.JPG.jpeg"
                alt="Missionária Viviane Santos"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sand/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal/10 rounded-full -z-10" />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sand/10 border border-sand/20 rounded-full px-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-amber-dark text-xs font-semibold tracking-wider uppercase">
                2 de Abril de 2020
              </span>
            </div>

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed">
              O <strong className="text-navy">Mulheres Cheias de Gra&ccedil;a</strong>{" "}
              nasceu no dia 2 de abril de 2020, em um dos per&iacute;odos mais
              desafiadores da nossa gera&ccedil;&atilde;o:{" "}
              <strong className="text-navy">a pandemia</strong>. Quando o mundo
              parou, Deus come&ccedil;ou a mover algo novo.
            </p>

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed">
              No dia 18 de mar&ccedil;o de 2020, em meio ao isolamento e &agrave;
              incerteza, Deus usou meu esposo de forma prof&eacute;tica e profunda,
              liberando uma dire&ccedil;&atilde;o que mudaria tudo:
            </p>

            {/* Prophetic quote */}
            <blockquote className="relative border-l-4 border-amber pl-6 py-4 bg-gradient-to-r from-sand/10 to-transparent rounded-r-lg">
              <p className="font-[family-name:var(--font-heading)] text-navy text-lg sm:text-xl italic leading-relaxed">
                &ldquo;Coloque o seu rosto. Seja uma voz prof&eacute;tica. Deixe
                Deus fluir atrav&eacute;s de voc&ecirc;, e trazer consolo a tantos
                cora&ccedil;&otilde;es enlutados.&rdquo;
              </p>
            </blockquote>

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed">
              Mesmo sem experi&ecirc;ncia com redes sociais, lives e
              v&iacute;deos &mdash; o Instagram n&atilde;o tinha muitos
              seguidores &mdash; mas{" "}
              <strong className="text-navy">
                a obedi&ecirc;ncia foi maior que o medo
              </strong>
              . E assim, as lives come&ccedil;aram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
