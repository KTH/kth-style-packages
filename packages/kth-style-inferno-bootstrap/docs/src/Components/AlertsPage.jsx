import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'
import UXComment from '../UXComment.jsx'

import Alert from '../../../lib/Alert.jsx'

export default function BasicPage (props) {
  return (
    <Page>

      <Section title="Alerts">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
        <Stage>
          <Scene>
            <Alert color="success">
              <p>Some cool text in a <b>success</b> alert box!</p>
            </Alert>
            <Alert color="info">
              <p>Some cool text in a <b>info</b> alert box!</p>
            </Alert>
            <Alert color="danger">
              <p>Some cool text in a <b>danger</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="success">
  <p>Some cool text in a <b>success</b> alert box!</p>
  </Alert>
  <Alert color="info">
  <p>Some cool text in a <b>info</b> alert box!</p>
  </Alert>
  <Alert color="danger">
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
  <p>Some cool text in a <b>danger</b> alert box!</p>
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
    <p>Some cool text in a <b>danger</b> alert box!</p>
  </span>
</Alert>`}
            </Code>  
          </Scene>
        </Stage>
      </Section>
      
      <Section title="Information_Alert">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
        <Stage>
          <h2>Information Alert</h2>
          <Scene>
            <Alert color="info">
              <p>Some cool text in a <b>info</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="info">
  <p>Some cool text in a <b>info</b> alert box!</p>
  </Alert>`}
            </Code>
          </Scene>
        </Stage>
      </Section>
      
      <Section title="Error_Alert">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
        <Stage>
          <h2>Error Alert</h2>
          <Scene>
            <Alert color="danger">
              <p>Some cool text in a <b>danger</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="danger">
  <p>Some cool text in a <b>danger</b> alert box!</p>
</Alert>`}
            </Code>
          </Scene>
        </Stage>
      </Section>  

      <Section title="Success_Alert">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
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
                </ul>
                <h4>Tänk på att</h4>
                <ul>
                   <li>
                    Placera överst på sidan och se till att fokus är där.
                  </li>
                  <li>
                    Se <a href="#generellariktlinjerinformation">Generella riktlinjer information</a> nedan.
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
            <Alert color="success">
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
    </Page>
  )
}
