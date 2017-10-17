import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'
import UXComment from '../UXComment.jsx'

import Alert from '../../../lib/Alert.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <Section title="Alerts">
        <Narrative>
          <p>Läs mer om hur man informera användare i olika situationer under <a href="/style/guidelines/information">Riktlinjer information</a>. </p>
        </Narrative>
      </Section>
      <Section title="Information_Alert">
        <Stage>
          <h2>Information Alert</h2>
          <Scene>
            <Alert color="info" aria-live="polite">
              <p>Some cool text in a <b>info</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="info" aria-live="polite">
  <p>Some cool text in a <b>info</b> alert box!</p>
  </Alert>`}
            </Code>
          </Scene>
        </Stage>
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
      </Section>
      
      <Section title="Error_Alert">
        <Stage>
          <h2>Error Alert</h2>
          <Scene>
            <Alert color="danger" aria-live="polite">
              <p>Some cool text in a <b>danger</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="danger" aria-live="polite">
  <p>Some cool text in a <b>danger</b> alert box!</p>
</Alert>`}
            </Code>
          </Scene>
        </Stage>
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
      </Section>  

      <Section title="Success_Alert">
        <Stage>
          <h2>Success Alert</h2>
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
          <h3>With close button</h3>
          <UXComment>
           <h4>Användning</h4>
                <ul>
                  <li>
                    För längre meddelanden där informationen behöver läsas mer nogrannt.
                  </li>
                </ul>
          </UXComment>
            <Scene>
            <Alert color="success" >
              <p>Some cool text in a <b>success</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="success">
  <p>Some cool text in a <b>success</b> alert box!</p>
  </Alert>`}
            </Code>
          </Scene>
        </Stage>
      <h3>Disappears after 5 seconds</h3>
        <UXComment>
           <h4>Användning</h4>
                <ul>
                  <li>
                    För korta meddelanden där informationen inte behöver läsas. Exempel: "Saved"
                  </li>
                </ul>
          </UXComment>
      </Section> 
      
      <Section> 
      <h2>Olika andra varianter av alerts - ha med?</h2>
      <Stage>
          <Scene>
            <Alert color="success">
              <p>Some cool text in a <b>success</b> alert box!</p>
            </Alert>
            <Alert color="info" aria-live="polite">
              <p>Some cool text in a <b>info</b> alert box!</p>
            </Alert>
            <Alert color="danger" aria-live="polite">
              <p>Some cool text in a <b>danger</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="success">
  <p>Some cool text in a <b>success</b> alert box!</p>
  </Alert>
  <Alert color="info" aria-live="polite">
  <p>Some cool text in a <b>info</b> alert box!</p>
  </Alert>
  <Alert color="danger" aria-live="polite">
  <p>Some cool text in a <b>danger</b> alert box!</p>
</Alert>`}
            </Code>
          </Scene>

          <h3>Alert box with close button</h3>
          <Scene>
            <Alert onClose={() => {}}>
              <p>Some cool text in a <b>success</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert onClose={() => {}}>
  <p>Some cool text in a <b>success</b> alert box!</p>
</Alert>`}
            </Code>  
          </Scene>
          <h3>Alert box with header</h3>
          <Scene>
            <Alert onClose={() => {}}>
              <span>
                <h4>Attention!</h4>
                <p>Some cool text in a <b>success</b> alert box!</p>
              </span>
            </Alert>
            <Code>
{`<Alert onClose={() => {}}>
  <span>
    <h4>Attention!</h4>
    <p>Some cool text in a <b>success</b> alert box!</p>
  </span>
</Alert>`}
            </Code>  
          </Scene>
        </Stage>
     </Section>   
    </Page>
  )
}
