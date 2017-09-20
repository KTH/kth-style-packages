import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>

      <h1>Riktlinjer</h1>
      <img className="HeroImage" src="/static/img/Guidelines.png" />
      

      <Section title="Introduktion">
        <Narrative>
          <p>Här kan vi skriva lite text.</p>
        </Narrative>
      </Section>

      <Section title="Vad är användbarhet?">
        <Narrative>
          <p>Här kan vi skriva lite text om användbarhet.</p>
        </Narrative>
      </Section>

      <Section title="Vad är tillgänglighet?">
        <Narrative>
          <p>Här kan vi skriva lite text om tillgänglighet.</p>
        </Narrative>
      </Section>
      
    </Page>
  )
}
