import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer dialoger</h1>
      <section>
        <p>
            Dialoger används då man behöver direkt input från användaren. Användningen ska minimeras då de avbryter användarens flöde men måste användas vid viktiga val.
        </p>
        <p>
            Det finns finns två olika typer av dialoger. Välj komponenttyp utifrån användning (se tabellen nedan).
        </p>
        <p>
          Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-16/">bakgrund till val av dialoger</a>.
        </p>
      </section>
      
      <Section title="Välj typ av dialog">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Confirm</td>
              <td>Bekräfta en destruktiv aktivitet (t ex radera) som användaren gjort</td>
            </tr>
            <tr>
              <td>Choose</td>
              <td>Presentera val som användaren kan göra som inte är destruktiva (det går att ångra)</td>
            </tr>
             </tbody>
        </table>
      </Section>

    </Page>
  )
}
