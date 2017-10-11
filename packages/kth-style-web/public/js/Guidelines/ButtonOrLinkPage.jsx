
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Knappar och länkar</h1>
      <p>
          Knappar och länkar ger användaren olika förväntningar på vad som ska ske när man klickar på dem. Eftersom en användare ska förstå innan man klickar vad som kommer att hända är det viktigt att välja rätt komponent. 
      </p>
      <Section id="link_or_buttons">
      <h2>Välj om det ska vara en knapp eller Länk</h2>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för att</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#links">Länkar</a></td>
              <td>Leder användaren vidare till en annan del av webben</td>
            </tr>
            <tr>
              <td><a href="#buttons">Knappar</a></td>
              <td>Initierar en aktivitet. Ett klick på en knapp får något att hända. Det kan vara att ett formulär man fyllt i skickas in eller att en sökning utförs. Nästan alltid är en del av händelsen att användaren kommer till en ny sida – men det måste hända mer än så.</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#link_button">Link button</a></td>
              <td>
                Finns bara en variant och ska användas sparsamt för att länka vidare till en sida där man kan initiera en viktig aktivitet.
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section id="buttons">
      <h2>Knappar</h2>
        <p>
          Knapp används för att initiera en aktivitet. Ett klick på en knapp får något att hända. Det kan vara att ett formulär man fyllt i skickas in eller att en sökning utförs. Nästan alltid är en del av händelsen att användaren kommer till en ny sida – men det måste hända mer än så. Läs mer under <a href="/style/linksorbuttons">Välj om länk eller knapp</a>.
        </p>
        <p>
          Det finns finns fem olika typer av knappar. Välj knapp utifrån användning (se nedan).
        </p>
        <p>
          Läs gärna mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-10/">bakgrund</a>.
        </p>
      <h2>Välj typ av knapp</h2>
      <table class="table" data-example="testtest">
        <thead class="thead-default">
          <tr>
            <th>Namn</th>
            <th>Användning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="/style/api/components/buttons#buttons">Primary - Button</a></td>
            <td>För primära aktiviteter (man vill uppmuntra användaren att utföra)</td>
          </tr>
          <tr>
            <td><a href="/style/api/components/buttons#buttons">Submit - Button</a></td>
            <td>För att uppmana användaren att avsluta en uppgift som hen har påbörjat</td>
          </tr>
          <tr>
            <td><a href="/style/api/components/buttons#buttons">Secondary - Button</a></td>
            <td>För sekundära aktiviteter (man kan utföra, men uppmanas inte till det)</td>
          </tr>
          <tr>
            <td><a href="/style/api/components/buttons#buttons">Delete - Button</a></td>
            <td>För aktiviteter som är destruktiva</td>
          </tr>
          <tr>
            <td><a href="/style/api/components/buttons#disabled_button">Disabled - Button</a></td>
            <td>För aktiviteter som inte är möjliga i ett specifikt tillstånd</td>
          </tr>
        </tbody>
      </table>
   </Section>
      
   <Section id="links">
    <h2>Länkar</h2>
   </Section>  
        
        <section id="generella_riktlinjer_link_knapp">
          <h2>Generella riktlinjer för länk och knapp</h2>
          <p>Specifika riktlinjer hittar du vid respektive komponent (tänk på att ha checkat i "UX comment", högst upp på sidan till höger).</p>
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
