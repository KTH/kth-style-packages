
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <section>
        <h1>Välj om länk eller knapp</h1>
  
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>Namn</th>
                <th>Användning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Länk</td>
                <td>För att leda vidare användaren till en annan del av webben</td>
              </tr>
              <tr>
                <td>Knapp</td>
                <td>För att initiera en aktivitet. Ett klick på en knapp får något att hända. Det kan vara att ett formulär man fyllt i skickas in eller att en sökning utförs. Nästan alltid är en del av händelsen att användaren kommer till en ny sida – men det måste hända mer än så.</td>
              </tr>
              <tr>
                <td><b>Knappar som länkar</b></td>
                <td></td>
              </tr>
              <tr>
                <td>Knapp: Primary A</td>
                <td>
                 <p>
                  Länk till en sida där man kan initiera en aktivitet.
                 </p>
                 <h4>Tänk på att</h4>
                 <ul>
                  <li>
                    Använd sparsamt.
                  </li>
                </ul>
                </td>
              </tr>
              <tr>
                <td>Knapp: Secondary A</td>
                <td>
                  För menyalternativ i form av länkar under en meny-knapp
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="generella_riktlinjer_link_knapp">
          <h2>Generella riktlinjer för länk och knapp</h2>
          <h3>Namngivning</h3>
          <ul>
            <li>
              Det är viktigt att man namnger interaktiva element konsekvent. Liknande handling ska tex ha samma namngivning på en knapp.
            </li>
            <li>
              Var specifik så att användarna förstår vad som händer när de klickar. Exempel
              <ul>
                <li>
                    Knapp: skriv till exempel ”Spara sidan”, ”Skicka kursenkät” "Avsluta” och inte bara ”Ja” eller ”Ok”.
                </li>
                <li>
                    Länk: namnge länkar så att de beskriver innehållet de länkar till.
                    <ul>
                        <li>
                            Undvika vaga länktexter som “Klicka här” eller “Läs mer”.
                        </li>
                        <li>
                            Ge i stället relevant information om vad innehållet länkar till, document typ, storlek, t ex 'Proposal Documents (RTF, 20MB)'
                        </li>
                    </ul>
                  </li>
                  <li>
                    Knapp som länkar:
                    <ul>
                        <li>
                            Namnge inte knappen som en aktivitet (verb-form) då användaren inte utför en aktivitet utan endast länkas vidare till annan del av webben.
                        </li>
                        <li>
                            Avsluta namnet på knappen med en ikon för att markera att det är en länk.
                        </li>
                        <li>
                            Exempel: Ansökning -> (istf Ansöka).
                        </li>
                    </ul>
                  </li>
                </ul>  
              </li>
            </ul>     
        </section>
    </Page>
  )
}
