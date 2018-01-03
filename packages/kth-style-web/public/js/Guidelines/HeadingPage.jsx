import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Rubriker, brödtext</h1>
        <p>
          Använd rubriker för att ge struktur och mening till längre textinnehåll och brödtext för textinnehåll. 
        </p>
        <p>
          Det finns fyra rubriknivåer samt brödtext. Välj komponenttyp utifrån användning (se tabellen nedan).
        </p>
        <p>
          Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-14/">bakgrund till val av rubriknivå och brödtext</a>.
        </p>
       <Section title="Välj typ av rubriker, brödtext">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/style/api/content/typography#titel">Titel</a></td>
              <td>Huvudrubrik (h1), ska inte användas längre ned på sidor och ska bara förekomma en gång på varje sida.</td>
            </tr>
            <tr>
               <td><a href="/style/api/content/typography#rubrikniva_2">Rubriknivå 2</a></td>
              <td>Andra rubriknivå (h2).</td>
            </tr>
            <tr>
              <td><a href="/style/api/content/typography#rubrikniva_3">Rubriknivå 3</a></td>
              <td>Tredje rubriknivå (h3).</td>
            </tr>
            <tr>
              <td><td><a href="/style/api/content/typography#rubrikniva_4">Rubriknivå 4</a></td></td>
              <td>Fjärde rubriknivå (h4).</td>
            </tr>
            <tr>
              <td>Brödtext</td>
              <td>Innehållstext under rubriker.</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Generella riktlinjer för rubriker">
        <ul>
          <li>Välj rubriker som beskriver innehållet.</li>
          <li>Titeln ska vara unik och ska börja med det unika och mest relevanta</li>
         <li>När de finns flera sidor som hör i hop, t ex en wizard I flera steg, inkludera aktuellt steg i titeln.</li>
          <li>Använd korta rubriker för att gruppera relaterade paragrafer.</li>
         <li>Hoppa inte över rubriknivåer då det försvårar förståelse av sidostrukturen och läsbarheten.</li>
        </ul>
      </Section>
     </Page>
  )
}
