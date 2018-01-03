import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Knappar och länkar</h1>
      <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer knappar, länkar</a> där du får hjälp att välja rätt typ av komponent.</p>    

       
      <h2>Knappar</h2>
        <Stage>
          <Section title="Primary button">  
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
            </Section>
          </Stage>
          <Stage>
            <Section title="Secondary button">  
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
                                Dialoger där inget av alternativen man kan välja ska uppmuntras.
                            </li>
                            <li>
                                "Avbryt".
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
          </Section>   
        </Stage>
        <Stage>   
            <Section title="Success button">  
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
                        För aktiviteter som användaren har påbörjat (man vill uppmana användaren att slutföra).
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
            </Section>
          </Stage>
          <Stage>
            <Section title="Danger button">  
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
                        För destruktiva aktiviteter.
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
            </Section>
          </Stage>
          <Stage>
            <Section title="Disabled Button">
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
            </Section>                  
           </Stage> 
    
        
          
              
         <Stage>
            <Section title="Menu Link button">
              <UXComment>
                <h4>Användning</h4>
                <ul>
                  <li>
                    Lista menyalternativ i form av länkar under en meny-knapp
                  </li>
                </ul>
              </UXComment>
            </Section>                  
         </Stage>
             
       <h2>Stöds inte i dagsläget</h2>
       <p> Om man behöver använda komponenter nedan, motivera varför i KTH Style gruppen för att utvärdera om vi tar in den i riktlinjerna.</p>
       <Stage>
         <Section title="Different sizes">
           <h3>Big size</h3>
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
    </Page>
  )
}
