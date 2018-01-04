import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'

import InputSection from './Forms/Input.jsx'
import InputGroupSection from './Forms/InputGroup.jsx'
import InputWithButton from './Forms/InputWithButton.jsx'
import ButtonShorthand from './Forms/ButtonShorthand.jsx'

export default function BasicPage (props) {
  return (
    <Page>
        
      <h1>Form</h1>
      <Section title="Text input">  
     
        <Stage> 
          <p> Komponent ska infogas </p>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För indata i form av text.
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Matcha fält till typen och storleken på data.
                    <ul>
                      <li>
                        Exempel: postnummer.
                      </li>
                    </ul>
                </li>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
      
      <Section title="Radio buttons">  
        <Stage> 
          <p> Komponent ska infogas </p>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För flervalssvar när bara ett val är möjligt (och alternativen är färre).
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
              <li>
                Alternativen ska inte vara fler än att de kan presenteras överskådligt på en rad. Annars använd rullgardinsmeny.
              </li>
              <li>
                Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
              </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
    
      <Section title="Drop down">  
        <Stage> 
            <p>Komponent ska infogas </p>
            <UXComment>
              <h4>Användning</h4>
              <ul>
                  <li>
                      För flervalssvar när bara ett val är möjligt (och alternativen är många).
                  </li>
                  <li>
                      Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                  </li>
              </ul>
              <h4>Tänk på att</h4>
              <ul>
                  <li>
                      Undvik rullgardinsmeny när det finns färre än tre alternativ. Visa dem istället som radio-knappar (se ovan).
                  </li>
                  <li>
                      Undvik rullgardinsmeny när indata är något som är välbekant för användaren och snabbare kan matas in än att välja från en lång lista
                  </li>
                  <li>
                       Överväg användningsfrekvens, lista de vanligaste valen först när det är möjligt.
                  </li>
                  <li>
                      Användaren ska kunna söka fram rätt alternativ i rullgardinsmenyn genom att använda bokstavstangenterna.
                  </li>
                  <li>
                      Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                  </li>    
              </ul>          
            </UXComment>
        </Stage>
      </Section>
      
      <Section title="Check box">  
        <Stage> 
          <p> Komponent ska infogas </p>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För flervalssvar när flera val är möjliga.
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
     
      <Section title="Date picker">  
        <Stage> 
          <p> Komponent ska infogas </p>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                  För val av datum.
                </li>
                <li>
                  Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
      
    </Page>
  )
}
