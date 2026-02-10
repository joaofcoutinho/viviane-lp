export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
      <div className="absolute inset-0 pattern-overlay" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sand/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Overline */}
        <p className="text-teal-light text-sm sm:text-base font-medium tracking-[0.3em] uppercase mb-6 animate-fade-in">
          4&ordf; Edi&ccedil;&atilde;o &bull; 13 de Junho de 2026
        </p>

        {/* Main Title */}
        <h1 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
          Mulheres Cheias
          <br />
          <span className="gold-gradient-text">de Gra&ccedil;a</span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8 animate-fade-in">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-sand" />
          <svg
            className="w-5 h-5 text-sand"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-sand" />
        </div>

        {/* Subtitle */}
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in-up font-[family-name:var(--font-heading)] italic">
          &ldquo;Um encontro prof&eacute;tico, aben&ccedil;oador, marcado por
          cura, milagres, renovo e transforma&ccedil;&atilde;o.&rdquo;
        </p>

        <p className="text-teal-light/80 text-sm sm:text-base mb-10 animate-fade-in">
          Idealiza&ccedil;&atilde;o: Mission&aacute;ria Viviane Santos
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#inscricao"
            className="btn-shimmer text-white font-semibold px-10 py-4 rounded-full text-base sm:text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Inscreva-se Agora
          </a>
          <a
            href="#sobre"
            className="border-2 border-white/30 text-white hover:border-sand hover:text-sand font-medium px-10 py-4 rounded-full text-base sm:text-lg uppercase tracking-wider transition-all duration-300"
          >
            Conhe&ccedil;a a Hist&oacute;ria
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 text-white/40 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
