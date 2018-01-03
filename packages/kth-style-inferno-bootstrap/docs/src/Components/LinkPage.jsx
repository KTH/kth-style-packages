import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Links</h1>
      <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer knappar, länkar</a> där du får hjälp att välja rätt typ av komponent.</p>    

        <Stage>
          <Section title="Länkar">
       <p>
         Länk används för att navigera till en annan del av webben. Länkar möjliggör att man kan knyta ihop relaterade sidor.
       </p>
       <p>
         Det finns fem olika typer av länkar. Välj komponenttyp utifrån användning (se tabellen nedan).
       </p>
       <p>
         Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-11/">bakgrund till val av länkar</a>.
       </p>
     </Section> 
     <section id="valj_typ_av_lank">
       <h3>Välj typ av länk</h3>
       <table class="table">
         <thead class="thead-default">
          <tr>
            <th>Komponenttyp</th>
            <th>Används för</th>
          </tr>
         </thead>
       <tbody>
         <tr>
           <td><a href="/style/api/components/buttons#blue_link">Blue link</a></td>
           <td>Infogad länk i svart innehållstext på vit bakgrund</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#white_link">White link</a></td>
           <td>Infogad länk i vit innehållstext på färgad bakgrund</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#back_link">Back link</a></td>
           <td>Navigera tillbaka till föregående menyalternativ i de fall då menyn inte erbjuder det</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#away_link">Away link</a></td>
           <td>Navigera till annan del av (KTH) webb som har annan menynavigation</td>
         </tr>
         <tr>
           <td><a href="/style/api/components/buttons#up_link">Up link</a></td>
           <td>Navigera till toppen på sidan då långa sidor</td>
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
       </Stage>                  
    </Page>
  )
}
