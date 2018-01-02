import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Knappar och länkar</h1>
      <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer för knappar och länkar</a>.</p>    

       
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
    
        
          <h2>Länkar</h2>
          <Stage>
            <Section title="Blue link">  
              <Scene>
                <Button color="link">link</Button>
                <Code>
                  {`<Button color="link">link</Button>`}
                </Code>
              </Scene>
              
              <UXComment>
              <h4>Användning</h4>
              <ul>
                <li>
                  För länk som infogas i svart text på vit bakgrund.
                </li>
                <li>
                  Exempel: se <a href="#riktlinjer_bla_vit_bort">Riktlinjer för länk: Blå, Vit, Bort</a>
                </li>
              </ul>
              </UXComment>
            </Section>                  
         </Stage> 
      
          <Stage>
            <Section title="White link">
              <p>
                TO DO: Infoga komponent här
              </p>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                  <li>
                    För länk som infogas i vit text på färgad bakgrund
                  </li>
                  <li>
                    Exempel: se <a href="#riktlinjer_bla_vit_bort">Riktlinjer för länk: Blå, Vit, Bort</a>
                  </li>
                </ul>
              </UXComment>
            </Section>                  
         </Stage>
            
         <Stage>
            <Section title="Away link">
              <p>
                TO DO: Infoga komponent här
              </p>
              <UXComment>
                <h4>Användning:</h4>
                <ul>
                    <li>
                        När man länkar till annan del av (KTH) webb som har en annan navigation (man kan inte kan använda samma meny för att navigera tillbaka).
                    </li>
                    <li>
                        Exempel:
                        <ul>
                            <li>
                                Länk på Programwebb till Student på KTH.
                            </li>
                            <li>
                                 Exempel: se <a href="#riktlinjer_bla_vit_bort">Riktlinjer för länk: Blå, Vit, Bort</a>
                            </li>
                        </ul>
                    </li>
                </ul>
              </UXComment>
            </Section>                  
         </Stage>
             
         <Stage>
            <Section title="Back link">
              <p>
                TO DO: Infoga komponent här
              </p>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                    <li>
                        För att enkelt kunna navigera tillbaka till föregående menyalternativ i de fall då menyn inte erbjuder det
                    </li>
                    <li>
                       Om vänstermeny: placera ovanför menyn, under headern på sidan.
                    </li>
                    <li>
                        Om ingen vänstermeny: placera under headern till vänster på sidan.
                    </li>
                    <li>
                        Exempel: "Student på KTH".
                    </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                    <li>
                        Namnge länken till namnet på sidan man går tillbaka till.
                    </li>
                </ul>
               </UXComment>
             </Section>                  
         </Stage>
              
         <Stage>
            <Section title="Up link">
              <p>
                  TO DO: Infoga komponent här
              </p>
              <UXComment>
              <h4>Användning</h4>
              <ul>
                  <li>
                      För att länka till toppen på sidan då långa sidor.
                  </li>
                  <li>
                      Placering: Längst ner på sidan till höger.
                  </li>
              </ul>
              </UXComment>
            </Section>                  
         </Stage>
           
         <Stage>
            <Section title="Link button"> 
              <p>TO DO: Infoga komponent här</p>
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
