# Produktdefinition: Jägersro webb

> **Status:** Arbetsversion 0.4 — uppdaterad med gemensamt gridfundament  
> **Datum:** 2026-08-15  
> **Horisont:** Första lansering och fortsatt utveckling över platsens transformation  
> **Underlag:** *Discovery / Behovsanalys Jägersro*, FigJam-boarden *Behovsanalys Jägersro Webb* och *Jägersro pitchpresentation*  
> **Workshopboard:** [Behovsanalys Jägersro Webb](https://www.figma.com/board/wwHb4ykY8PjHBFz2joyrvX/Behovsanlys-J%C3%A4gersro-Webb?node-id=0-1)  
> **Syfte med dokumentet:** Skapa en gemensam produktbild inför innehållsarbete, design, tekniska vägval och utveckling.

## Dokumenthierarki och underhåll

Projektets styrande dokument kompletterar varandra och ska läsas tillsammans:

| Dokument | Ansvar och användning |
|---|---|
| [`README.md`](README.md) | Kollegornas ingång till projektet: installation, arkitektur, filkarta, CMS-flöde och vanliga arbetsmoment. |
| [`productHome.md`](productHome.md) | Produktens övergripande källa för vision, målgrupper, innehåll, prioriteringar och produktbeslut. |
| [`DESIGN.md`](DESIGN.md) | Visuell och interaktiv källa för identitet, färg, typografi, layout, komponentprinciper, bildspråk, ikoner, rörelse och tillgänglighet. |
| [`DEVELOPMENT.md`](DEVELOPMENT.md) | Teknisk arbetsmodell för planering, kodkvalitet, återanvändbarhet, verifiering och förändringsdisciplin. |
| [`design-tokens/figma-export.json`](design-tokens/figma-export.json) | Rå export från Figma. Den får innehålla äldre tokens; aktiva undantag och normaliseringar definieras i `DESIGN.md` och implementationen. |
| [`design-tokens/layout.json`](design-tokens/layout.json) | Kuraterad källa för sidgridens breakpointgränser, kolumnantal, marginaler, gutters och maxbredd från Figma. |
| [`AGENTS.md`](AGENTS.md) | Lokala regler för arbetsytan, inklusive att synkat material under `sources/` är skrivskyddat referensmaterial. |

Vid konflikt gäller produktbeslut i `productHome.md`, designbeslut i `DESIGN.md` och genomföranderegler i `DEVELOPMENT.md` inom respektive ansvarsområde. En konflikt mellan dokument ska synliggöras och lösas uttryckligen; den får inte avgöras genom ett tyst antagande.

När ett nytt styrande, vägledande eller arkitekturbärande dokument införs ska denna dokumentkarta uppdateras i samma ändring. Dokument som ersätts ska markeras som inaktuella eller tas bort ur kartan så att AI-verktyg och människor alltid hittar den aktuella källan.

## 1. Produkten i korthet

Jägersro webb är det permanenta digitala navet för Jägersros långsiktiga förvandling från travbana, handel och stora asfaltsytor till en grön, tät och sammanlänkad stadsdel planerad ur barnens perspektiv.

Webben ska inte låtsas att den framtida stadsdelen redan finns. Den ska göra resan begriplig, relevant och möjlig att följa. Genom nyheter, berättelser, tidslinje, bygg- och störningsinformation, aktiviteter och på sikt dialog och interaktiva verktyg ska besökaren kunna förstå platsens historia, se vad som händer nu och få en trovärdig bild av vart Jägersro är på väg.

I den första fasen är produkten främst en **informationsplats och berättelseplattform** organiserad kring fem pelare: **Aktuellt, Platsen, Resan, Framtiden och Delta**. Med tiden ska den kunna utvecklas med byggstatus, event, dialog, interaktiva upplevelser och säljstöd.

## 2. Produktvision

**Jägersro webb ska vara den mest trovärdiga och levande vägen in i nästa generations Jägersro — från platsens historia, genom förvandlingen, till livet i den nya stadsdelen.**

Webben ska göra det möjligt att:

- förstå den stora idén och varför platsen förändras,
- följa utvecklingen utan att behöva känna till projektets organisation eller fackspråk,
- se hur förändringen påverkar närområdet här och nu,
- upptäcka aktiviteter och uppleva platsen redan innan den är färdigbyggd,
- ta del av människors minnen, perspektiv och förhoppningar,
- bygga en relation till Jägersro långt före säljstart och inflyttning.

## 3. Bakgrund och produktmöjlighet

Jägersro befinner sig mellan två verkligheter:

- **Dagens plats:** hästar, bilar, handel, spel, parkering, hårda ytor och en stark historia.
- **Morgondagens plats:** grön blandstad, rörelse, möten, vardagsliv, urbana byar, gemenskap och barns fria rörlighet.

Det nuvarande kommunikativa glappet är att framtidsbilden riskerar att framstå som färdig och polerad, medan platsen och människors faktiska upplevelse fortfarande är en annan. Produktens möjlighet ligger därför i själva transformationen.

Förvandlingen är inte transportsträckan till produkten — **förvandlingen är produkten här och nu**.

Det ger webben en tydlig roll: att dokumentera, förklara och bjuda in, snarare än att enbart marknadsföra ett framtida resultat.

## 4. Produktlöfte

**Här kan du se vad Jägersro har varit, vad som händer nu och hur nästa generation av platsen växer fram.**

Löftet ska märkas genom att webben alltid:

1. skiljer tydligt på nuläge, beslutade planer, ambitioner och idéer,
2. visar förändringen över tid,
3. kopplar visionen till konkreta händelser, människor och bevis,
4. gör påverkan på närboende enkel att hitta,
5. erbjuder ett tydligt nästa steg: läs vidare, besök platsen, delta eller följ utvecklingen.

## 5. Produktprinciper

### 5.1 Berätta resan, inte bara slutbilden

Vi visar kontrasten mellan då, nu och sedan. Det som är ofärdigt, svårt eller ännu inte beslutat ska beskrivas ärligt.

### 5.2 Platsen är huvudpersonen

Den fysiska platsen, dess historia, ljud, människor och förändringar ska dominera framför generiska visionsbilder och reklamformuleringar.

### 5.3 Barnens perspektiv är ett planeringsperspektiv

Barn ska synas som deltagare och framtida användare av stadsdelen. Uttrycket får gärna vara nyfiket och lekfullt, men inte barnsligt. Innehållet ska också vara relevant för vuxna, beslutsfattare och bransch.

### 5.4 Från påstående till upplevelse och bevis

Påståenden om hållbarhet, trygghet, gemenskap och livskvalitet ska följas av exempel, data, beslut, aktiviteter eller röster som gör dem trovärdiga.

### 5.5 Ett nav, många berättelser

Webben håller ihop helheten men ska kunna släppa fram många mikroberättelser: historiska minnen, intervjuer, expertröster, bygguppdateringar, evenemang och lokala initiativ.

### 5.6 Bygg för lång livslängd

Produkten ska kunna ändra fokus från tidig platsutveckling till byggstart, försäljning och inflyttning utan att behöva byggas om från grunden.

### 5.7 Tillgänglig för alla

Webben ska vara begriplig, snabb och användbar oavsett skärm, funktionsförmåga eller vana vid stadsutvecklingsprojekt. Målet är WCAG 2.2 nivå AA.

## 6. Produktens fem pelare

Workshopresultatet definierar fem pelare som ska hålla ihop produktens navigation, startsida och innehåll. Varje pelare svarar på en tydlig besökarfråga.

| Pelare | Produktroll | Svarar på |
|---|---|---|
| **Aktuellt** | Ett levande, redaktionellt flöde med innehåll från platsen. Visar att transformationen pågår på riktigt. | Vad händer just nu? |
| **Platsen** | En upplevelse av nuläget genom berättelser, bilder, ljud, områden och på sikt karta. | Hur känns det här? |
| **Resan** | Tidslinje och dokumentation från då, genom nu, mot sedan. Gör förändringen och den långa tidshorisonten begriplig. | Hur blev det så här? |
| **Framtiden** | En verklighetsförankrad vision, vad som planeras och på sikt Jägersromodellen. | Vart är vi på väg? |
| **Delta** | Vägar till aktiviteter, dialog och kontakt. Börjar enkelt och utvecklas när organisationen kan ta emot deltagande. | Hur kan jag vara med? |

Pelarna motsvarar fem kommunikativa funktioner:

- dokumentären blir **Aktuellt**,
- utställningen blir **Platsen**,
- trovärdigheten byggs genom **Resan**,
- information och riktning samlas i **Framtiden**,
- community-dimensionen får sin ingång genom **Delta**.

**Om oss** och **Press** är viktiga garantifunktioner, men inte egna huvudpelare. De ska skapa transparens, visa vilka som står bakom projektet och ge tillgång till verifierbart material.

## 7. Målgrupper och deras viktigaste behov

### 7.1 Närboende och befintliga verksamheter — primär i första fasen

**Behov:** Minska osäkerhet och förstå konkret påverkan.

De ska snabbt kunna få svar på:

- Vad händer, var och när?
- Hur påverkas trafik, buller, tillgänglighet och verksamheter?
- Vad är beslutat och vad kan fortfarande förändras?
- Vem kontaktar jag med frågor?
- Vad får närområdet tillbaka under och efter utvecklingen?

### 7.2 Malmöbor och besökare — primär i första fasen

**Behov:** Upptäcka varför platsen är relevant redan nu.

De ska kunna:

- hitta event och tillfälliga aktiviteter,
- förstå platsens historia och betydelse för Malmö,
- upptäcka hur de kan besöka eller delta,
- följa förvandlingen på ett lättillgängligt sätt.

### 7.3 Malmö stad, politiker och andra beslutsfattare

**Behov:** Kunna förstå, bedöma och förklara projektet vidare.

De ska hitta:

- projektets mål, ansvar och tidshorisont,
- hur ambitioner följs upp,
- fakta, planer och milstolpar,
- hur Jägersromodellen omsätts i praktiken,
- material som går att hänvisa till och dela.

### 7.4 Partners, fastighetsbransch, verksamheter och möjliga aktörer

**Behov:** Bedöma projektets stabilitet, attraktionskraft och samarbetsmöjligheter.

De ska hitta:

- tydlig vision och målgruppsbild,
- process, etapper och långsiktig efterfrågan,
- fakta och bevis kring klimat- och planeringsambitioner,
- kontaktvägar och möjliga former för medverkan.

### 7.5 Media

**Behov:** Hitta verkliga berättelser och verifierbara fakta.

De ska kunna nå:

- nyheter, bilder, fakta och kontaktpersoner,
- platsens historia och aktuella förändringar,
- människor, konflikter, perspektiv och konkreta exempel,
- pressmaterial som är uppdaterat och daterat.

### 7.6 Framtida boende — växande betydelse över tid

**Behov:** Kunna drömma och samtidigt lita på det som visas.

De ska med tiden kunna förstå:

- hur vardagen och gemenskapen är tänkta att fungera,
- vad som gör platsen unik,
- planerade bostäder, service, mobilitet och gröna miljöer,
- tidplan, säljstarter och möjlighet att anmäla intresse.

### 7.7 Barn och unga — deltagare och perspektivbärare

Barn är både en viktig användargrupp och en princip för hela platsutvecklingen. Deras behov bör utforskas separat med faktisk användarresearch. En första hypotes är att innehåll för barn och unga behöver vara visuellt, konkret, tryggt och möjligt att påverka genom aktiviteter, frågor och skapande.

## 8. Prioriterade användarresor i första versionen

### A. "Vad händer just nu?"

1. Besökaren kommer från sök, sociala medier, en skylt eller startsidan.
2. Ser direkt att webbplatsen är levande genom aktuella händelser, berättelser och nedslag.
3. Öppnar ett daterat inlägg och förstår vad som har hänt eller pågår.
4. Kan gå vidare till platsen, resan eller framtiden för sammanhang.

### B. "Hur känns det här?"

1. Besökaren går in via Platsen.
2. Möter det faktiska Jägersro genom bilder och mikroberättelser.
3. Förstår vad som finns kvar och vad som håller på att ta form.
4. Kan gå vidare till relaterade berättelser och på sikt utforska zoner eller teman i en karta.

### C. "Hur blev det så här?"

1. Besökaren går till Resan från en berättelse eller startsidan.
2. Rör sig genom en tydlig tidslinje från åkermark till travbana, handel och ny stadsdel.
3. Ser både fakta och dokumentation från olika tidsperioder.
4. Förstår att transformationen är lång och kan följa nästa milstolpe.

### D. "Vart är vi på väg?"

1. Besökaren går till Framtiden.
2. Möter en tydlig vision som är förankrad i dagens plats.
3. Förstår vad som planeras och vad som ännu är ambition.
4. Kan på sikt fördjupa sig i Jägersromodellen och konkreta bevis.

### E. "Hur kan jag vara med?"

1. Besökaren går till Delta från startsidan eller huvudmenyn.
2. Ser vilka möjligheter till aktivitet, kontakt eller dialog som faktiskt är öppna nu.
3. Får ett tydligt nästa steg utan att webbplatsen lovar en dialog som organisationen inte kan bemanna.
4. Kan senare hitta och anmäla sig till aktiviteter när eventfunktionen införs.

## 9. Informationsarkitektur — beslutad workshopriktning

Huvudnavigationen följer de fem produktpelarna:

1. **Platsen** — `/platsen`  
   Nuläget, berättelser, bilder och områdets känsla. Ersätter den tidigare benämningen "Utforska området" och den tidigare sökvägen `/projektet`.

2. **Aktuellt** — `/aktuellt`  
   Lista med CMS-publicerade inlägg. Varje inlägg får sökvägen `/aktuellt/[slug]`.

3. **Framtiden** — `/framtiden`  
   Vision och planerad riktning. Ersätter "Vägen framåt" och den tidigare sökvägen `/vagen-framat`.

4. **Resan** — `/resan`  
   Tidslinje och dokumentation som förklarar hur platsen har utvecklats.

5. **Delta** — `/delta`  
   En inbjudande ingång till kontakt och, när det finns, aktiviteter och dialog.

Sidor i sidfoten:

- **Om oss** — `/om-oss`: miniägarberättelse, ansvar, FAQ, kontakt och hitta hit.
- **Press** — `/press`: pressinformation samt länkar eller integration till nyhetsarkiv, mediearkiv och presskontakter.

Startsidans logotyp länkar till `/`. Sök, prenumeration, språkval och särskild akutinfo är möjliga globala funktioner men är ännu inte beslutade i workshopens sitemap.

## 10. Startsidan

Startsidan ska föra besökaren från **nuläge → förståelse → känsla → riktning → deltagande**.

Det beslutade flödet är:

1. **Hero → något händer**
2. **Aktuellt → det är på riktigt**
3. **Kontext → förstå**
4. **Resan → se förändringen**
5. **Platsen → känn**
6. **Framtiden → riktning**
7. **Delta → engagera**

Föreslagen innehållsordning och arbetscopy:

1. **Hero med nuläge + riktning**  
   "Jägersro förändras. Följ det som händer." En verklig, aktuell bild eller film från platsen. Primär länk: "Följ utvecklingen". Sekundär länk: "Upptäck platsen".

2. **Aktuellt på platsen**  
   Ett urval av aktuella händelser, berättelser och nedslag som visar att sidan lever. Länk till alla uppdateringar.

3. **Från travbana till ny stadsdel**  
   En ärlig sammanfattning av vad Jägersro är, vad området står inför och att platsen ännu inte är framme.

4. **En plats i förändring**  
   Ett utdrag ur tidslinjen som visar progressionen och leder vidare till hela Resan.

5. **Upptäck Jägersro**  
   Bilder och berättelser som bygger känsla för hur platsen ser ut idag, vad som finns kvar och vad som håller på att ta form.

6. **Det vi bygger tillsammans**  
   En verklighetsförankrad riktning med hållbarhet, gemenskap och framtidens stadsliv. Länk till Framtiden.

7. **Var med längs vägen**  
   En inbjudan att delta, tycka till, kontakta projektet och — när funktionen finns — hitta aktiviteter.

8. **Footer**  
   Kort avsändar- och ägarberättelse, kontakt, hitta hit, press och övriga garantilänkar.

Startsidan ska inte domineras av:

- generiska visionsrenderingar,
- bostadsförsäljning innan det är relevant,
- intern projektorganisation,
- odaterade nyheter,
- långa abstrakta varumärkestexter utan bevis eller nästa steg.

## 11. Innehållsmodell

Följande innehållstyper bör vara redaktionellt hanterbara i ett CMS:

### Nyhet / statusuppdatering

- rubrik,
- sammanfattning,
- publicerings- och uppdateringsdatum,
- tidsperiod som informationen gäller,
- geografiskt område,
- typ av påverkan,
- brödtext och media,
- ansvarig kontakt,
- relaterade sidor eller milstolpar,
- arkiveringsdatum.

### Berättelse

- rubrik och ingress,
- berättartyp: historia, person, expert, framtid eller plats,
- personer och källor,
- text, bild, ljud eller film,
- tidsperiod och geografisk koppling,
- relaterade teman och berättelser.

### Event / aktivitet

- namn och kort beskrivning,
- start- och sluttid,
- plats och vägbeskrivning,
- målgrupp,
- kostnad och anmälan,
- tillgänglighetsinformation,
- arrangör och kontakt,
- status: planerat, ändrat, inställt eller genomfört.

### Milstolpe / etapp

- namn,
- planerat och faktiskt datum,
- status,
- vad som förändras,
- beslut och källor,
- relaterade uppdateringar.

### Projektsida / fördjupning

- ansvarig redaktör,
- senast granskad,
- sammanfattning på klarspråk,
- fakta och definitioner,
- dokument och källor,
- vanliga frågor,
- kontakt.

### Kontakt / organisation

- roll och ansvarsområde,
- kontaktväg,
- vilka frågor kontakten hanterar,
- tillgänglighet eller svarstid om sådan kan lovas.

## 12. Funktionell omfattning

### Must — första lanseringen

- responsiv och tillgänglig webb,
- redaktionell startsida enligt det beslutade flödet,
- **Aktuellt:** CMS-lista och inläggssidor med datum,
- **Platsen:** statisk ingång och berättelser/artiklar,
- **Resan:** tidslinje med dokumentation och tydlig progression,
- **Framtiden:** verklighetsförankrad vision,
- **Delta:** enkel statisk ingång till de sätt att delta eller kontakta som faktiskt finns,
- **Om oss:** miniägarberättelse, FAQ, kontaktuppgifter och hitta hit/karta,
- **Press:** presskanal och tydlig åtkomst till arkiv och kontakt,
- CMS där redaktionen kan publicera och tidsstyra innehåll,
- grundläggande analys, samtyckeshantering och redaktionell uppföljning,
- metadata för sök och delning,
- tydliga rutiner för arkivering och "senast uppdaterad".

### Should — tidig vidareutveckling

- interaktiv karta för att utforska platsens zoner, teman och berättelser,
- bilder och material från labbet,
- en kort och begriplig presentation av Jägersromodellen,
- fördjupad historisk tidslinje,
- segmenterade prenumerationer när behov och kanal är validerade,
- flerspråkigt innehåll utifrån validerade behov,
- pressrum med nedladdningsbara tillgångar,
- video- och ljudberättelser med textalternativ.

### Could — senare faser

- eventkalender,
- dialogfunktion,
- webbkamera från platsen,
- "Be there then"-upplevelse där besökaren rör sig mellan då, nu och sedan,
- visualisering eller simulering av Jägersromodellen,
- personligt anpassat flöde baserat på område eller intresse,
- communityfunktioner och modererad medverkan,
- digital utställning med flera generationers röster,
- intresseanmälan för bostäder och verksamheter,
- separat områdes- eller objektsälj med integrationer,
- spelifierade utmaningar kopplade till hållbara val eller platsaktiviteter.

### Tidsberoende Must

**Byggstatus** är ett obligatoriskt framtida produktområde när den fysiska utvecklingen når en fas där status och påverkan behöver följas löpande. Workshopen placerar behovet ungefär fem år fram i tiden. Funktionen ska därför förberedas i informationsarkitektur och innehållsmodell, men behöver inte byggas fullt ut i den första lanseringen.

## 13. Utanför första versionen

Följande ingår inte i den initiala produkten om inget nytt beslut tas:

- fullskalig bostadsmarknadsplats eller objektsälj,
- inloggade användarkonton,
- omodererade kommentarsfält eller öppet socialt nätverk,
- avancerad 3D-digital tvilling,
- native-app,
- komplex personalisering,
- realtidsdata som projektet inte kan garantera kvaliteten på,
- fullständig översättning av allt innehåll innan språkbehoven har analyserats.

## 14. Tonalitet och språk

Tonaliteten ska vara:

- **ärlig** — skilj fakta från ambition och var tydlig med osäkerhet,
- **engagerad** — visa att platsen och människorna betyder något,
- **berättande** — använd konkreta scener, röster och förändringar,
- **utforskande** — allt är inte färdigt; bjud in till frågor och lärande,
- **inbjudande** — gör tröskeln låg för att förstå, besöka och delta,
- **moderna Malmö** — lokal, varm, direkt och framåtblickande utan reklamfernissa.

Språkliga riktlinjer:

- börja med det besökaren behöver veta,
- använd klarspråk och förklara planeringsbegrepp,
- datera statusinformation och ange vem som står bakom den,
- skriv "planeras", "utreds" och "är beslutat" konsekvent,
- använd rubriker som fungerar utan omgivande kampanjmaterial,
- undvik superlativ och löften som inte går att belägga,
- låt barn och andra medverkande komma till tals på egna villkor och med rätt samtycken.

## 15. Visuell riktning

Den visuella produkten ska vara förankrad i platsen men inte låst vid nostalgi.

Riktningen bör kombinera:

- dokumentärt foto och film från den faktiska platsen,
- historiskt material med tydlig källangivelse,
- barns och boendes perspektiv utan att uttrycket blir barnsligt,
- lager, tidsförskjutning och kontraster mellan hårt och mjukt,
- redaktionell tydlighet för information som måste gå snabbt att hitta,
- en sammanhållen ram där många olika berättelser kan leva.

Visionsbilder ska märkas som illustrationer och inte kunna misstas för ett färdigt eller beslutat resultat.

## 16. Förtroende, tillgänglighet och integritet

### Förtroende

- Varje status- och faktasida har publiceringsdatum, senast uppdaterad och ansvarig.
- Ändrade tidplaner korrigeras öppet; gammal information arkiveras men försvinner inte utan spår.
- Källor och beslut länkas när det är möjligt.
- Kritisk påverkan ska aldrig döljas under kampanjinnehåll.

### Tillgänglighet

- WCAG 2.2 AA är acceptanskriterium, inte en efterhandskontroll.
- Tangentbordsnavigering, fokusmarkering, kontrast och semantik testas.
- Film textas; meningsbärande ljud får textalternativ.
- Kartor och visuella tidslinjer får motsvarande information i text/lista.
- Språk och läsbarhet testas med faktiska användare.

### Integritet

- Samla bara in uppgifter som behövs för uttalat syfte.
- Separata och begripliga samtycken för nyhetsbrev, event och eventuell dialog.
- Ingen onödig spårning eller marknadsföringsprofilering.
- Rutiner krävs för gallring, registerutdrag och återkallat samtycke.
- Innehåll med barn kräver särskilda publicerings- och samtyckesrutiner.

## 17. Framgångsmått

Produkten ska primärt mätas på nytta, förtroende och verkligt engagemang — inte bara trafik.

### Användarnytta

- andel testpersoner som hittar aktuell påverkan utan hjälp,
- tid och lyckandegrad för centrala uppgifter,
- minskning av återkommande frågor som redan besvaras på webben,
- sökningar utan resultat och vanligaste interna sökfrågor.

### Förtroende och tydlighet

- andel besökare som förstår skillnaden mellan nuläge, plan och vision,
- upplevd aktualitet och trovärdighet i återkommande användartester,
- andel faktasidor granskade inom avtalad tid,
- svarstid och kvalitet på frågor som skickas vidare.

### Engagemang

- prenumerationer och fortsatt öppnings-/klickaktivitet,
- eventanmälningar och faktisk närvaro,
- sparningar, delningar och kvalitativa reaktioner,
- återkommande besök kring nya milstolpar,
- bidrag från externa röster och lokala samarbeten.

### Teknisk kvalitet

- god prestanda på vanliga mobila enheter,
- inga blockerande tillgänglighetsfel vid lansering,
- stabil publicering och tydlig återställningsplan,
- mätbar sökbarhet och korrekt indexering av publikt innehåll.

Exakta målnivåer sätts efter att en baslinje och redaktionens kapacitet har fastställts.

## 18. Rekommenderad teknisk riktning

En React-baserad lösning är lämplig. Rekommenderad utgångspunkt är:

- **Next.js + TypeScript** för komponentbaserat gränssnitt, bra stöd för sökbarhet, prestanda och både statiskt och dynamiskt innehåll,
- **headless CMS** för strukturerat innehåll, redaktionella roller, förhandsgranskning och schemalagd publicering,
- **designsystem** med återanvändbara komponenter och tillgänglighetskrav från start,
- **serverrenderade eller statiskt genererade publika sidor** där det passar,
- **separat integrationslager** för nyhetsbrev, formulär, analys och framtida kart-/säljfunktioner,
- **förstapartsanalys med dataminimering** och tydlig samtyckesmodell,
- **automatiserade kvalitetskontroller** för tester, tillgänglighet, länkar och prestanda.

Det tekniska valet ska stödja redaktionens vardag och den långa produktresan. CMS, drift och integrationsplattform väljs först efter en kort kravjämförelse kring:

- redaktionell kompetens och antal redaktörer,
- publicerings- och granskningsflöden,
- språk och behörigheter,
- upphandling, licens och ägarskap,
- personuppgifter och datalagring,
- befintliga system hos projektets parter,
- behov av karta, CRM, nyhetsbrev och framtida säljplattform.

WordPress med ett välstrukturerat API kan vara ett alternativ om redaktionen redan har stark kompetens där. Rekommendationen är att inte välja CMS enbart utifrån utvecklarpreferens.

## 19. Redaktionell drift

Webben blir trovärdig först när ansvar och arbetsflöde finns på plats.

Föreslagna roller:

- **produktägare:** prioriterar effekt, budget och roadmap,
- **huvudredaktör:** ansvarar för helhet, startsida och publiceringsplan,
- **sakägare:** verifierar bygg-, plan-, trafik- och hållbarhetsinformation,
- **eventansvarig:** håller aktiviteter och praktisk information aktuell,
- **press-/kommunikationsansvarig:** hanterar mediefakta och kontaktvägar,
- **teknisk förvaltning:** ansvarar för drift, säkerhet och vidareutveckling.

Minimikrav före lansering:

- ägare och granskningsintervall för varje faktasida,
- rutin för akut publicering och korrigering,
- innehållskalender för minst tre månader,
- bild-, käll- och samtyckesrutiner,
- arkiveringsregler,
- mätplan och månatlig produktuppföljning.

## 20. Föreslagen leverans i etapper

### Etapp 0 — Förankra och validera

- besluta produktägarskap och redaktionell kapacitet,
- intervjua representanter för närboende, Malmöbor, stad och framtida boende,
- inventera befintligt innehåll, system, data och rättigheter,
- prioritera de första användarresorna,
- fastställa mätbar baslinje.

### Etapp 1 — Grund och MVP

- informationsarkitektur och innehållsmodell,
- designprinciper, prototyp och användartest,
- teknisk grund, CMS och designsystem,
- startsida samt Platsen, Aktuellt, Framtiden, Resan och en enkel Delta-ingång,
- Om oss, FAQ, kontakt, hitta hit och Press,
- analys, tillgänglighets- och prestandatest,
- redaktionell utbildning och lanseringsinnehåll.

### Etapp 2 — Platsen blir interaktiv

- karta, rikare tidslinje och filtrerad byggstatus,
- fördjupning av Jägersromodellen,
- historiskt och deltagarbaserat innehåll,
- event, segmenterade prenumerationer och förbättrad dialog när organisationen kan bära funktionerna.

### Etapp 3 — Mot säljstart och inflyttning

- utveckla boende- och verksamhetsinformation,
- integrera intresseanmälan, CRM och vid behov objektsälj,
- flytta fokus mot vardagsliv, service, ambassadörer och inflyttning,
- behåll hela transformationshistorien som en del av platsens identitet.

## 21. Viktiga hypoteser att testa

1. Närboende prioriterar aktuell påverkan högre än visionsinnehåll.
2. En ärlig dokumentation av processen bygger mer förtroende än en polerad framtidsbild.
3. Event och aktiviteter är den starkaste bryggan mellan digital relation och fysisk plats.
4. Barnens perspektiv engagerar vuxna när det kopplas till konkreta beslut och upplevelser.
5. Tidslinje och karta är de tydligaste sätten att förklara ett komplext och långvarigt projekt.
6. Besökare vill prenumerera på specifika ämnen eller områden snarare än ett generellt nyhetsbrev.
7. Redaktionell aktualitet är en större framgångsfaktor än mängden innehåll.

## 22. Öppna beslut

Följande behöver avgöras innan utvecklingen låses:

- Vem äger produkten och vem har mandat att prioritera?
- Vilket innehåll finns redan och vilka rättigheter finns till historiskt material?
- Vilka arbeten, störningar och milstolpar kan publiceras — och från vilka system?
- Vilka språk behövs vid första lanseringen?
- Vilken dialog kan projektet faktiskt bemanna och svara på?
- Hur ska Jägersromodellen beskrivas, beläggas och uppdateras?
- När ska den interaktiva kartan prioriteras efter MVP?
- Vilken nyhetsbrevs-/CRM-lösning används av organisationen idag?
- Vilka krav finns på drift, datahemvist, säkerhet och upphandling?
- Hur förhåller sig webbplatsen till befintlig visuell identitet och nuvarande domän?
- När börjar framtida boende och försäljning bli primärt produktfokus?
- Ska pressens nyhets- och mediearkiv hämtas från ett externt CMS eller hanteras i webbens CMS?
- Behövs prenumeration och sök i första versionen, eller först efter att innehållsmängden motiverar dem?

## 23. Definition av en lyckad första lansering

Den första lanseringen är lyckad när:

- en närboende utan förkunskap kan förstå vad som händer och hur hen påverkas,
- en Malmöbo kan förstå varför platsen är relevant och hitta något att följa eller delta i,
- en beslutsfattare eller journalist kan hitta daterade fakta och rätt kontakt,
- en redaktör kan publicera en kritisk uppdatering snabbt och säkert,
- skillnaden mellan dagens plats, beslutade planer och långsiktig vision är tydlig,
- webben känns som början på en lång relation — inte som en tillfällig kampanjsida.

---

## Dokumentets roll framåt

Detta dokument är en gemensam utgångspunkt, inte en slutlig kravspecifikation. Efter validering bör det kompletteras med:

- prioriterad backlog med acceptanskriterier,
- sitemap och innehållsmatris,
- mätplan,
- tekniska arkitekturbeslut,
- redaktionell governance,
- prototyp och dokumenterade användartester.
