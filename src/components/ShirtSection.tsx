export default function ShirtSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-warm-gray-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Shirt image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-warm-gray-light to-white rounded-2xl border border-warm-gray/30 overflow-hidden flex flex-col items-center justify-center p-8">
              <svg
                className="w-24 h-24 text-teal/30 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M7 7l3-3 2 2 2-2 3 3v4l-2 1v8H9v-8L7 11V7z"
                />
              </svg>
              <p className="text-navy/50 font-medium text-center text-sm">
                Camisa Oficial
                <br />
                Mulheres Cheias de Gra&ccedil;a 2026
              </p>
              <p className="text-navy/30 text-xs mt-2">
                [Placeholder para foto da camisa]
              </p>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-sand/15 rounded-xl -z-10" />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase">
              Vista a Gra&ccedil;a
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl font-bold leading-tight">
              Camisa Oficial do{" "}
              <span className="gold-gradient-text">Evento</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-sand to-amber" />
            <p className="text-navy/70 text-base sm:text-lg leading-relaxed">
              Vista-se com a camisa oficial do Mulheres Cheias de Gra&ccedil;a
              2026 e fa&ccedil;a parte deste movimento. Detalhes sobre
              tamanhos, valores e como adquirir em breve.
            </p>
            <a
              href="#inscricao"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              Saiba Mais
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
