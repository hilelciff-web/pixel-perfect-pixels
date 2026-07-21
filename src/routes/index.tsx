import { createFileRoute } from "@tanstack/react-router";

const heroUrl = "/assets/mosantt-hero.jpg";
const tourUrl = "/assets/mosantt-tour.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

type Sala = {
  numero: string;
  status: "Ocupada" | "Disponível";
  ocupante?: string;
  especialidade?: string;
  nota?: string;
  instagram?: string;
  site?: string;
};

const salas: Sala[] = [
  {
    numero: "01",
    status: "Ocupada",
    ocupante: "Dr. Alisson Mota Rabelo",
    especialidade: "Ortodontia · Invisalign®",
    nota: "Especialista em Ortodontia, N°1 em alinhadores Invisalign® no Acre. Implantes e lentes de porcelana.",
    instagram: "https://instagram.com/dralisonmota",
    site: "https://dr-alison-prototipo.web.app/#inicio",
  },
  {
    numero: "02",
    status: "Disponível",
    nota: "Sala pronta para profissional de saúde ou estética.",
  },
  {
    numero: "03",
    status: "Disponível",
    nota: "Ideal para consultório clínico ou terapias.",
  },
  {
    numero: "04",
    status: "Disponível",
    nota: "Ambiente iluminado, configuração flexível.",
  },
  {
    numero: "05",
    status: "Disponível",
    nota: "Espaço reservado para nova clínica ou estúdio.",
  },
];

function Index() {
  return (
    <div className="bg-sand text-charcoal selection:bg-oak/30">
      <nav className="flex justify-between items-center px-6 md:px-8 py-6 border-b border-charcoal/5">
        <a href="#top" className="text-2xl font-serif tracking-tight">
          <span className="font-medium">M</span>osantt
        </a>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-light">
          <a href="#espaco" className="hover:text-oak transition-colors">O Espaço</a>
          <a href="#tour" className="hover:text-oak transition-colors">Tour</a>
          <a href="#salas" className="hover:text-oak transition-colors">Salas</a>
          <a href="#localizacao" className="hover:text-oak transition-colors">Localização</a>
        </div>
      </nav>

      <section id="top" className="relative px-6 md:px-8 pt-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-8">
              Saúde em sua <br />
              <span className="italic">melhor forma.</span>
            </h1>
            <p className="text-lg font-light leading-relaxed max-w-md text-charcoal/80">
              Uma galeria de saúde e estética em Rio Branco. Um ecossistema de
              clínicas independentes unidas pelo design, bem-estar e excelência técnica.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/"
                className="px-8 py-4 bg-charcoal text-sand text-xs uppercase tracking-widest hover:bg-oak transition-colors"
              >
                Agendar Visita
              </a>
              <a
                href="https://instagram.com/mosantt"
                className="px-8 py-4 border border-charcoal/20 text-xs uppercase tracking-widest hover:border-charcoal transition-colors"
              >
                @mosantt
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <img
              src={heroUrl}
              alt="Letreiro Mosantt em painel de madeira clara com palmeiras à frente"
              width={1280}
              height={1600}
              className="w-full aspect-[4/5] object-cover shadow-2xl shadow-charcoal/10"
            />
          </div>
        </div>
      </section>

      <section id="espaco" className="bg-leaf text-sand py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-12 h-12 border border-sand/30 mx-auto mb-8 grid place-items-center">
            <span className="text-xs font-serif italic">tt</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Um novo conceito em Rio Branco
          </h2>
          <p className="text-lg font-light leading-relaxed opacity-80 max-w-2xl mx-auto">
            O Edifício Mosantt foi concebido para abrigar os melhores especialistas
            do Acre. Um ambiente que transcende o hospitalar, oferecendo uma
            experiência de galeria de arte aplicada ao cuidado pessoal.
          </p>
        </div>
      </section>

      <section id="tour" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold mb-4 block">
              Conheça a Galeria
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">
              Uma visita <span className="italic">guiada</span> ao espaço.
            </h2>
            <p className="text-base font-light leading-relaxed text-charcoal/70 max-w-md">
              Percorra o edifício e entenda como a Mosantt funciona: salas
              independentes, áreas comuns compartilhadas, recepção, estacionamento
              privativo e uma atmosfera pensada para acolher pacientes e profissionais.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm font-light text-charcoal/70">
              <span>· 5 salas privativas</span>
              <span>· Recepção e áreas de convivência</span>
              <span>· Estacionamento e segurança</span>
              <span>· Localização estratégica no Jardim de Alah</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <video
              src={tourUrl}
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
              Salas prontas para profissionais de saúde e estética. Consulte
              disponibilidade e condições de locação.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {salas.map((sala) => {
              const ocupada = sala.status === "Ocupada";
              return (
                <li
                  key={sala.numero}
                  className="bg-sand p-8 flex flex-col justify-between min-h-[240px]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-5xl leading-none">{sala.numero}</span>
                    <span
                      className={
                        "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium " +
                        (ocupada ? "text-charcoal/60" : "text-leaf")
                      }
                    >
                      <span
                        className={
                          "size-1.5 rounded-full " +
                          (ocupada ? "bg-charcoal/40" : "bg-leaf")
                        }
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
                        <h3 className="font-serif text-2xl leading-tight">
                          {sala.ocupante}
                        </h3>
                      </>
                    ) : (
                      <h3 className="font-serif text-2xl italic leading-tight">
                        Sala disponível
                      </h3>
                    )}
                    <p className="text-sm text-charcoal/60 mt-2 font-light">
                      {sala.nota}
                    </p>
                    {ocupada && (sala.instagram || sala.site) && (
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
                  href="https://wa.me/"
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
            Estrada Dias Martins, nº 1303
            <br />
            Jardim de Alah, Rio Branco — AC
          </h3>
          <p className="text-sand/50 font-light mb-12 max-w-md">
            Um ponto estratégico de fácil acesso, com estacionamento privativo e segurança.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Estrada+Dias+Martins+1303+Jardim+de+Alah+Rio+Branco"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-oak transition-colors underline underline-offset-8 decoration-oak/30 w-fit"
            >
              Ver no Google Maps
            </a>
            <a
              href="https://instagram.com/mosantt"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-oak transition-colors underline underline-offset-8 decoration-oak/30 w-fit"
            >
              Instagram @mosantt
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-oak transition-colors underline underline-offset-8 decoration-oak/30 w-fit"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-sand/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif tracking-tight">
            <span className="font-medium">M</span>osantt
          </div>
          <p className="text-[10px] uppercase tracking-widest text-sand/30">
            © {new Date().getFullYear()} Mosantt — Saúde e Estética.
          </p>
        </div>
      </footer>
    </div>
  );
}