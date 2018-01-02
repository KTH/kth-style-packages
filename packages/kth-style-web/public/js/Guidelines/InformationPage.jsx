
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Information/ återkoppling</h1>
          <p>
            Systemet ska konsekvent ge användaren den information/ återkoppling hen behöver för att kunna utföra sina aktiviteter och nå sina mål på ett tillfredställande sätt. Användaren ska även när så behövs kunna efterfråga information.
          </p>
          <p>
            Det finns fyra olika situationer när man ska ge information/ återkoppling. Tabellen nedan ska hjälpa dig välja rätt informationskomponent.
          </p>
          <p>
            Om du är intresserad, läs mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-9/">bakgrund till val av informationskomponenter</a>.
          </p>
          <Section title="Välj informationskomponent">
            <table class="table">
              <thead class="thead-default">
                <tr>
                  <th>Komponenttyp</th>
                  <th>Användning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/style/api/components/alerts#success_alert">Success alert</a>
                  </td>
                  <td>För att bekräfta att användaren har lyckats utföra en handling</td>
                </tr>
                <tr>
                  <td>
                      <a href="/style/api/components/alerts#information_alert">Information alert</a>
                  </td>
                  <td>För att informera om att något har förändrats på en sida eller annat som användaren behöver bli informerad om (men ej ha efterfrågat)</td>
                </tr>
                <tr>
                  <td>
                      <a href="/style/api/components/modal#information_modal">Information modal</a>
                  </td>
                  <td>För att ge ytterligare information när användaren efterfrågar det</td>
                </tr>
                <tr>
                  <td>
                      <a href="/style/api/components/alerts#error_alert">Error alert</a> 
                  </td>
                  <td>För att informera om att något har gått fel</td>
                </tr>
              </tbody>
            </table>
          </Section>
      
          <Section title="Generella riktlinjer information">
            <p>Specifika riktlinjer hittar du vid respektive imformationskomponent (tänk på att ha checkat i "UX comment", högst upp på sidan till höger).</p>
            <p>Säkerställ att instruktioner är tydliga och lätta att förstå genom att:</p>
            <ul>
              <li>Undvik tekniskt språk</li>
              <li>Beskriv det indataformat som krävs</li>
            </ul>
          </Section>
    </Page>
  )
}
