export default function Location() {
  return (
    <section id="local" className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-teal-light text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Localiza&ccedil;&atilde;o
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Onde ser&aacute; o{" "}
            <span className="gold-gradient-text">encontro</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975455493!2d-46.65597882356567!3d-23.56334806178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ4LjAiUyA0NsijMzknMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do evento Mulheres Cheias de Graça"
              className="w-full h-[350px] sm:h-[400px]"
            />
          </div>

          {/* Location info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sand/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Endere&ccedil;o do Evento
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Local a ser confirmado. Fique atenta &agrave;s nossas redes
                  sociais para informa&ccedil;&otilde;es atualizadas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sand/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Data
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  <strong className="text-sand">13 de Junho de 2026</strong>
                  <br />
                  Garanta sua inscri&ccedil;&atilde;o antecipada!
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sand hover:bg-amber text-navy font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm uppercase tracking-wider w-fit"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
