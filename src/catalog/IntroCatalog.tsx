import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { FileTextIcon } from "@phosphor-icons/react/dist/csr/FileText";
import { LightbulbIcon } from "@phosphor-icons/react/dist/csr/Lightbulb";
import { Callout } from "../components/Callout";
import { Workflow, type WorkflowStep } from "../components/Workflow";

const workflow: WorkflowStep[] = [
  {
    id: "sources",
    icon: "folder-open",
    title: "Kontrollera källorna",
    label: "sources/",
    description:
      "Börja i det synkade produkt- och workshopunderlaget, den visuella guiden och godkända Figma-referenser. Källorna är skrivskyddat referensmaterial och ska inte ändras i projektet.",
    note: "Kan beslutet härledas till produktunderlag, visuell guide, tokens eller godkänd Figma?",
  },
  {
    id: "product",
    icon: "file-text",
    title: "Förstå produkten",
    label: "productHome.md",
    description:
      "Läs produktens syfte, målgrupper, innehållsbehov och avgränsningar innan en sida eller funktion ändras. Dokumentet avgör vilket problem designen ska lösa.",
    note: "Om produktbeslut saknas ska frågan förankras, inte fyllas med ett generiskt antagande.",
  },
  {
    id: "design",
    icon: "palette",
    title: "Följ designreglerna",
    label: "DESIGN.md",
    description:
      "Använd principer, tokens, grid, bildspråk, rörelse och komponentkontrakt som beslutsstöd. DESIGN.md-regler under Foundations visualiserar ett urval av de viktigaste reglerna.",
    note: "Saknas en foundation eller style ska den efterfrågas i stället för att hittas på.",
  },
  {
    id: "implementation",
    icon: "code",
    title: "Ändra systemet",
    label: "src/",
    description:
      "Bygg med semantiska tokens, befintliga komponenter och den gemensamma sidgriden. Innehållsfiler beskriver data; komponenterna äger struktur, beteende och responsiv layout.",
    note: "Uppdatera alltid motsvarande Foundations-, Components-, Sections- eller Examples-vy i samma ändring.",
  },
  {
    id: "review",
    icon: "play-circle",
    title: "Granska i katalogen",
    label: "npm run dev",
    description:
      "Kontrollera Light och Dark, relevanta fönsterbredder, Grid overlay, tangentbord och innehåll med realistisk längd. Examples är systemets integrationsyta.",
    note: "Katalogen är kvalitetsgrinden – föråldrade specimen ska tas bort när implementationen ändras.",
  },
];

const fileGuides = [
  {
    file: "productHome.md",
    label: "Produktens riktning",
    answers: "Vem är webbplatsen till för, varför finns den och vad måste den förmedla?",
    example: "Använd produktdefinitionen för att bedöma prioriteringar, innehåll och nästa steg på varje sida.",
  },
  {
    file: "DESIGN.md",
    label: "Designens spelregler",
    answers: "Hur ska lösningen kännas, fungera och avgränsas?",
    example: "Regler för grid, komponenter, bildspråk, rörelse och explicit förbjudna lösningar.",
  },
  {
    file: "DEVELOPMENT.md",
    label: "Utvecklingsflödet",
    answers: "Hur installeras, startas, byggs och verifieras projektet?",
    example: "Följ projektets kommandon och kontrollpunkter innan en ändring lämnas vidare.",
  },
  {
    file: "src/content/*.md",
    label: "Sidornas innehåll",
    answers: "Vilka sektioner visas och vilket serialiserbart innehåll har de?",
    example: "Sidor refererar delade poster med stabila ID:n; layoutbeslut stannar i komponenterna.",
  },
] as const;

const reviewItems = [
  "Ändringen har stöd i produktunderlag, DESIGN.md, tokens eller en godkänd Figma-referens.",
  "Inga foundations eller styles har hittats på när instruktioner saknas.",
  "Berörd katalogvy är synkroniserad med komponenten, sektionen eller exempelsidan.",
  "Light och Dark samt Small, Medium, Large och Max är granskade där de är relevanta.",
  "Semantik, tangentbordsfokus, kontrast, alt-text och reducerad rörelse är kontrollerade.",
] as const;

export function IntroCatalog() {
  return (
    <div className="intro-catalog">
      <section className="intro-catalog__orientation">
        <div className="intro-catalog__inner page-grid">
          <div className="intro-catalog__orientation-copy">
            <p className="type-code-01">DET VIKTIGASTE FÖRST</p>
            <h2 className="type-fluid-heading-04">Börja med beslut – inte med pixlar.</h2>
            <p className="type-body-02">Jägersro-projektet binder ihop källmaterial, produktdefinition, designregler, implementation och en visuell verifieringskatalog. Filerna har olika ansvar men används i en bestämd ordning.</p>
          </div>
          <Callout className="intro-catalog__rule" icon={<LightbulbIcon weight="light" />} title="Om ett svar saknas">
            Stanna vid det öppna beslutet. Ta inte egna designbeslut om foundations eller styles; be om instruktion eller en godkänd referens innan implementationen går vidare.
          </Callout>
        </div>
      </section>

      <section aria-labelledby="workflow-title" className="intro-catalog__workflow">
        <div className="intro-catalog__inner page-grid">
          <header className="intro-catalog__section-heading">
            <p className="type-code-01">REKOMMENDERAD ORDNING</p>
            <h2 className="type-fluid-heading-05" id="workflow-title">Från källa till verifierad lösning.</h2>
            <p className="type-body-01">Ta ett steg i taget. Varje steg ger nästa steg ett tydligare och spårbart beslutsunderlag.</p>
          </header>
          <Workflow ariaLabel="Rekommenderad arbetsordning" steps={workflow} />
        </div>
      </section>

      <section aria-labelledby="files-title" className="intro-catalog__files">
        <div className="intro-catalog__inner page-grid">
          <header className="intro-catalog__section-heading">
            <p className="type-code-01">VAD FINNS VAR?</p>
            <h2 className="type-fluid-heading-05" id="files-title">Fyra filer, fyra tydliga roller.</h2>
            <p className="type-body-01">Produktfilen bestämmer behovet, designfilen beskriver reglerna, utvecklingsfilen styr arbetsflödet och innehållsfilerna fyller de godkända mönstren.</p>
          </header>
          <div className="intro-file-grid">
            {fileGuides.map((guide) => (
              <article className="intro-file-card" key={guide.file}>
                <div className="intro-file-card__header"><FileTextIcon aria-hidden="true" weight="light" /><code className="type-code-02">{guide.file}</code></div>
                <h3 className="type-fluid-heading-03">{guide.label}</h3>
                <dl>
                  <div><dt className="type-label-02">Svarar på</dt><dd className="type-body-01">{guide.answers}</dd></div>
                  <div><dt className="type-label-02">Exempel</dt><dd className="type-body-01">{guide.example}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="review-title" className="intro-catalog__review">
        <div className="intro-catalog__inner page-grid">
          <div className="intro-catalog__review-heading">
            <p className="type-code-01">INNAN ÄNDRINGEN ÄR KLAR</p>
            <h2 className="type-fluid-heading-05" id="review-title">En snabb egenkontroll.</h2>
            <p className="type-body-01">När punkterna går att bocka av är både beslutet och den visuella verifieringen möjliga att följa.</p>
          </div>
          <ul className="intro-checklist">
            {reviewItems.map((item) => <li className="type-body-01" key={item}><CheckCircleIcon aria-hidden="true" weight="light" /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}
