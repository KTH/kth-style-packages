import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <Section title="Knappar och länkar">
        <Narrative>
          <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer för knappar och länkar</a>.</p>    
        </Narrative>
        
        <Stage>
          <Section title="Knappar">          
            <section id="primary_button">
              <h3>Primary button</h3>  
              <Scene>
                <Button color="primary">primary</Button>{' '}
                <Code>
                  {`<Button color="primary">primary</Button>`}
                </Code>
              </Scene>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                    <li>
                        För primära aktiviteter (man vill uppmuntra användaren att utföra).
                    </li>
                    <li>
                        "Sök" är en special variant av denna.
                    </li>
                    <li>
                        Exempel: "Ansöka".
                    </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                    <li>
                        Se <a href="#generella_riktlinjer_knappar">Generella riktlinjer för knappar</a>.
                    </li>
                </ul>
              </UXComment>
            </section>
            <section id="secondary_button">
              <h3>Secondary button</h3>  
              <Scene>
                <Button color="secondary">secondary</Button>{' '}
                <Code>
                  {`<Button color="secondary">secondary</Button>`}
                </Code>
              </Scene>
             <UXComment>
                <h4>Användning:</h4>
                <ul>
                    <li>
                        För sekundära aktiviteter (man kan utföra, men uppmanas inte till det).
                    </li>
                    <li>
                        Exempel:
                        <ul>
                            <li>
                                "Avbryt".
                            </li>
                            <li>
                                Dialoger där inget av alternativen man kan välja ska uppmuntras.
                            </li>
                            <li>
                                Utfällbara meny-knappar (som använd överst på sidor där man vill få plats med flera val).
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4>Tänk på att: </h4>
                <ul>
                    <li>
                        Se <a href="#generella_riktlinjer_knappar">Generella riktlinjer för knappar</a>.
                    </li>
                </ul>
            </UXComment> 
            </section>   
            <section id="success_button">
              <h3>Success button</h3>  
              <Scene>
                <Button color="success">success</Button>{' '}
                <Code>
                  {`<Button color="success">success</Button>`}
                </Code>
              </Scene>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                    <li>
                        För att uppmana användaren att avsluta en uppgift som hen har påbörjat.
                    </li>
                    <li>
                        Exempel: "Spara" och "Ok".
                    </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                    <li>
                        Komplettera med ett avbryt-alternativ (se <a href="/style/dialogs">Dialoger</a>).
                    </li>
                    <li>
                        Använd inte för destruktiva aktiviteter som ex "Ta bort fil" (se <a href="/style/dialogs">Dialoger</a>).
                    </li>
                    <li>
                        Var försiktig att göra knappen till default-val då slutanvändaren kan råka göra valet oavsiktligt genom ”Enter”.
                    </li>
                    <li>
                        Se även <a href="#generella_riktlinjer_knappar">Generella riktlinjer för knappar</a>.
                    </li>
                </ul>
              </UXComment>
            </section>
            <section id="danger_button">
              <h3>Danger button</h3>  
              <Scene>
                <Button color="danger">danger</Button>{' '}
                <Code>
                  {`<Button color="danger">danger</Button>`}
                </Code>
              </Scene>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                    <li>
                        För aktiviteter som är destruktiva.
                    </li>
                    <li>
                        Exempel: "Ta bort".
                    </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                    <li>
                        "Delete" ska följas av dialog där användaren får bekräfta sitt val (se <a href="/style/dialogs">Dialoger</a>)
                    </li>
                    <li>
                        Se även <a href="#generella_riktlinjer_knappar">Generella riktlinjer för knappar</a>.
                    </li>
                </ul>
              </UXComment>
            </section>
            <section id="disabled_button">
              <h3>Disabled Buttons</h3>
              <Scene>
                <Button color="primary" disabled>Primary button</Button>{' '}
                <Button color="secondary" disabled>Button</Button>
                <Code>
                  {`<Button color="secondary" size="lg" disabled>Button</Button>`}
                </Code>
                <Code>
                  {`<Button color="primary" size="lg" disabled>Primary button</Button>`}
                </Code>
              </Scene>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                    <li>
                        För aktiviteter som inte är möliga i ett specifikt tillstånd.
                    </li>
                    <li>
                        Exempel: "Spara" när man inte har fyllt i alla nödvändiga uppgifter i ett formulär.
                    </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                    <li>
                        Se <a href="#generella_riktlinjer_knappar">Generella riktlinjer för knappar.</a>
                    </li>
                </ul>
              </UXComment>
            </section>                  
          </Section>
        </Stage>           
        <Stage>
          <Section title="Länkar">
            <section id="blue_link">
              <h3>Blue Link</h3>  
              <Scene>
                <Button color="link">link</Button>
                <Code>
                  {`<Button color="link">link</Button>`}
                </Code>
              </Scene>
              <UXComment>
              
              </UXComment>
            </section>
            <section id="link_button">
              <h3>Link button</h3> 
              <p>TO DO: Länka till komponent</p>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                  <li>
                    Länka till en sida där man kan initiera en aktivitet
                  </li>
                  <li>
                    Namnge: "Till" + namnet på aktiviteten. Exempel: "Till ansökningen"
                  </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                  <li>
                    Använda sparsamt
                  </li>
                </ul>
              </UXComment>
            </section>  
            <section id="menu_link_button">
              <h3>Menu Link button</h3>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                  <li>
                    Lista menyalternativ i form av länkar under en meny-knapp
                  </li>
                </ul>
              </UXComment>
            </section>   
          </Section>
        </Stage>        
        <Stage>
          <Section title="Stöds inte i dagsläget">
            <Narrative>
              <p> Om man behöver använda komponenter nedan, motivera varför i KTH Style gruppen för att utvärdera om vi tar in den i riktlinjerna.</p>
            </Narrative>

            <h3>Different sizes</h3>
            <Scene>
              <Button color="primary" size="lg">Large Button</Button>{' '}
              <Button color="secondary" size="lg">Large Button</Button>
              <Code>
                {`<Button color="primary" size="lg">Large Button</Button>
                <Button color="secondary" size="lg">Large Button</Button>`}
              </Code>
            </Scene>
            <Scene>
              <Button color="primary" size="sm">Small Button</Button>{' '}
              <Button color="secondary" size="sm">Small Button</Button>
              <Code>
                {`<Button color="primary" size="sm">Small Button</Button>
                <Button color="secondary" size="sm">Small Button</Button>`}
              </Code>
            </Scene>
            <h3>Block Level Buttons</h3>
            <Scene>
              <Button color="primary" size="lg" block>Block level button</Button>
              <Button color="secondary" size="lg" block>Block level button</Button>
              <Code>
                {`<Button color="primary" size="lg" block>Block level button</Button>
                <Button color="secondary" size="lg" block>Block level button</Button>`}
              </Code>
            </Scene>               
          </Section>  
        </Stage>                  
      </Section>  
    </Page>
  )
}
