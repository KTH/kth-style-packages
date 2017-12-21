import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer test</h1>
      <section>
        <p>
            Om du använder KTH Style med komponenter/ tillhörande riktlinjer samt följer rekommendationer under <a href="/style/accessiblecode">Tillgänglig kod</a> så får du mycket av Användbarhet och Tillgänglighet gratis. 
        </p>
        <p>
          Men som alltid är det under testning du hittar det du inte tänkt på. Det kan vara saker som är specifikt för din applikation men det kan också vara saker vi behöver ta in i KTH Style för att förbättra den, så därför är det viktigt att du återkopplar till ansvariga för KTH Style när du hittat områden för förbättring.
        </p>
      </section>

      <section>
        <h2 id="testa_anvandbarhet">Testa användbarhet</h2>
        <p>
          Se instruktioner hur du genomför en <a href="https://confluence.sys.kth.se/confluence/pages/viewpage.action?pageId=27297507">användbarhetstest för vidareutveckling</a>.
        </p>
      </section>

      <section>
        <h2>Testa tillgänglighet</h2>
        <h3>Testa din websida manuellt</h3>
        <ul>
            <li>
                Tabba sig igenom sidan och se att du når element i rätt ordning
            </li>
            <li>
                Minska webb-fönstret och se att sidan inte går sönder.
            </li>
        </ul>
        <h3>Testa med testverktyg</h3>
        <p>
          KTH-Style har ett script som ger möjlighet att automatiskt test (utvärdera) tillgänglihet mot standarden WCAG2AA. Du kan köra scriptet med npm genom att köra <kbd>npm run test-accessibility</kbd>. För att detta ska fungera måste KTH-Style vara deployat på localhost:3000.
        </p>
        <p>
          Resultatet från tillgänglighetsscriptet läggs i mappen "accessibility/reports" i repot. Av varje sida som testas skapas en html-rapport med varningar och errors samt en skärmdump av den testade sidan.
        </p>
      </section>


      <section>
      <h2>TODO</h2>
      <ul>
        <li>Uppdatera vad mer som behöver testas manuellt</li>
        <li>Uppdatera med instruktioner testverktyg</li>  
      </ul>
      </section>   
    </Page>
  )
}
