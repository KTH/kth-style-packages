import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Rubriker, brödtext</h1>
      <section>
        <p>
          Det finns fyra rubriknivåer samt brödtext (se nedan).
        </p>
        <p>
          Läs gärna mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-14/">bakgrund</a> till val av rubriknivå och brödtext.
        </p>
        <h2>Välj typ av rubriker, brödtext</h2>
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
      </section>
    
     </Page>
  )
}
