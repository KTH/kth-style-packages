import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Dialoger</h1>
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

      <section>
        <h2>Flytta till Komponenter: Olika typer av dialoger</h2>
        <h3>Confirm</h3>
        <p> Infoga komponent här...</p>
        <h4>Används</h4>
        <ul>
            <li>
                För att att användaren ska bekräfta ett gjort val som inte kan ångras.
            </li>
            <li>
                Exempel: ta bort fil.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Det är extra viktigt för dialoger att tänka på namngivning av knapparna, se <a href="/style/guidelines/buttonorlink/#generella_riktlinjer_for_lank_och_knapp">Generella riktlinjer för länk och knapp</a>.
            </li>
        </ul>

        <h3>Choose</h3>
        <p> Infoga komponent här...</p>
        <h4>Används</h4>
        <ul>
            <li>
                För att användaren ska göra val som är mindre riskabelt (det går att ångra).
            </li>
            <li>
                Exempel:
                <ul>
                    <li>
                        När man vill uppmuntra att avsluta något som användare har initierat.
                    </li>
                    <li>
                        Bifoga bild.
                    </li>
                </ul>
             </li>
           </ul>
           <h4>Tänk på att</h4>
           <ul>
             <li>
                Det är extra viktigt för dialoger att tänka på namngivning av knapparna, se <a href="/style/guidelines/buttonorlink/#generella_riktlinjer_for_lank_och_knapp">Generella riktlinjer för länk och knapp</a>.
             </li>
           </ul>
         </section>
    </Page>
  )
}
