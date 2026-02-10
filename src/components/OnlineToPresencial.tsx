export default function OnlineToPresencial() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase">
              Do Online ao Presencial
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl font-bold leading-tight">
              Quando Deus confirma,
              <br />
              <span className="gold-gradient-text">
                &eacute; tempo de avan&ccedil;ar
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-sand to-amber" />

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed">
              Em um momento de ora&ccedil;&atilde;o, surgiu no cora&ccedil;&atilde;o:{" "}
              <em className="text-navy font-medium">
                &ldquo;Vou orar pelo Mulheres Cheias de Gra&ccedil;a.&rdquo;
              </em>
            </p>

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed">
              Ao chegar ao vale, algo inesperado aconteceu:{" "}
              <strong className="text-navy">
                aproximadamente 100 mulheres estavam ali, reunidas
                espontaneamente
              </strong>
              . Aquela experi&ecirc;ncia confirmou o que Deus j&aacute; estava
              fazendo &mdash; era tempo de avan&ccedil;ar.
            </p>

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed">
              Nascia ali o chamado para{" "}
              <strong className="text-navy">
                encontros presenciais, confer&ecirc;ncias e momentos intencionais
                na presen&ccedil;a de Deus
              </strong>
              .
            </p>

            {/* Highlight box */}
            <div className="bg-gradient-to-r from-navy/5 to-teal/5 border border-teal/20 rounded-xl p-6 mt-4">
              <p className="font-[family-name:var(--font-heading)] text-navy text-lg sm:text-xl font-semibold mb-2">
                Uma obra que continua crescendo
              </p>
              <p className="text-navy/70 text-sm sm:text-base leading-relaxed">
                Hoje, com alegria e gratid&atilde;o, vivemos a{" "}
                <strong className="text-navy">
                  quarta edi&ccedil;&atilde;o do Mulheres Cheias de Gra&ccedil;a
                </strong>
                , celebrando tudo o que Deus fez e continua fazendo. Desde aquela
                quinta-feira, 2 de abril de 2020, seguimos firmes em
                prop&oacute;sitos, encontros e movimentos, vendo Deus operar de
                forma tremenda e sobrenatural.
              </p>
            </div>
          </div>

          {/* Image / visual placeholder */}
          <div className="order-1 lg:order-2 relative">
            {/* Big number decoration */}
            <div className="absolute -top-8 -right-4 font-[family-name:var(--font-heading)] text-[120px] sm:text-[160px] font-bold text-sand/10 leading-none select-none">
              100
            </div>
            <div className="relative bg-gradient-to-br from-teal/10 to-navy/5 rounded-2xl p-8 sm:p-12 border border-warm-gray/20">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-sand/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-amber"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-navy text-4xl sm:text-5xl font-bold">
                  ~100
                </p>
                <p className="text-navy/60 text-base sm:text-lg">
                  mulheres reunidas
                  <br />
                  espontaneamente no vale
                </p>
                <div className="w-12 h-0.5 bg-sand mx-auto" />
                <p className="text-navy/50 text-sm italic">
                  O momento em que Deus confirmou
                  <br />o chamado presencial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
