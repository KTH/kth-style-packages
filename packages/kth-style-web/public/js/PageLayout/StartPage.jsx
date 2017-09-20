import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>

      <Section title="Introduktion">
        <Narrative>
          <p>Här kan vi skriva lite text som sidlayouterna.</p>
        </Narrative>
      </Section>

      <Section title="Innehållssidor">
        <Narrative>
          <p>Här kan vi skriva lite text om layout av innehållssidor.</p>
        </Narrative>
      </Section>

      <Section title="Webbappar">
        <Narrative>
          <p>Här kan vi skriva lite text om layout av webbappar.</p>
        </Narrative>
      </Section>
      
    </Page>
  )
}
