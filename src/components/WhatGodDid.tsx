export default function WhatGodDid() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-warm-gray-light/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-3">
            O Mover de Deus
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O que Deus come&ccedil;ou a fazer
          </h2>
          <div className="section-divider" />
        </div>

        {/* Impact numbers */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-warm-gray/20 hover:shadow-md transition-shadow duration-300">
            <p className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold gold-gradient-text mb-2">
              18
            </p>
            <p className="text-navy/70 text-sm uppercase tracking-wider font-medium">
              Mulheres aceitaram Jesus
              <br />
              na primeira live
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-warm-gray/20 hover:shadow-md transition-shadow duration-300">
            <p className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold gold-gradient-text mb-2">
              30+
            </p>
            <p className="text-navy/70 text-sm uppercase tracking-wider font-medium">
              Mulheres na segunda live
              <br />
              entregaram suas vidas
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-warm-gray/20 hover:shadow-md transition-shadow duration-300">
            <p className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold gold-gradient-text mb-2">
              4&ordf;
            </p>
            <p className="text-navy/70 text-sm uppercase tracking-wider font-medium">
              Edi&ccedil;&atilde;o do evento
              <br />
              celebrando o mover de Deus
            </p>
          </div>
        </div>

        {/* Narrative content */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-navy/80 text-base sm:text-lg leading-relaxed text-center">
            Na primeira live, <strong className="text-navy">18 mulheres aceitaram Jesus</strong>.
            Na segunda, <strong className="text-navy">mais de 30 mulheres</strong>. E assim, a cada
            encontro, Deus continuava alcan&ccedil;ando vidas.
          </p>
          <p className="text-navy/80 text-base sm:text-lg leading-relaxed text-center">
            Durante o per&iacute;odo do &ldquo;fique em casa&rdquo;, mulheres de
            diversos lugares do Brasil e do mundo passaram a se conectar.{" "}
            <strong className="text-navy">
              La&ccedil;os foram criados, amizades permaneceram
            </strong>{" "}
            e at&eacute; hoje essa rede continua viva &mdash; inclusive fora do
            pa&iacute;s.
          </p>
          <p className="text-navy/80 text-base sm:text-lg leading-relaxed text-center">
            Recentemente, estive na It&aacute;lia, onde foi poss&iacute;vel
            reencontrar mulheres que participaram das lives naquele tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
