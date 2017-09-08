import { Section, Stage, Scene, Code, Narrative, UXComment } from '../components.jsx'

import MyComponent from '../../../lib/MyComponent.jsx'

export default function () {
  return (
    <Section title="MyComponent">
      <Narrative>
        <p>Yada yada.</p>
        <UXComment>
          <h2>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</h2>
          <p>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</p>
        </UXComment>
        <UXComment>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</UXComment>
      </Narrative>
      <Stage>
        <h3>Standard MyComponent</h3>
        <Scene>
          <MyComponent color="success">
            Some cool text in a <b>success</b> alert box!
          </MyComponent>
          <Code>
{`<MyComponent color="success">
Some cool text in a <b>success</b> alert box!
</MyComponent>`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}
