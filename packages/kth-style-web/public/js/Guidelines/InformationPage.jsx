
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Information</h1>
          <section>
            <p>
                Systemet ska konsekvent ge användaren den information/ återkoppling hen behöver för att kunna utföra sina aktiviteter och nå sina mål på ett tillfredställande sätt. Användaren ska även när så behövs kunna efterfråga information.
            </p>
            <p>
                Det finns fyra olika situationer när man ska ge information/ återkoppling. Tabellen nedan ska hjälpa dig välja rätt informationskomponent.
            </p>
            <p>
                Om du är intresserad, läs mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-9/">bakgrund</a> till varför informationskomponenterna ser ut och beter sig som det gör.
            </p>
            <h2>Välj informationskomponent</h2>
            <table class="table">
              <thead class="thead-default">
                <tr>
                  <th>Informationskomponent</th>
                  <th>Används för att</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/style/api/components/alerts#alert_success">Alert - Success</a>
                  </td>
                  <td>Bekräfta att man lyckats utföra en handling</td>
                </tr>
                <tr>
                  <td>
                      <a href="/style/api/components/alerts#alert_warning">Alert - Information</a>
                  </td>
                  <td>Informera om att något har förändrats på en sida eller annat som användaren behöver bli informerad om (men ej ha efterfrågat)</td>
                </tr>
                <tr>
                  <td>
                      Modal – Information
                  </td>
                  <td>Ge ytterligare information när användaren efterfrågar det</td>
                </tr>
                <tr>
                  <td>
                      <a href="/style/api/components/alerts#alert_danger">Alert - ErrorMessage</a> 
                  </td>
                  <td>Ge ett felmeddelande</td>
                </tr>
              </tbody>
            </table>
          </section>
    </Page>
  )
}
