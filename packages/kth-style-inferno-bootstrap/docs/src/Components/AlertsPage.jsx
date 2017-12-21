import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'

import Alert from '../../../lib/Alert.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Alerts</h1>
      <p>Läs först <a href="/style/guidelines/information">Riktlinjer information/ återkoppling</a> där du får överblick över hur du informerar i olika situationer och får hjälp att välja rätt typ av informationskomponent.</p>
    
      <Stage> 
        <section id="information_alert">
        <h3>Information Alert</h3>  
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
              För att informera användaren på en sida när användaren inte efterfrågat informationen.
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
        </section>
      </Stage>
      
      <Stage>
        <section id="error_alert">
          <h3>Error Alert</h3>  
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
              Om felet inte kommaer att gå att undvika: använd "Error alert" för att informera om att något har gått fel.
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
       </section>
     </Stage>
     <Stage>
        <section id="success_alert">
        <h3>Success Alert</h3>    
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
                    För att bekräfta att användaren lyckats utföra en tidigare handling.
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
       </section>
    </Stage>
      
    <Stage>
        <h3>Varianter av Alerts</h3>
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
    </Page>
  )
}
