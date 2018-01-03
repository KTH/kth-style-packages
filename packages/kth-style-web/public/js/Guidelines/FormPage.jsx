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
            Det finns fem olika typer av indatakomponenter. Välj komponenttyp utifrån användning (se tabellen nedan).
        </p>
        
        <p>
            Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-17/">bakgrund till val av formulär- och indatakomponenter</a>.
        </p>
      </section>
     <Section title="Välj typ av formulär- och indatakomponenter">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fritextsvar</td>
              <td>Indata i form av text</td>
            </tr>
             <tr>
              <td>Radioknappar</td>
              <td>Flervalssvar när bara ett val är möjligt (och alternativen är färre)</td>
            </tr>
            <tr>
              <td>Rullgardinsmeny</td>
              <td>Flervalssvar när bara ett val är möjligt (och alternativen är många)</td>
            </tr>
            <tr>
              <td>Checkboxar</td>
              <td>Flervalssvar när flera val är möjliga</td>
            </tr>
            <tr>
              <td>Datumväljare</td>
              <td>Val av datum</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Generella riktlinjer för formulär och indatakomponenter">
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
      
       <section>
       <h2>Flytta till Komponenter: Olika typer av formulär- och indatakomponenter</h2>

        <h3>Fritextsvar</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                När indata i form av text krävs.
            </li>
            <li>
                Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
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
                Se <a href="#generella_riktlinjer_for_formular_och_indatakomponenter">Generella riktlinjer för formulär och indatakomponenter</a>.
            </li>    
        </ul>

    <h3>Rullgardinsmeny</h3>
        <p>Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                För flervalssvar, när bara ett val är möjligt och alternativen är fler.
            </li>
            <li>
                Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Undvik rullgardinsmeny när det finns färre än tre alternativ. Visa dem istället som radio-knappar (se ovan).
            </li>
            <li>
                Undvik rullgardinsmeny när indata är något som är välbekant för användaren och snabbare kan matas in än att välja från en lång lista
            </li>
            <li>
                 Överväg användningsfrekvens, lista de vanligaste valen först när det är möjligt.
            </li>
            <li>
                Användaren ska kunna söka fram rätt alternativ i rullgardinsmenyn genom att använda bokstavstangenterna.
            </li>
            <li>
                Se <a href="#generella_riktlinjer_for_formular_och_indatakomponenter">Generella riktlinjer för formulär och indatakomponenter</a>.
            </li>    
        </ul>

     <h3>Radioknappar</h3>
        <p> Komponent ska infogas </p>
        <h4>Användning</h4>
        <ul>
            <li>
                För flervalssvar, när bara ett val är möjligt och alternativen är färre.
            </li>
            <li>
                Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
          <li>
            Alternativen ska inte vara fler än att de kan presenteras överskådligt på en rad. Annars använd rullgardinsmeny.
          </li>
          <li>
            Se <a href="#generella_riktlinjer_for_formular_och_indatakomponenter">Generella riktlinjer för formulär och indatakomponenter</a>.
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
                Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Se <a href="#generella_riktlinjer_for_formular_och_indatakomponenter">Generella riktlinjer för formulär och indatakomponenter</a>.
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
              Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Se <a href="#generella_riktlinjer_for_formular_och_indatakomponenter">Generella riktlinjer för formulär och indatakomponenter</a>.
            </li>    
        </ul>
      </section>
    </Page>
  )
}
