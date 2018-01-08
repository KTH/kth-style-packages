import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Anpassning av grafisk profil för webb</h1>

      <Section title="Färg">
        <h3>Hur vi använder färger</h3>
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
          <h3>Annpassning av KTHs profilfärger</h3>
              <p>
              Målet har varit att kth.se ska möta tillgänglighetskrav på nivå AA för WCAG 2.0 (se riktlinje 1.4, <a href="/style/guidelines/accessability/#overgripande_riktlinjer_tillganglighet">Övergripande riktlinjer tillgänglighet</a>) genom att för kth.se ändra färger, och teststorlek på de element som haft för dålig kontrast mellan bakgrund och text. En ytterligare positiv konsekvens av dessa förändringar är att kth.se kommer att ge en lugnare upplevelse vilket kommer att ge en bättre läsbarhet för alla användare.
              </p>
              <p>
              Vi har inte velat göra för stora förändringar; kth.se ska fortfarande ge samma design-upplevelse som är baserat på den kth-profil som togs fram för ett antal år sen. Större förändringar än det vi föreslagit här kräver en större redesign med nya profilfärger, annan layout, etc.
              </p>
              <p>
              I nuvarande förslag har vi mörkat ner den ljusa blå profilfärgen till nivå AA för stor text (se <a href="https://www.kth.se/social/group/kth-style-guide/page/farger/">Färger</a>) och ersatt den ljusa gröna med den gröna profilfärgen, vilket gör att vi inte frångår KTHs profil för mycket. Det kräver dock att vit text på färgad bakgrund har en fontstorlek på minst 14 om fet och annars 18 px. Alla element utom plattor kommer uppfylla detta.
              </p>
        </Section>
        <Section title="Font">
            <h3>Titel</h3>
            <ul>
                <li>
                    Georgia Regular, Georgia, garamond pro, garamond, times new roman, times, serif;
                </li>
            </ul>
            <h3>Rubriker(H2-H4) samt brödtext</h3>
            <ul>
                <li>
                    Serif: ...
                </li>
                <li>
                    Sans serif: font-family: Arial, Helvetica Neue, helvetica, sans-serif
                </li>
            </ul>
        </Section>
    </Page>
  )
}
