import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Formulär- och indatakomponenter</h1>
      <section>
        <p>
            Formulär används för att få in data från användaren.
        </p>
        <p>
            Det finns olika typer av indatakomponenter som har olika användningsområde (se nedan).
        </p>
        <p>
            Om du är intresserad läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-17/">bakgrund till varför formulär- och indatakomponenter ser ut och beter sig som det gör</a>.
        </p>
      </section>
      <section>
        <h2>Välj typ av formulär- och indatakomponenter</h2>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Namn</th>
              <th>Användning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fritextsvar</td>
              <td>När indata i form av text krävs</td>
            </tr>
            <tr>
              <td>Rullgardinsmeny</td>
              <td>För flervalssvar, när bara ett val är möjligt och alternativen är fler än att de kan presenteras på en rad.</td>
            </tr>
            <tr>
              <td>Radioknappar</td>
              <td>För flervalssvar, när bara ett val är möjligt och alternativen är mindre än att de kan presenteras på en rad.</td>
            </tr>
            <tr>
              <td>Checkboxar</td>
              <td>För flervalssvar,  när flera val är möjliga</td>
            </tr>
            <tr>
              <td>Datumväljare</td>
              <td>När ett datum ska väljas</td>
            </tr>
          </tbody>
        </table>
      </section>

     <section>
       <h2>Olika typer av formulär- och indatakomponenter</h2>

        <h3>Fritextsvar</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                När indata i form av text krävs.
            </li>
            <li>
                Exempel: se <a href="/style/formexample">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Matcha fält till typen och storleken på data.
                <ul>
                  <li>
                    Exempel: postnummer.
                  </li>
                </ul>
            </li>
            <li>
                Se <a href="#generella_riktlinjer_formular">Generella riktlinjer formulär</a>.
            </li>    
        </ul>

    <h3>Rullgardinsmeny</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                För flervalssvar, när bara ett val är möjligt och alternativen är mer än att de kan presenteras på en rad.
            </li>
            <li>
                Exempel: se <a href="/style/formexample">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Undvik drop-downs när det endast finns 2 eller 3 alternativ. Visa dem istället som radio-knappar (som endast kräver ett klick).
            </li>
            <li>
                 Överväg användningsfrekvens, lista de vanligaste valen först när det är möjligt.
            </li>
            <li>
                Ha kontextuell sökning i rullgardins om det finns mer än 25 alternativ
            </li>
            <li>
                Se <a href="#generella_riktlinjer_formular">Generella riktlinjer formulär</a>.
            </li>    
        </ul>

     <h3>Radioknappar</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                För flervalssvar, när bara ett val är möjligt och alternativen är mindre än att de kan presenteras på en rad.
            </li>
            <li>
                Exempel: se <a href="/style/formexample">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Se <a href="#generella_riktlinjer_formular">Generella riktlinjer formulär</a>.
            </li>    
        </ul>

     <h3>Checkboxar</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                För flervalssvar,  när flera val är möjliga.
            </li>
            <li>
                Exempel: se <a href="/style/formexample">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Se <a href="#generella_riktlinjer_formular">Generella riktlinjer formulär</a>.
            </li>    
        </ul>

     <h3>Datumväljare</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
              När ett datum ska väljas
            </li>
            <li>
              Exempel: se <a href="/style/formexample">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Se <a href="#generella_riktlinjer_formular">Generella riktlinjer formulär</a>.
            </li>    
        </ul>
      </section>

      <section>
        <h2 id="generella_riktlinjer_formular">Generella riktlinjer för formulär och indatakomponenter</h2>

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
            Först eliminera så många valfria fält som möjligt (se ovan).
          </li>
          <li>
            Försök att begränsa formuläret till endast 1 eller 2 valfria fält, och tydligt märk dem som ”Optional”.
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
          När du har försökt att elimenera godtyckliga krav på indata (se ovan), ange exakta instruktioner på indata eller på formattering, som t ex format på telefonnummer eller kreditkort.
        </p>

        <h3>Dölj inte grundläggande hjälptext</h3>
        <p>
          Exponera grundläggande instruktioner där det är möjligt. För mer omfattande hjälptexter, infoga hjälpinformation som nås via en i-ikon (se Information).
        </p>

        <h3>Håll dig till standard</h3>
        <p>
          Håll dig till standard både för rubriker på fält (t ex kreditkortsnummer, utgångsdatum, Säkerhetskod) och de val du erbjuder.
        </p>
      </section>

      <section>
        <h2>TODO</h2>
        <ul>
          <li>Flytta avsnittet "Olika typer av formulär- och indatakomponenter" till Komponentsidan och lägg in komponenter</li>
          <li>Lägg till Exempel på formulär under "Sidlayout" så visar alla element med bra exempel och grupperat och uppdatera länkar så länkar dit från denna sida</li>
        </ul>
      </section> 
    </Page>
  )
}
