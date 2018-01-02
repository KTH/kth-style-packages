import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Rubriker, brödtext</h1>
        <p>
          Det finns fyra rubriknivåer samt brödtext (se nedan).
        </p>
        <p>
          Läs gärna mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-14/">bakgrund</a> till val av rubriknivå och brödtext.
        </p>
       <Section title="Välj typ av rubriker, brödtext">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Namn</th>
              <th>Användning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Titel (H1)</td>
              <td>Som huvudrubrik, ska inte användas längre ned på sidor och ska bara förekomma en gång på varje sida.</td>
            </tr>
            <tr>
              <td>Rubriknivå 2 (H2)</td>
              <td>Som andra rubriknivå.</td>
            </tr>
            <tr>
              <td>Rubriknivå 3 (H3)</td>
              <td>Som tredje rubriknivå.</td>
            </tr>
            <tr>
              <td>Rubriknivå 4 (H4)</td>
              <td>Som fjärde rubriknivå.</td>
            </tr>
            <tr>
              <td>Brödtext</td>
              <td>Som innehållstext under rubriker.</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Generella riktlinjer för rubriker">
        <ul>
          <li>Välj rubriker som beskriver innehållet.</li>
          <li>Titeln ska vara unik och ska börja med det unika och mest relevanta</li>
         <li>När de finns flera sidor som hör i hop, t ex en wizard I flera steg, inkludera aktuellt steg i titeln.</li>
          <li>Använd rubriker för att ge struktur och mening till längre textinnehåll. Använd korta rubriker för att gruppera relaterade paragrafer.</li>
         <li>Hoppa inte över rubriknivåer då det försvårar förståelse av sidostrukturen och läsbarheten.</li>
        </ul>
      </Section>
     </Page>
  )
}
