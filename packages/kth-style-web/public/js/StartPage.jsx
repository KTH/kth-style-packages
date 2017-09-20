import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import Jumbotron from 'kth-style-inferno-bootstrap/lib/Jumbotron.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>

      <h1>Om KTH Style</h1>
      <img className="HeroImage" src="/static/img/Banner.png" />
      
      
      <Section title="Bakgrund">
        <Narrative>
          <p>
              KTH webb är riktlinje för style men olika delar har kopierats vid olika lägen och tolkats olika vilket gör att utseende varierar mellan olika tjänster. Även inom KTH webb finns delar som är tveksamma vad gäller principer för Användbarhet och Tillgänglighet. Det finns inte heller några riktlinjer eller principer nedskrivna för hur man ska använda de olika elementen för att uppnå bra UX.
          </p>
          <p>
              Kth style har tidigare mer handlat om att man ska förstå att man är på kth.se ("se kth-igt ut").
          </p>
        </Narrative>
      </Section>
        
      <Section title="Målgrupp">
        <Narrative>
          <p>
              Utvecklare av KTH-förvaltade webbmiljöer.
          </p>
          <p>
              Webbredaktörer och webbansvariga på KTH använder styleguiden för allmän orientering i KTH:s webbform. För riktlinjer som styr formmässiga delar av det redaktionella arbetet hänvisas till dokumentation på KTH Intranät.
          </p>
          <p>
              Externa parter som utvecklar webbtjänster i enlighet med form på KTH:s webbplats.
          </p>
        </Narrative>
      </Section>
      
      <Section title="Syfte, mål">
        <Narrative>
          <p>
              Målet med styleguiden är att:
              <ul>
                  <li>
                      Förbättra upplevelsen för slutanvändaren, som är den som tar del av innehåll eller använder funktioner på KTH:s webbplats.
                  </li>
                  <li>
                      Det som möter slutanvändaren ska se ut och bete sig konsekvent i alla miljöer som omfattas av KTH:s centralt förvaltade webbform.
                  </li>
                  <li>
                      Det är ett levande dokument.
                  </li>
              </ul>
          </p>
          <p>
              Genom att:
              <ul>
                  <li>
                      Styleguiden ska sammanfatta vilka element som finns att tillgå och ge Utvecklarna riktlinjer när, hur och varför elementen ska användas i utvecklingsarbetet.
                  </li>
                  <li>
                      Styleguiden bygger på principer för Användbarhet och Tillgänglighet (se <a href="/style/overallprincipals">Övergripande principer</a>, Riktlinjer för användbarhet, Riktlinjer för tillgänglighet).
                  </li>
                  <li>
                      Innehållet diskuteras i de olika grupperingar som använder riktlinjerna och förankras med de centrala funktioner på KTH som förvaltar riktlinjerna.
                  </li>
              </ul>
          </p>
        </Narrative>
      </Section>
      
      <Section title="Avgränsning">
        <Narrative>
          <p>
              Förankring i grafisk profil är relevant för all digital kommunikation på KTH som medger formmässiga anpassningar. Styleguiden gäller därför både för applikationer som används internt på KTH och externa målgrupper.
          </p>
          <p>
              Styleguiden omfattar webb som förvaltas av KTH centralt. Styleguiden omfattar inte applikationer som förvaltas lokalt på KTH och baseras på fri form, egna tolkningar av den grafiska profilen eller daterade centrala stilmallar (ambitionen är att fasa ut sådan form).
          </p>
          <p>
              Styleguiden omfattar främst de element som är gemensamma för flertalet applikationer. Övriga element som är specifika för en viss applikation eller del av ska genomgå samma översyn men inte göras tillgängliga i Styleguiden (kan vara en egen del som utgår från Styleguiden).
          </p>
          <p>
              Styleguiden tar främst fasta på enskilda element och ger endast översiktlig vägledning i hur dessa bör förhålla sig till varandra. Olika applikationer ger olika förutsättningar för hur forminslagen kan disponeras över olika ytor. Alla tillämpningar av styleguiden behöver därför förankras med de centrala funktioner på KTH som förvaltar riktlinjerna.
          </p>
          <p>
              Styleguiden stödjer de webbläsare och versioner som WIKS stödjer...
          </p>
        </Narrative>
      </Section>

      <Section title="Grafisk profil">
        <Narrative>
          <p>Här kan vi skriva lite text om den grafiska profilen.</p>
        </Narrative>
      </Section>

      <Section title="Bootstrap 4">
        <Narrative>
          <p>Här kan vi skriva lite text om KTH Style Bootstrap.</p>
        </Narrative>
      </Section>

      <Section title="Inferno.js">
        <Narrative>
          <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap med Inferno.js.</p>        
        </Narrative>
      </Section>


      <Section title=".Net etc.">
        <Narrative>
          <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap i andra projekt.</p>
        </Narrative>
      </Section>
      
    </Page>
  )
}

