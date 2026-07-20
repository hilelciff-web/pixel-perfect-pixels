import { createFileRoute } from "@tanstack/react-router";
import heroExterior from "@/assets/hero-exterior.jpg";
import clinicDerm from "@/assets/clinic-derm.jpg";
import clinicDental from "@/assets/clinic-dental.jpg";
import clinicWellness from "@/assets/clinic-wellness.jpg";
import buildingDetail from "@/assets/building-detail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const clinics = [
  {
    suite: "Suíte 101",
    name: "Dermatologia Avançada",
    description: "Especialistas em rejuvenescimento natural e saúde da pele.",
    image: clinicDerm,
  },
  {
    suite: "Suíte 104",
    name: "Odontologia Estética",
    description: "Lentes de contato e reabilitação oral de alta performance.",
    image: clinicDental,
  },
  {
    suite: "Suíte 202",
    name: "Centro de Bem-Estar",
    description: "Terapias integrativas e estética corporal avançada.",
    image: clinicWellness,
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
          <a href="#clinicas" className="hover:text-oak transition-colors">Clínicas</a>
          <a href="#localizacao" className="hover:text-oak transition-colors">Localização</a>
          <a href="#contato" className="hover:text-oak transition-colors">Contato</a>
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
              Uma galeria de saúde e estética em Rio Branco. Um ecossistema de clínicas independentes unidas pelo design, bem-estar e excelência técnica.
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
              src={heroExterior}
              alt="Fachada do Edifício Mosantt em painéis de carvalho com sombras de palmeira"
              width={1200}
              height={1500}
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
            O Edifício Mosantt foi concebido para abrigar os melhores especialistas do Acre. Um ambiente que transcende o hospitalar, oferecendo uma experiência de galeria de arte aplicada ao cuidado pessoal.
          </p>
        </div>
      </section>

      <section id="clinicas" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold mb-4 block">
                Nossos Residentes
              </span>
              <h2 className="font-serif text-4xl italic">Clínicas & Consultórios</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {clinics.map((c) => (
              <div key={c.suite} className="group">
                <div className="overflow-hidden mb-6">
                  <img
                    src={c.image}
                    alt={c.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-charcoal/40">
                  {c.suite}
                </span>
                <h3 className="font-serif text-xl mt-2">{c.name}</h3>
                <p className="text-sm text-charcoal/60 mt-2 font-light">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="localizacao" className="bg-charcoal text-sand py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div id="contato">
            <span className="text-[10px] uppercase tracking-[0.3em] text-oak font-semibold mb-6 block">
              Onde Estamos
            </span>
            <h3 className="font-serif text-3xl mb-6">
              Estrada Dias Martins, nº 1303
              <br />
              Jardim de Alah, Rio Branco — AC
            </h3>
            <p className="text-sand/50 font-light mb-12 max-w-md">
              Um ponto estratégico de fácil acesso, com estacionamento privativo e segurança.
            </p>
            <div className="flex flex-col gap-4">
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
          <div className="relative">
            <img
              src={buildingDetail}
              alt="Detalhes arquitetônicos do Edifício Mosantt"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-full min-h-[300px] object-cover"
            />
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
