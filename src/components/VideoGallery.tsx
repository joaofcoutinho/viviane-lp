import Image from "next/image";

const videos = [
  {
    url: "https://www.instagram.com/reel/C7CYI-yLoYh/",
    title: "Testemunho — Cheias de Graça",
    cover: "/CAPA-VIDEOS/CAPA-VIDEO1.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/C7h0p0sP5A2/",
    title: "Como Surgiu o Cheias de Graça?",
    cover: "/CAPA-VIDEOS/CAPA-VIDEO2.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/C744ajIvB_-/",
    title: "Testemunho — Cheias de Graça",
    cover: "/CAPA-VIDEOS/CAPA-VIDEO3.jpeg",
  },
];

export default function VideoGallery() {
  return (
    <section
      id="galeria"
      className="py-20 sm:py-28 bg-gradient-to-b from-warm-gray-light/50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Galeria
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Reviva os{" "}
            <span className="gold-gradient-text">momentos marcantes</span>
          </h2>
          <div className="section-divider" />
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Assista aos melhores momentos das edi&ccedil;&otilde;es anteriores do
            Mulheres Cheias de Gra&ccedil;a.
          </p>
        </div>

        {/* Video cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-warm-gray/20 shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Cover image */}
                <Image
                  src={video.cover}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/15 transition-colors duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium mt-4 px-4 text-center drop-shadow-lg">
                    {video.title}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      className="w-4 h-4 text-white/70"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                    </svg>
                    <span className="text-white/70 text-xs">Instagram Reel</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
