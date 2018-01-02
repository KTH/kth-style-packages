
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Knappar och länkar</h1>
      <p>
          Knappar och länkar ger användaren olika förväntningar på vad som ska ske när man klickar på dem. Eftersom en användare ska förstå innan man klickar vad som kommer att hända är det viktigt att välja rätt komponent. 
      </p>
       
     <Section title="Välj om det ska vara en knapp eller länk">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för att</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#valj_typ_av_lank">Länk</a> (välj typ)</td>
              <td>Leder användaren vidare till en annan del av webben</td>
            </tr>
            <tr>
              <td><a href="#valj_typ_av_knapp">Knapp</a> (välj typ)</td>
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
      <Section title="Knappar">
        <p>Knapp används för att initiera en aktivitet. Ett klick på en knapp får något att hända. Det kan vara att ett formulär man fyllt i skickas in eller att en sökning utförs. Nästan alltid är en del av händelsen att användaren kommer till en ny sida – men det måste hända mer än så.</p>
        <p>Det finns finns fem olika typer av knappar. Välj knapp utifrån användning (se nedan).</p>
        <p>Läs gärna mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-10/">bakgrund till varför knappar ser ut och beter sig som det gör</a>.</p>
      </Section>
      
      <section id="valj_typ_av_knapp">
        <h3>Välj typ av knapp</h3>
        <table class="table" data-example="testtest">
          <thead class="thead-default">
            <tr>
              <th>Namn</th>
              <th>Användning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/style/api/components/buttons#primary_button">Primary button</a></td>
              <td>För primära aktiviteter (man vill uppmuntra användaren att utföra)</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#success_button">Success button</a></td>
              <td>För att uppmana användaren att avsluta en uppgift som hen har påbörjat</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#secondary_button">Secondary button</a></td>
              <td>För sekundära aktiviteter (man kan utföra, men uppmanas inte till det)</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#danger_button">Danger button</a></td>
              <td>För aktiviteter som är destruktiva</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/buttons#disabled_button">Disabled button</a></td>
              <td>För aktiviteter som inte är möjliga i ett specifikt tillstånd</td>
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
     <Section title="Länkar">
       <p>
         Länk används till att leda vidare användaren till en annan del av webben för att knyta ihop olika relaterade delar.
       </p>
       <p>
         Det finns fem olika typer av länkar. Välj länk utifrån användning (se nedan).
       </p>
       <p>
         Läs gärna mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-11/">bakgrund till varför länkar ser ut och beter sig som de gör</a>.
       </p>
     </Section> 
     <section id="valj_typ_av_lank">
       <h3>Välj typ av länk</h3>
       <table class="table">
         <thead class="thead-default">
          <tr>
            <th>Namn</th>
            <th>Användning</th>
          </tr>
         </thead>
       <tbody>
         <tr>
           <td><a href="/style/api/components/buttons#blue_link">Blue link</a></td>
           <td>För vanlig länk som infogas i svart text på vit bakgrund</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#white_link">White link</a></td>
           <td>För länk som infogas i vit text på färgad bakgrund</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#back_link">Back link</a></td>
           <td>För att enkelt kunna navigera tillbaka till föregående menyalternativ i de fall då menyn inte erbjuder det</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#away_link">Away link</a></td>
           <td>När man länkar till annan del av (KTH) webb som har en annan navigation</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#up_link">Up link</a></td>
           <td>För att länka till toppen på sidan då långa sidor</td>
         </tr>
       </tbody>
     </table>
   </section>
      
   <section id="riktlinjer_bla_vit_bort">
     <h3>Riktlinjer för Länk Blå, Vit, Bort</h3>
     <h4>Infoga länk i textstycke</h4>
     <ul>
       <li>
          En infoga text i textstycke får en mindre dominant betydelse än en avslutande länk.
       </li>
       <li>
         Exempel infogad länk i textstycke.
       </li>
     </ul>
     <h4>Avslutande länk</h4>
     <ul>
       <li>
         En avslutande länk läggs på egen rad för att synas mer än infogad länk (därför att det är mer uft runt omkring) efter avslutande stycke, och kan t ex  leda användaren vidare till ytterligare information.
       </li>
       <li>
         Exempel avslutande länk.
       </li>
       </ul> 
       <h4>Länk i punktlista</h4>
       <ul>
         <li>
           Lägg länkar i en punktlista när man vill presentera flera olika val i form av länkar. Se också meny.
        </li>
        <li>
          Exempel länkar i en punktlista
        </li>
      </ul>
      Se även <a href="#generella_riktlinjer_for_lank_och_knapp">Generella riktlinjer för länk och knapp</a>.
   </section>
     
  <Section title="Generella riktlinjer för länk och knapp">
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
  </Section>
</Page>
  )
}
