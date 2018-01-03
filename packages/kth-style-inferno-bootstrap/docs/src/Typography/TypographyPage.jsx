import { Page, Section, Stage, Scene, Code, Narrative } from '../components.jsx'

export default function TypographyPage () {
  return (
    <Page>

      
      <h1>Typography</h1>
      <p>Läs först <a href="/style/guidelines/heading">Riktlinjer rubriker brödtext</a> där du får hjälp att välja rätt typ av komponent.</p>
      <p>
        TODO, Compare with <a href="https://getbootstrap.com/docs/4.0/content/typography/">Bootstrap</a>
      </p>
      
      
      <Stage> 
        <Section title="Titel (H1)">  
          <div class="examples-container">
            <div data-examples-view="Titel">
              <h1 data-example>En huvudrubrik eller titel ska inte vara för lång</h1>
            </div>
          </div>
          <h4>Användning</h4>
          <ul>
              <li>
                  För huvudrubrik.
              </li>
              <li>
                  Ska inte användas längre ned på sidor och ska bara förekomma en gång på varje sida.
              </li>
              <li>
                <p>
                  Se exempel: <a href="/style/page-layout/textpage">rubriker och brödtext.</a>
                </p>
              </li>
          </ul>
          <h4>Tänk på att</h4>
          <ul>
              <li>
                  Se <a href="/style/guidelines/heading#generella_riktlinjer_for_rubriker"> Generella riktlinjer för rubriker.</a>
              </li>
          </ul>
        </Section>
      </Stage>
      
      <Stage> 
        <Section title="Rubriknivå 2 (H2)">  
           <div class="examples-container">
            <div data-examples-view="rubriknivå-2">
              <h2 data-example>Du gör du en grov indelning av sidan genom att använda rubriknivå två</h2>
            </div>
          </div>
          <h4>Användning</h4>
          <ul>
              <li>
                  För andra rubriknivå.
              </li>
              <li>
                <p>
                  Se exempel: <a href="/style/page-layout/textpage">rubriker och brödtext.</a>
                </p>
              </li>
          </ul>
          <h4>Tänk på att</h4>
          <ul>
              <li>
                    Se <a href="/style/guidelines/heading#generella_riktlinjer_for_rubriker"> Generella riktlinjer för rubriker.</a>
              </li>
          </ul>
        </Section>
      </Stage>
        
      <Stage> 
        <Section title="Rubriknivå 3 (H3)">  
          <div class="examples-container">
            <div data-examples-view="rubriknivå-3">
              <h3 data-example>Med rubriknivå tre så gör du en finare indelning av sidan</h3>
            </div>
          </div>
          <h4>Användning</h4>
          <ul>
              <li>
                  För tredje rubriknivå.
              </li>
              <li>
                <p>
                  Se exempel: <a href="/style/page-layout/textpage">rubriker och brödtext.</a>
                </p>
              </li>
          </ul>
          <h4>Tänk på att</h4>
              <ul>
          <li>
              Se <a href="/style/guidelines/heading#generella_riktlinjer_for_rubriker"> Generella riktlinjer för rubriker.</a>
          </li>
          </ul>
        </Section>
      </Stage>
       
     <Stage> 
        <Section title="Rubriknivå 4 (H4)">  
          <div class="examples-container">
          <div data-examples-view="rubriknivå-4">
            <h4 data-example>Den finaste rubrikindelningen ger rubriknivå fyra</h4>
          </div>
        </div>
          <h4>Användning</h4>
          <ul>
              <li>
                  För fjärde rubriknivå.
              </li>
              <li>
                <p>
                  Se exempel: <a href="/style/page-layout/textpage">rubriker och brödtext.</a>
                </p>
              </li>
          </ul>
          <h4>Tänk på att</h4>
          <ul>
              <li>
                    Se <a href="/style/guidelines/heading#generella_riktlinjer_for_rubriker"> Generella riktlinjer för rubriker.</a>
              </li>
          </ul>
       </Section>
      </Stage>
   
      <Stage> 
        <Section title="Brödtext">  
          <div class="examples-container">
          <div data-examples-view="brödtext">
            <p data-example>Brödtext används för innehållstext som är en längre sammanhängande text indelad i stycken för att ge bra läsbarhet.</p>
          </div>
        </div>
          <h4>Användning</h4>
          <ul>
              <li>
                  För innehållstext under rubriker.
              </li>
              <li>
                <p>
                  Se exempel: <a href="/style/page-layout/textpage">rubriker och brödtext.</a>
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
        </Section>
      </Stage>
    </Page>
  )
}
