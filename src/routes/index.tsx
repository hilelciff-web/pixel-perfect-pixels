import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoAsset from "@/assets/mosantt-logo.png.asset.json";
import { getSiteContent, type Sala, type SiteSettings } from "@/lib/site.functions";

const fallback: Omit<SiteSettings, "id" | "updated_at"> = {
  hero_eyebrow: "Galeria de Saúde · Rio Branco — AC",
  hero_title_line1: "Saúde em sua",
  hero_title_line2: "melhor forma.",
  hero_subtitle:
    "Um ecossistema de clínicas independentes unidas pelo design, bem-estar e excelência técnica.",
  hero_image_url: "/assets/mosantt-hero.jpg",
  about_title: "Um novo conceito em Rio Branco",
  about_text:
    "O Edifício Mosantt foi concebido para abrigar os melhores especialistas do Acre. Um ambiente que transcende o hospitalar, oferecendo uma experiência de galeria de arte aplicada ao cuidado pessoal.",
  tour_title: "Uma visita guiada ao espaço.",
  tour_text:
    "Percorra o edifício e entenda como a Mosantt funciona: salas independentes, áreas comuns compartilhadas, recepção, estacionamento privativo e uma atmosfera pensada para acolher pacientes e profissionais.",
  tour_video_url: "/assets/mosantt-tour.mp4",
  whatsapp_url: "https://wa.me/",
  instagram_url: "https://instagram.com/mosantt",
  address_line1: "Estrada Dias Martins, nº 1303",
  address_line2: "Jardim de Alah, Rio Branco — AC",
  maps_url:
    "https://www.google.com/maps/search/?api=1&query=Estrada+Dias+Martins+1303+Jardim+de+Alah+Rio+Branco",
};

export const Route = createFileRoute("/")({
  loader: () => getSiteContent(),
  component: Index,
  errorComponent: () => (
    <div className="min-h-screen grid place-items-center bg-sand text-charcoal px-6 text-center">
      <p className="font-serif text-2xl">Não foi possível carregar o conteúdo. Recarregue a página.</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-sand text-charcoal">
      <p className="font-serif text-2xl">Página não encontrada</p>
    </div>
  ),
});

