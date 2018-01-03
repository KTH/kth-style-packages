
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer knappar, länkar</h1>
      <p>
          Knappar och länkar ger användaren olika förväntningar på vad som ska ske när man klickar på dem. Eftersom en användare ska förstå innan man klickar vad som kommer att hända är det viktigt att välja rätt komponenttyp (se tabellen nedan).
      </p>
       
     <Section title="Välj om det ska vara en knapp eller länk">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#valj_typ_av_lank">Länk (välj typ)</a></td>
              <td>Navigera till en annan del av webben</td>
            </tr>
            <tr>
              <td><a href="#valj_typ_av_knapp">Knapp (välj typ)</a></td>
              <td>Initiera en aktivitet. Ett klick på en knapp får något att hända. Det kan vara att ett formulär man fyllt i skickas in eller att en sökning utförs. Nästan alltid är en del av händelsen att användaren kommer till en ny sida – men det måste hända mer än så.</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#link_button">Link button</a></td>
              <td>
                Navigera till en sida där användaren kan initiera en viktig aktivitet. Notera att det finns bara en variant och att den ska användas sparsamt.
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Knappar">
        <p>Knapp används för att initiera en aktivitet. Ett klick på en knapp får något att hända. Det kan vara att ett formulär man fyllt i skickas in eller att en sökning utförs. Nästan alltid är en del av händelsen att användaren kommer till en ny sida – men det måste hända mer än så.</p>
        <p>Det finns finns fem olika typer av knappar. Välj komponenttyp utifrån användning (se tabellen nedan).</p>
        <p>Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-10/">bakgrund till val av knappar</a>.</p>
      </Section>
      
      <section id="valj_typ_av_knapp">
        <h3>Välj typ av knapp</h3>
        <table class="table" data-example="testtest">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/style/api/components/buttons#primary_button">Primary button</a></td>
              <td>Primära aktiviteter (man vill uppmuntra användaren att utföra)</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#success_button">Success button</a></td>
              <td>Aktiviteter som användaren har påbörjat (man vill uppmana användaren att slutföra)</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#secondary_button">Secondary button</a></td>
              <td>Sekundära aktiviteter (man kan utföra, men uppmanas inte till det)</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#danger_button">Danger button</a></td>
              <td>Destruktiva aktiviteter</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#disabled_button">Disabled button</a></td>
              <td>Aktiviteter som inte är möjliga i ett specifikt tillstånd</td>
            </tr>
          </tbody>
        </table>
      </section>
     <section id="generella_riktlinjer_knappar">
       <h3>Generella riktlinjer för knappar</h3>
       <h4>Placering</h4>
       <ul>
         <li>
           Använd inte ovanför listor då knappen kan tas för dekoration.
         </li>
         <li>
           Knappar ska ligga till höger (på sidor, formulär, dialogboxar).
         </li>
         <li>
           Se även hur man kombimnerar knappar i <a href="/style/guidelines/dialouge">Dialoger</a>
         </li>
         <li>
           Se även <a href="#generella_riktlinjer_for_lank_och_knapp">Generella riktlinjer för länk och knapp</a>.
         </li>
       </ul>
     </section>  
    
</Page>
  )
}
