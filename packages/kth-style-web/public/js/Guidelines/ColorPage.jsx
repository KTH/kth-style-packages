import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer färger</h1>

        <p> 
          Färger på kompomnenter i KTH style är anpassade för att ge bra tillgänglighet (se nedan). Det finns några riktlinjer för hur man använder färgade komponenter som kan vara bra att känna till:
        </p>
          <ul>
            <li>
              Färg ska inte vara det enda sättet att skilja på olika typer av information utan färg kan fungera som ett komplement (t ex ska en röd knapp ha en förklarande text). Läs mer om färgblindhet nedan.
            </li>
            <li>
              Då man använder färg i dekorativt syfte ska man göra detta utan att det samtidigt påverkar användbarhet och tillgänglighet. Exempel på felaktig användning:
              <ul>
                <li>
                  Man använder interaktiva element som knappar för att dekorera i stället för att det egentligen hade varit mer passande med en länk. Färger ska inte distrahera användaren från det som egentligen är uppgiften på sidan.
                </li>
                <li>
                  Man använder färger för att tagga visst innehåll samtidigt som man använder färger för annat innehåll i ett dekorativt syfte.  
                </li>
              </ul>
            </li>
          </ul>

        <Section title="Färger och tillgänglighet">
          <h3>Kontrast</h3>
          <p>
            Vissa av  <a href="https://intra.kth.se/polopoly_fs/1.458089!/image/fargreferens_png.png">KTHs profil färger</a> har i dagsläget inte tillräcklig kontrast (<a href="http://www.dasplankton.de/ContrastA/">kontrollera kontrasten</a>).
          </p>   
          <p>
            För att möta tillgänglighetskrav på nivå AA för WCAG 2.0 (se riktlinje 1.4, <a href="/style/guidelines/accessability/#overgripande_riktlinjer_tillganglighet">Övergripande riktlinjer tillgänglighet</a>) har vi därför i KTH style justerat färger och textstorlek på de element som haft för dålig kontrast mellan bakgrund och text. Om det har gått har färgens ljushet ändrats något (se <a href="https://www.w3schools.com/colors/colors_picker.asp">gör färgen mörkare eller ljusare för att öka kontrasten</a>, om det gett för stor skillnad mot orginalfärgen har färgen bytts ut mot en annan profilfärg. En ytterligare positiv konsekvens av dessa förändringar är att det ger en lugnare upplevelse vilket kommer att ge en bättre läsbarhet för alla användare.
          </p>
          <p>
            Se sammanställning av <a href="https://www.kth.se/social/group/kth-style-guide/page/farger/">färger</a>.
          </p>
          <h3>Färgstyrka</h3>
           <p> 
            Starka färger ska undvikas då de har negativ påverkan på personer med koncentrationssvårighter. Det finns inget sätt att mäta om en färg är för stark. Detta behöver utredas vidare ...
           </p>
           <h3>Färgblindhet</h3>
           <p>
            När man använder färger för att kunna filtrera information är det viktigt att färgerna går att särskilja även då du är färgblind. Det finns olika typer av färgblindhet, och de är olika vanliga (se <a href="https://sv.wikipedia.org/wiki/Defekt_f%C3%A4rgseende">Defekt färseende</a>). 
           </p>
           <p>  
            Du kan testa hur en sida ser ut för olika färgblindheter genom att installera en plugin för färgblindhet i Chrome webläsare (se <a href="https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa">Colorblinding</a>).
           </p>
        </Section>
    </Page>
  )
}
