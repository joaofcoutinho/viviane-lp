export default function Registration() {
  return (
    <section id="inscricao" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section header */}
        <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-3">
          Um Convite Para Voc&ecirc;
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Voc&ecirc; &eacute; nossa{" "}
          <span className="gold-gradient-text">convidada</span>
        </h2>
        <div className="section-divider mb-8" />

        <p className="text-navy/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
          Voc&ecirc; &eacute; nossa convidada para viver este tempo conosco.
          Ser&aacute; um{" "}
          <strong className="text-navy">
            encontro prof&eacute;tico, aben&ccedil;oador, marcado por cura,
            milagres, renovo e transforma&ccedil;&atilde;o
          </strong>
          .
        </p>

        <p className="text-navy/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
          Venha fazer parte do que Deus est&aacute; construindo. O{" "}
          <strong className="text-navy">
            Mulheres Cheias de Gra&ccedil;a &eacute; um evento que nasceu de um
            chamado
          </strong>
          .
        </p>

        {/* CTA card */}
        <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-sand/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Garanta sua vaga
            </h3>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-8">
              As vagas s&atilde;o limitadas. Fa&ccedil;a sua inscri&ccedil;&atilde;o
              e viva um encontro &uacute;nico na presen&ccedil;a de Deus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="btn-shimmer text-white font-semibold px-10 py-4 rounded-full text-base sm:text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
              >
                Inscreva-se Agora
              </a>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Mulheres%20Cheias%20de%20Gra%C3%A7a%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-10 py-4 rounded-full text-base sm:text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
