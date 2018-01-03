import { Page, Section, Stage, Scene, Code, Narrative } from '../components.jsx'

export default function TypographyPage () {
  return (
    <Page>

      
      <h1>Typography</h1>
      <p>Läs först <a href="/style/guidelines/heading">Riktlinjer rubriker, brödtext</a> där du får hjälp att välja rätt typ av komponent.</p>
      <p>
        TODO, Compare with <a href="https://getbootstrap.com/docs/4.0/content/typography/">Bootstrap</a>
      </p>
      
      
      
      <Section title="Titel">  
        <Stage> 
          <h1>En huvudrubrik eller titel ska inte vara för lång</h1>
          <h4>Användning</h4>
          <ul>
              <li>
                  För huvudrubrik (h1).
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
        </Stage>
      </Section>
      <Section title="Rubriknivå 2"> 
        <Stage> 
          <h2>Med rubriknivå två gör du en grov indelning av sidan</h2>
          <h4>Användning</h4>
          <ul>
              <li>
                  För andra rubriknivå (h2).
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
        </Stage>
      </Section>
      <Section title="Rubriknivå 3">  
        <Stage> 
          <h3>Med rubriknivå tre så gör du en finare indelning av sidan</h3>
          <h4>Användning</h4>
          <ul>
              <li>
                  För tredje rubriknivå (h3).
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
        </Stage>
      </Section>
      <Section title="Rubriknivå 4">  
        <Stage> 
          <h4>Den finaste rubrikindelningen ger rubriknivå fyra</h4>
          <h4>Användning</h4>
          <ul>
              <li>
                  För fjärde rubriknivå (h4).
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
        </Stage>
      </Section>
      <Section title="Brödtext"> 
        <Stage> 
          <p>Brödtext används för innehållstext som är en längre sammanhängande text indelad i stycken för att ge bra läsbarhet.</p>
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
        </Stage>
      </Section>
    </Page>
  )
}