function Index() {
  const data = Route.useLoaderData();
  const s = { ...fallback, ...(data.settings ?? {}) };
  const salas: Sala[] = data.salas;

  return (
    <div className="bg-sand text-charcoal selection:bg-oak/30">
      <section id="top" className="relative min-h-screen w-full overflow-hidden text-sand">
        <motion.img
          src={s.hero_image_url}
          alt="Letreiro Mosantt em painel de madeira clara com palmeiras à frente"
          className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
          initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.12 }}
          animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
          transition={{
            clipPath: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 2.4, ease: [0.22, 1, 0.36, 1] },
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/70"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent"
        />

        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex justify-between items-center px-6 md:px-10 py-6"
        >
          <a href="#top" className="block">
            <img
              src={logoAsset.url}
              alt="Mosantt"
              className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.25em] font-light text-sand/90">
            <a href="#espaco" className="hover:text-oak transition-colors">O Espaço</a>
            <a href="#tour" className="hover:text-oak transition-colors">Tour</a>
            <a href="#salas" className="hover:text-oak transition-colors">Salas</a>
            <a href="#localizacao" className="hover:text-oak transition-colors">Localização</a>
          </div>
        </motion.nav>

        <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-20 pt-24 md:pt-40 min-h-[calc(100vh-96px)] flex flex-col justify-end">
          <motion.div
            className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 items-end"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.9 } },
            }}
          >
            <motion.div
              className="col-span-12 lg:col-span-8"
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <motion.span
                variants={{
                  hidden: { y: 12, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
                }}
                className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-sand/70 mb-6 block"
              >
                {s.hero_eyebrow}
              </motion.span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-sand drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                {s.hero_title_line1} <br />
                <span className="italic">{s.hero_title_line2}</span>
              </h1>
            </motion.div>
            <motion.div
              className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-sand/25"
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <p className="text-base md:text-lg font-light leading-relaxed text-sand/85 max-w-sm">
                {s.hero_subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={s.whatsapp_url}
                  className="px-7 py-3.5 bg-sand text-charcoal text-[11px] uppercase tracking-[0.25em] hover:bg-oak hover:text-sand transition-colors"
                >
                  Agendar Visita
                </a>
                <a
                  href={s.instagram_url}
                  className="px-7 py-3.5 border border-sand/40 text-sand text-[11px] uppercase tracking-[0.25em] hover:border-sand hover:bg-sand/10 transition-colors"
                >
                  @mosantt
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-sand/60"
          >
            <span className="text-[10px] uppercase tracking-[0.35em]">Role</span>
            <span className="w-px h-10 bg-sand/40 animate-scroll-hint origin-top" />
          </motion.div>
        </div>
      </section>

      <section id="espaco" className="bg-leaf text-sand py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-12 h-12 border border-sand/30 mx-auto mb-8 grid place-items-center">
            <span className="text-xs font-serif italic">tt</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">{s.about_title}</h2>
          <p className="text-lg font-light leading-relaxed opacity-80 max-w-2xl mx-auto">
            {s.about_text}
          </p>
        </div>
      </section>

      <section id="tour" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold mb-4 block">
              Conheça a Galeria
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">{s.tour_title}</h2>
            <p className="text-base font-light leading-relaxed text-charcoal/70 max-w-md">
              {s.tour_text}
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm font-light text-charcoal/70">
              <span>· {salas.length || 5} salas privativas</span>
              <span>· Recepção e áreas de convivência</span>
              <span>· Estacionamento e segurança</span>
              <span>· Localização estratégica no Jardim de Alah</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <video
              src={s.tour_video_url}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-[9/16] md:aspect-[4/5] object-cover bg-charcoal/5 shadow-2xl shadow-charcoal/10"
            >
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      </section>

      <section id="salas" className="py-24 px-6 md:px-8 bg-oak/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold mb-4 block">
                Disponibilidade
              </span>
              <h2 className="font-serif text-4xl md:text-5xl">
                Cinco salas, <span className="italic">um só endereço.</span>
              </h2>
            </div>
            <p className="text-sm font-light text-charcoal/60 max-w-xs">
              Salas prontas para profissionais de saúde e estética. Consulte disponibilidade e
              condições de locação.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {salas.map((sala) => {
              const ocupada = sala.status === "Ocupada";
              return (
                <li key={sala.id} className="bg-sand p-8 flex flex-col justify-between min-h-[240px]">
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-5xl leading-none">{sala.numero}</span>
                    <span
                      className={
                        "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium " +
                        (ocupada ? "text-charcoal/60" : "text-leaf")
                      }
                    >
                      <span
                        className={"size-1.5 rounded-full " + (ocupada ? "bg-charcoal/40" : "bg-leaf")}
                      />
                      {sala.status}
                    </span>
                  </div>
                  <div className="mt-8">
                    {ocupada ? (
                      <>
                        <p className="text-[10px] uppercase tracking-widest text-oak font-semibold mb-2">
                          {sala.especialidade}
                        </p>
                        <h3 className="font-serif text-2xl leading-tight">{sala.ocupante}</h3>
                      </>
                    ) : (
                      <h3 className="font-serif text-2xl italic leading-tight">Sala disponível</h3>
                    )}
                    <p className="text-sm text-charcoal/60 mt-2 font-light">{sala.nota}</p>
                    {ocupada && (sala.instagram || sala.site || sala.whatsapp) && (
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em]">
                        {sala.instagram && (
                          <a
                            href={sala.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="text-charcoal/70 hover:text-oak transition-colors underline underline-offset-4 decoration-oak/40"
                          >
                            Instagram
                          </a>
                        )}
                        {sala.site && (
                          <a
                            href={sala.site}
                            target="_blank"
                            rel="noreferrer"
                            className="text-charcoal/70 hover:text-oak transition-colors underline underline-offset-4 decoration-oak/40"
                          >
                            Site
                          </a>
                        )}
                        {sala.whatsapp && (
                          <a
                            href={sala.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="text-charcoal/70 hover:text-oak transition-colors underline underline-offset-4 decoration-oak/40"
                          >
                            WhatsApp
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
            <li className="bg-charcoal text-sand p-8 flex flex-col justify-between min-h-[240px]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold">
                Interessado?
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-tight mb-4">
                  Fale sobre a locação de uma sala.
                </h3>
                <a
                  href={s.whatsapp_url}
                  className="text-xs uppercase tracking-widest underline underline-offset-8 decoration-oak/50 hover:text-oak transition-colors"
                >
                  Falar no WhatsApp →
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <footer id="localizacao" className="bg-charcoal text-sand py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold mb-6 block">
            Onde Estamos
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mb-6 max-w-2xl">
            {s.address_line1}
            <br />
            {s.address_line2}
          </h3>
          <p className="text-sand/50 font-light mb-12 max-w-md">
            Um ponto estratégico de fácil acesso, com estacionamento privativo e segurança.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a
              href={s.maps_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-oak transition-colors underline underline-offset-8 decoration-oak/30 w-fit"
            >
              Ver no Google Maps
            </a>
            <a
              href={s.instagram_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-oak transition-colors underline underline-offset-8 decoration-oak/30 w-fit"
            >
              Instagram @mosantt
            </a>
            <a
              href={s.whatsapp_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-oak transition-colors underline underline-offset-8 decoration-oak/30 w-fit"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-sand/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#top" className="block">
            <img
              src={logoAsset.url}
              alt="Mosantt"
              className="h-8 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <p className="text-[10px] uppercase tracking-widest text-sand/30">
            © {new Date().getFullYear()} Mosantt — Saúde e Estética.
          </p>
        </div>
      </footer>
    </div>
  );
}
