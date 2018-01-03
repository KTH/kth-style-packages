import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Links</h1>
      <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer knappar, länkar</a> där du får hjälp att välja rätt typ av komponent.</p>    

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
                  För infogad länk i svart innehållstext på vit bakgrund.
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
                    För infogad länk i vit innehållstext på färgad bakgrund.
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
                        För att navigera till annan del av (KTH) webb som har annan menynavigation.
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
                        För att navigera tillbaka till föregående menyalternativ i de fall då menyn inte erbjuder det.
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
                      För att navigera till toppen på sidan då långa sidor.
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
                    För att navigera till en sida där användaren kan initiera en viktig aktivitet 
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
                     
    </Page>
  )
}