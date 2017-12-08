import { Page, Section, Stage, Scene, Code, Narrative } from '../components.jsx'

export default function TypographyPage () {
  return (
    <Page>

      <Section title="TODO">
        <Narrative>
          TODO, Compare with <a href="https://getbootstrap.com/docs/4.0/content/typography/">Bootstrap</a>.
        </Narrative>
      </Section>

      <section>
        <h3>Titel (H1)</h3>
        <div class="examples-container">
          <div data-examples-view="Titel">
            <h1 data-example>Titel (H1)</h1>
          </div>
        </div>
        <h4>Användning</h4>
        <ul>
            <li>
                Som huvudrubrik.
            </li>
            <li>
                Ska inte användas längre ned på sidor och ska bara förekomma en gång på varje sida.
            </li>
            <li>
              <p>
                Se exempel: <a href="/style/textexample">rubriker och brödtext.</a>
              </p>
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Se <a href="#generella_riktlinjer_rubriker"> Generella riktlinjer för rubriker.</a>
            </li>
        </ul>

        <h3>Rubriknivå 2 (H2)</h3>
        <div class="examples-container">
          <div data-examples-view="rubriknivå-2">
            <h2 data-example>Rubriknivå 2 (H2)</h2>
          </div>
        </div>
        <h4>Användning</h4>
        <ul>
            <li>
                Som andra rubriknivå.
            </li>
            <li>
              <p>
                Se exempel: <a href="/style/textexample">rubriker och brödtext.</a>
              </p>
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                  Se <a href="#generella_riktlinjer_rubriker"> Generella riktlinjer för rubriker.</a>
            </li>
        </ul>

    <h3>Rubriknivå 3 (H3)</h3>
        <div class="examples-container">
          <div data-examples-view="rubriknivå-3">
            <h3 data-example>Rubriknivå 3 (H3)</h3>
          </div>
        </div>
        <h4>Användning</h4>
        <ul>
            <li>
                Som  tredje rubriknivå.
            </li>
            <li>
              <p>
                Se exempel: <a href="/style/textexample">rubriker och brödtext.</a>
              </p>
            </li>
        </ul>
        <h4>Tänk på att</h4>
            <ul>
        <li>
            Se <a href="#generella_riktlinjer_rubriker"> Generella riktlinjer för rubriker.</a>
        </li>
        </ul>

    <h3>Rubriknivå 4 (H4)</h3>
      <div class="examples-container">
        <div data-examples-view="rubriknivå-4">
          <h4 data-example>Rubriknivå 4 (H4)</h4>
        </div>
      </div>
        <h4>Användning</h4>
        <ul>
            <li>
                Som  fjärde rubriknivå.
            </li>
            <li>
              <p>
                Se exempel: <a href="/style/textexample">rubriker och brödtext.</a>
              </p>
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                  Se <a href="#generella_riktlinjer_rubriker"> Generella riktlinjer för rubriker.</a>
            </li>
        </ul>
    
    <h3>Brödtext</h3>
      <div class="examples-container">
        <div data-examples-view="brödtext">
          <p data-example>Brödtext</p>
        </div>
      </div>
        <h4>Användning</h4>
        <ul>
            <li>
                Som innehållstext under rubriker.
            </li>
            <li>
              <p>
                Se exempel: <a href="/style/textexample">rubriker och brödtext.</a>
              </p>
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Använd sparsamt med grafiska markeringar som kursiv och fetstil i löptext på en webbsida.
            </li>
            <ul>
                <li>
                    Fetstil används framför allt för att markera nyckelord i en text.
                </li>
                <li>
                    Kursiv text kan precis som i tryckt text användas för att markera betoning.
                </li>
            </ul>
            <li>
                Vill man ge titlar på skrifter och liknande en grafisk markering är citattecken att föredra framför kursiv text.
            </li>
        </ul>
    </section>


    </Page>
  )
}
