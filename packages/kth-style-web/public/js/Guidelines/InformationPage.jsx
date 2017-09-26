
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
                Det finns tre olika typer av information. Välj återkoppling utifrån användning (se nedan).
            </p>
            <p>
                Om du är intresserad, läs mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-9/">bakgrund</a> till varför informationsrutorna ser ut och beter sig som det gör.
            </p>
            <h2>Välj typ av information</h2>
            <table class="table">
              <thead class="thead-default">
                <tr>
                  <th>Namn</th>
                  <th>Användning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bekräfta lyckad aktivitet</td>
                  <td>För att bekräfta att man lyckats utföra en tidigare handling</td>
                </tr>
                <tr>
                  <td>Informera</td>
                  <td>För att informera att något har förändrats på en sida eller annat som användaren behöver bli informerad om</td>
                </tr>
                <tr>
                  <td>Ge felmeddelande</td>
                  <td>För att informera om att något har gått fel</td>
                </tr>
              </tbody>
            </table>
          </section>
    </Page>
  )
}
