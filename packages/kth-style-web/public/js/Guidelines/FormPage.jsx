import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer formulär</h1>
      <section>
        <p>
            Formulär används för att få in data från användaren.
        </p>
          <p>
            Det finns fem olika typer av formulärkomponenter. Välj komponenttyp utifrån användning (se tabellen nedan).
        </p>
        
        <p>
            Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-17/">bakgrund till val av formulärkomponenter</a>.
        </p>
      </section>
     <Section title="Välj typ av formulärkomponenter">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a href="/style/api/components/forms#text_input">Text input</a></td>
              <td>Indata i form av text</td>
            </tr>
             <tr>
              <td>a href="/style/api/components/forms#radio_buttons">Radio buttons</a></td>
              <td>Flervalssvar när bara ett val är möjligt (och alternativen är färre)</td>
            </tr>
            <tr>
              <td>a href="/style/api/components/forms#drop_down">Drop down</a></td>
              <td>Flervalssvar när bara ett val är möjligt (och alternativen är många)</td>
            </tr>
            <tr>
              <td>a href="/style/api/components/forms#check_box">Check box</a></td>
              <td>Flervalssvar när flera val är möjliga</td>
            </tr>
            <tr>
              <td>a href="/style/api/components/forms#date_picker">Date picker</a></td>
              <td>Val av datum</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Generella riktlinjer för formulärkomponenter">
        <h3>Reducera fält</h3>
        <p>Ta bort fält om indata kan:</p>
        <ul>
          <li>
            Erhållas på annat sätt,
          </li>
          <li>
            Inhämtas vid en senare mer passande tidpunkt
          </li>
          <li>
            Utelämnas, för att det inte egentligen verkligen behövs
          </li>
        </ul>
        <h3>Skilj på valfria och obligatoriska fält</h3>
        <ul>
          <li>
            Försök att begränsa formuläret till endast ett eller två valfria fält, och tydligt märk dem som ”Optional”.
          </li>
          <li>
            Om vissa fält verkligen är nödvändiga, men gäller endast en del av användarna, visa det.
          </li>
        </ul>
        <h3>Eliminera godtycklig formattering</h3>
        <p>
          Eliminera så mycket som möjligt av godtyckliga formateringsregler genom att vara tillåtande vad gäller indata (se <a href="/style/guidelines/accessability#hjalp_användaren">Hjälp användaren att undvika och rätta fel</a>).
        </p>

        <h3>Gruppera relaterade fält tillsammans</h3>
        <p>
          Gruppera relaterade fält tillsammans. Om det lämpar sig, lägg till en rubrik för gruppen.
        </p>
        <h3>Förklara särskilda krav på indata eller på formattering</h3>
        <p>
          När du har försökt att elimenera godtyckliga krav på indata (se ovan), ange exakta instruktioner på indata eller på formattering, som t ex format på telefonnummer eller personnummer.
        </p>
        <h3>Dölj inte grundläggande hjälptext</h3>
        <p>
          Exponera grundläggande instruktioner där det är möjligt. För mer omfattande hjälptexter, infoga hjälpinformation som nås via en i-ikon (se <a href="/style/api/components/modal#information_modal">Information modal</a>).
        </p>
        <h3>Håll dig till standard</h3>
        <p>
          Håll dig till standard både för rubriker på fält (t ex kreditkortsnummer, utgångsdatum) och de val du erbjuder.
        </p>
      </Section>
    </Page>
  )
}
