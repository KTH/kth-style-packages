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
      
      <Section title="Alert_Information">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
        <Stage>
          <h3>Alert - Information</h3>
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
      
      <Section title="Alert_Error">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
        <Stage>
          <h3>Alert - Error</h3>
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

      <Section title="Alert_Success">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        </Narrative>
        <Stage>
          <h3>Alert - Success</h3>
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
      </Section>
      
    </Page>
  )
}
