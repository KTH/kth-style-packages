import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'

import InputSection from './Forms/Input.jsx'
import InputGroupSection from './Forms/InputGroup.jsx'
import InputWithButton from './Forms/InputWithButton.jsx'
import ButtonShorthand from './Forms/ButtonShorthand.jsx'

export default function BasicPage (props) {
  return (
    <Page>
        
      <h1>Form</h1>
      <p>Läs först <a href="/style/guidelines/form">Riktlinjer formulär</a> där du får hjälp att välja rätt typ av formulärskomponenter.</p>
    
      <Section title="Information Alert">  
        <Stage> 
          <Scene>
              <Alert color="info" aria-live="polite">
                <p>Some text in a <b>Information alert</b></p>
              </Alert>
              <Code>
  {`<Alert color="info" aria-live="polite">
    <p>Some text in a <b>Information alert</b></p>
    </Alert>`}
              </Code>
          </Scene>

          <UXComment>
            <h4>Användning</h4>
            <ul>
              <li>
                För att informera om att något har förändrats på en sida eller annat som användaren behöver bli informerad om (men ej ha efterfrågat)
              </li>
              <li>
                Se .. hur man informerar när användaren har efterfrågat informationen...länk till modal
              </li>
              <li>
                Placera
                <ul>
                  <li>
                    Överst på sidan (vilket kan innebära att man behöver "refrecha" sidan)
                  </li>
                  <li>
                   Eller när det behövs, kila in den på rätt plats på sidan (t ex för information i schemat som gäller visst datum).
                  </li>
                </ul>
              </li>
            </ul>
              <h4>Tänk på att</h4>
              <ul>
                <li>
                  Se <a href="/style/guidelines/information#general_guidelines_information">Generella riktlinjer information</a>.
                </li>
              </ul>
            </UXComment> 
          </Stage>
        </Section>
    
        <Section title="Error Alert">  
          <Stage>
          <Scene>
            <Alert color="danger" aria-live="polite">
              <p>Some text in a <b>Error alert</b></p>
            </Alert>
            <Code>
{`<Alert color="danger" aria-live="polite">
  <p>Some text in a <b>Error alert</b></p>
</Alert>`}
            </Code>
          </Scene>
 
        <UXComment> 
          <h4>Användning</h4>
          <ul>
            <li>
              Först fundera på om det går att hjälpa användaren att undvika felet (länk till Tillgänglig kod).
            </li>
            <li>
              Om felet inte går att undvika: använd "Error alert" för att informera om att något har gått fel.
            </li>
            <li>
              Placera
            <ul>
              <li>
                  Överst på sidan (vilket kan innebära att man behöver "refrecha" sidan).
              </li>
              <li>
                  För flera fel på en sida (t ex formulär), komplettera med att också markera de fält som är felaktiga med anslutande röd text.
              </li>
            </ul>
            </li>
          </ul>
          <h4>Tänk på att</h4>
          <ul>
            <li>
              Ge tydliga instruktioner som:
            <ul>
              <li>
                Hjälper användaren att hitta var problemet är.
              </li>
              <li>
                Förklarar vad som hänt, varför det blivit fel.
              </li>
              <li>
                Föreslår hur användaren ska göra för att åtgärda felet.
              </li>
            </ul>
            </li>
            <li>
              Se <a href="/style/guidelines/information#general_guidelines_information">Generella riktlinjer information</a>.
            </li>
          </ul>
         </UXComment> 
        </Stage>
      </Section>
      <Section title="Success Alert">    
        <Stage>
          <Scene>
            <Alert color="success" >
              <p>Some text in a <b>Success alert</b></p>
            </Alert>
            <Code>
{`<Alert color="success">
  <p>Some text in a <b>Success alert</b></p>
  </Alert>`}
            </Code>
          </Scene>
           <UXComment>
              <h4>Användning</h4>
                <ul>
                  <li>
                    För att bekräfta att användaren lyckats utföra en handling.
                  </li>
                  <li>
                    För längre meddelanden där informationen behöver läsas mer nogrannt.
                  </li>
                  <li>
                    Placera: överst på sidan (vilket kan innebära att man behöver "refrecha" sidan)
                  </li>
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                  <li>
                    Se <a href="/style/guidelines/information#general_guidelines_information">Generella riktlinjer information</a>.
                  </li>
                </ul>
          </UXComment>
          
          <h3>Variant av Success alert som försvinner efter 5 sekunder</h3>
          <br></br>
          <p>TO DO: Lägg till komponent som försvinner efter 5 sekunder.</p>
          <UXComment>
             <h4>Användning</h4>
                  <ul>
                    <li>
                      För korta meddelanden där informationen är kort och inte behöver granskas. Exempel: "Saved"
                    </li>
                  </ul>
            </UXComment>
          </Stage>
        </Section>
        <Section title="Varianter av Alerts">
           <Stage>
            <Scene>
                <Alert onClose={() => {}}>
                  <p>Some text in a Success alert with close button</p>
                </Alert>
                <Code>
    {`<Alert onClose={() => {}}>
      <p>Some text in a Success alert with close button</b></p>
    </Alert>`}
                </Code>  
              </Scene>
          
              <Scene>
                <Alert onClose={() => {}}>
                  <span>
                    <h4>Attention!</h4>
                    <p>Success alert with heading</p>
                  </span>
                </Alert>
                <Code>
    {`<Alert onClose={() => {}}>
      <span>
        <h4>Attention!</h4>
        <p>Success alert with heading</p>
      </span>
    </Alert>`}
                </Code>  
              </Scene>
           </Stage>
        </Section>
    </Page>
  )
}

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
