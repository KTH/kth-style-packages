import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import Alert from 'kth-style-inferno-bootstrap/lib/Alert.jsx'
import Jumbotron from 'kth-style-inferno-bootstrap/lib/Jumbotron.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
        <h1>KTH Style</h1>
        <img className="HeroImage" src="/style/static/img/Banner.png" />
        
        <Section title="Bakgrund">
            <Narrative>
            <Alert color="info" aria-live="polite">
                <p>KTH Style är under utveckling. Riktlinjer och utseende kan komma att ändras fram till lansering.</p>
            </Alert>
            <p>
                KTH webb är riktlinje för style men olika delar har kopierats vid olika lägen och tolkats olika vilket gör att utseende varierar mellan olika tjänster. Även inom KTH webb finns delar som är tveksamma vad gäller principer för Användbarhet och Tillgänglighet. Det finns inte heller några riktlinjer eller principer nedskrivna för hur man ska använda de olika elementen för att uppnå bra UX.
            </p>
            <p>
                Kth style har tidigare mer handlat om att man ska förstå att man är på kth.se ("se kth-igt ut").
            </p>
            </Narrative>
        </Section>
        
        <Section title="Målgrupp">
            <Narrative>
                <p>
                    Utvecklare av KTH-förvaltade webbmiljöer.
                </p>
                <p>
                    Webbredaktörer och webbansvariga på KTH använder styleguiden för allmän orientering i KTH:s webbform. För riktlinjer som styr formmässiga delar av det redaktionella arbetet hänvisas till dokumentation på KTH Intranät.
                </p>
                <p>
                    Externa parter som utvecklar webbtjänster i enlighet med form på KTH:s webbplats.
                </p>
            </Narrative>
        </Section>
      
        <Section title="Syfte, mål">
            <Narrative>
            <p>
                Målet med styleguiden är att:
                <ul>
                    <li>
                        Förbättra upplevelsen för slutanvändaren, som är den som tar del av innehåll eller använder funktioner på KTH:s webbplats.
                    </li>
                    <li>
                        Det som möter slutanvändaren ska se ut och bete sig konsekvent i alla miljöer som omfattas av KTH:s centralt förvaltade webbform.
                    </li>
                    <li>
                        Det är ett levande dokument.
                    </li>
                </ul>
            </p>
            <p>
                Genom att:
                <ul>
                    <li>
                        Styleguiden ska sammanfatta vilka element som finns att tillgå och ge Utvecklarna riktlinjer när, hur och varför elementen ska användas i utvecklingsarbetet.
                    </li>
                    <li>
                        Styleguiden bygger på principer för användbarhet och tillgänglighet (se <a href="/style/guidelines/usability">Riktlinjer för användbahet</a> och <a href="/style/guidelines/accessability">Riktlinjer för tillgänglighet</a>).
                    </li>
                    <li>
                        Innehållet diskuteras i de olika grupperingar som använder riktlinjerna och förankras med de centrala funktioner på KTH som förvaltar riktlinjerna.
                    </li>
                </ul>
            </p>
            </Narrative>
        </Section>
        
        <Section title="Avgränsning">
            <Narrative>
            <p>
                Förankring i grafisk profil är relevant för all digital kommunikation på KTH som medger formmässiga anpassningar. Styleguiden gäller därför både för applikationer som används internt på KTH och externa målgrupper.
            </p>
            <p>
                Styleguiden omfattar webb som förvaltas av KTH centralt. Styleguiden omfattar inte applikationer som förvaltas lokalt på KTH och baseras på fri form, egna tolkningar av den grafiska profilen eller daterade centrala stilmallar (ambitionen är att fasa ut sådan form).
            </p>
            <p>
                Styleguiden omfattar främst de element som är gemensamma för flertalet applikationer. Övriga element som är specifika för en viss applikation eller del av ska genomgå samma översyn men inte göras tillgängliga i Styleguiden (kan vara en egen del som utgår från Styleguiden).
            </p>
            <p>
                Styleguiden tar främst fasta på enskilda element och ger endast översiktlig vägledning i hur dessa bör förhålla sig till varandra. Olika applikationer ger olika förutsättningar för hur forminslagen kan disponeras över olika ytor. Alla tillämpningar av styleguiden behöver därför förankras med de centrala funktioner på KTH som förvaltar riktlinjerna.
            </p>
            <p>
                Styleguiden stödjer de webbläsare och versioner som WIKS stödjer...
            </p>
            </Narrative>
        </Section>

        <Section title="KTH's grafiska profil" id="kths_grafiska_profil">
            <Narrative>
            <p>Här kan vi skriva lite text om den grafiska profilen.</p>
            </Narrative>
            <section>
                <h3>Bakgrund</h3>
                <p>
                KTH:s grafiska profil är beslutad av rektor.
                </p>
                <p>
                Profilen omfattar dock inte ett officiellt KTH-utseende på webb. Den webbform som tillämpas på centralt förvaltade webbmiljöer är en tillämpning av den grafiska profilen. Av det följer att forminslag följer grafisk profil i de fall denna är tillämplig. Hit hör val av fonter, färger, hantering av KTH:s logotyp och bruk av profilens särskilda grafiska element. 
                </p>
                <p>
                Tillkommande forminslag och avsteg från grafisk profil sker utifrån webbspecifika behov samt krav på användbarhet och tillgänglighet (se <a href="/style/guidelines/usability">Riktlinjer för användbahet</a> och <a href="/style/guidelines/accessability">Riktlinjer för tillgänglighet</a>).
                </p>
        </section>
        <section>
            <h3>Färg</h3>
            <h4>Hur vi använder färger</h4>
            <ul>
                <li>
                    Vi utgår ifrån <a href="https://intra.kth.se/polopoly_fs/1.458089!/image/fargreferens_png.png">KTH:s profil färger</a> men har testat kontrast och om dålig kontrast justerat ljusheten (p g a tillgänglighet). Läs mer om kontrast under <a href="/style/guidelines/accessability/#farger_och_tillganglighet">Färger och tillgänglighet</a>.
                </li>
                <li>
                    Färg ska inte vara det enda sättet att skilja på information utan kan fungera som ett bra tillägg till någon visuell markering (som inte bygger på färgskillnader). T ex använd understruket tillsammans med blå färg på länkad text. (Tillgänglighet).
                </li>
                <li>
                    Då man använder färg i dekorativt syfte ska man göra detta utan att det samtidigt påverkar användbarhet och tillgänglighet. Exempel på felaktig användning:
                    <ul>
                        <li>
                            Man använder interaktiva element som knappar för att dekorera i stället för att det egentligen hade varit mer passande med en länk. Färger ska inte distrahera användaren från det som egentligen är uppgiften på sidan (Användbarhet).
                        </li>
                        <li>
                            Man använder färgade plattor med vit text som inte ger tillräcklig kontrast och därför försvårar läsbarhet (Tillgänglighet).
                        </li>
                        <li>
                            Man hoppar över H2:an för att man inte tycker om den gröna färgen på rubriken (Tillgänglighet).
                        </li>
                    </ul>
                </li>
                <li>
                    Man kan använda färger för att markera, koda innehåll. Tänk på att i samma sammanhang inte samtidigt använda färger i ett dekorativt syfte.
                </li>
            </ul>
        <h4>Annpassning av KTHs profilfärger</h4>
            <p>
            Målet har varit att kth.se ska möta tillgänglighetskrav på nivå AA för WCAG 2.0 (se riktlinje 1.4, <a href="/style/guidelines/accessability/#overgripande_riktlinjer_tillganglighet">Övergripande riktlinjer tillgänglighet</a>) genom att för kth.se ändra färger, och teststorlek på de element som haft för dålig kontrast mellan bakgrund och text. En ytterligare positiv konsekvens av dessa förändringar är att kth.se kommer att ge en lugnare upplevelse vilket kommer att ge en bättre läsbarhet för alla användare.
            </p>
            <p>
            Vi har inte velat göra för stora förändringar; kth.se ska fortfarande ge samma design-upplevelse som är baserat på den kth-profil som togs fram för ett antal år sen. Större förändringar än det vi föreslagit här kräver en större redesign med nya profilfärger, annan layout, etc.
            </p>
            <p>
            I nuvarande förslag har vi mörkat ner den ljusa blå profilfärgen till nivå AA för stor text (se <a href="https://www.kth.se/social/group/kth-style-guide/page/farger/">Färger</a>) och ersatt den ljusa gröna med den gröna profilfärgen, vilket gör att vi inte frångår KTHs profil för mycket. Det kräver dock att vit text på färgad bakgrund har en fontstorlek på minst 14 om fet och annars 18 px. Alla element utom plattor kommer uppfylla detta.
            </p>
        </section>
        <section>
            <h3>Font</h3>
            <h4>Titel</h4>
            <ul>
                <li>
                    Georgia Regular, Georgia, garamond pro, garamond, times new roman, times, serif;
                </li>
            </ul>
            <h4>Rubriker(H2-H4) samt brödtext</h4>
            <ul>
                <li>
                    Serif: ...
                </li>
                <li>
                    Sans serif: font-family: Arial, Helvetica Neue, helvetica, sans-serif
                </li>
            </ul>
            </section>
        </Section>

        <Section title="Bootstrap 4">
            <Narrative>
            <p>Här kan vi skriva lite text om KTH Style Bootstrap.</p>
            </Narrative>
        </Section>

        <Section title="Inferno.js">
            <Narrative>
            <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap med Inferno.js.</p>        
            </Narrative>
        </Section>

        <Section title=".Net etc.">
            <Narrative>
            <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap i andra projekt.</p>
            </Narrative>
        </Section>      
    </Page>
  )
}

