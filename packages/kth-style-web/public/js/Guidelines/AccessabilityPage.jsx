
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      
      <h1>Riktlinjer tillgänglighet</h1>

      <Section title="Tillgänglig kod">
        <p>
            Använder du elementen i KTH Styles så ska de uppfylla användbarhet och tillgänglighet. Det finns dock några till saker du behöver tänka på när du kodar på för att det ska bli tillgängligt för användaren.
        </p>
        <p>
            Nedan ser du en sammanställning av de viktigaste sakerna att tänka på vad gäller webbutveckling. Ett betydligt mer omfattande dokument med rekommendationer är WCAG 2.0 (se <a href="/style/overallprincipals#riktlinjer_tillganglighet">Övergripande principer</a>, Riktlinjer tillgänglighet). Av den anledningen bör dessa punkter ses som ett minimum av tillgänglighet för dig att implementera.
        </p>
        <p>
            Använder du elementen i KTH Styles så ska de uppfylla användbarhet och tillgänglighet. Det finns dock några till saker du behöver tänka när du kodar på för att det ska bli tillgängligt för användaren.
        </p>
        <p>
          Avslutningsvis behöver man testa koden vad gäller tillgänglighet, se <a href="/style/testhelper">Testhjälpen</a>.
        </p>

        <h3>Associera en "label" med varje formulärelement</h3>
        <p>
          Använd ett "for"-attribut på en label som är länkad till "id"-attributet på det associerade formulärelementet. Alternativt kan man använda WAI-ARIA-attribut.
        </p>

        <h3>Inkludera alternativ text för bilder</h3>
        <p>
          Använd en alternativ beskrivande text för bilder som ger information eller erbjuder funktion (med "alt"-attributet). För bilder som enbart är dekorativa använd ett tomt "alt"-attribut (alt="") eller lägg till bilden med CSS.
        </p>

        <h3>Definiera språket sidan använder</h3>
        <p>
          Definiera det primära språket för varje sida med hjälp av "lang"-attributet på HTML-elementet. Använd "lang"-attributet på andra specifika element om språket för dessa element skiljer sig från det på HTML-taggen.
        </p>

      <h3>Använd HTML-element som bär mening</h3>
       <p>
          Använd HTML-element och/eller WAI-ARIA-roller för att föra fram syftet med innehåller i ett element. Exempelvis ska man använda korrekta element för rubriker, listor och tabeller samt där det är möjligt utnyttja HTML5:s <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">Semantiska element</a>. Observera att det är viktigt att vara konsekvent här, så rådfråga eller diskutera med någon kollega om du är osäker.
       </p>

        <h3 id="hjalp_användaren">Hjälp användaren att undvika och rätta fel</h3>
        <ul>
            <li>
                Först, hjälp användare att undvika fel genom att vara så förlåtande som möjligt när det gäller indata (så länge det in strider mot någon annan princip eller teknikalitet) men formatera och lagra datat på ett så tydligt och konsekvent sätt som möjligt. Exempel: tillåt telefonnummer med ”space”, och ta bort det när du processar och lagra datat.
            </li>
            <li>
                Sen, när det inte går att undvika fel, hjälp användaren att rätta fel genom att <a href="/style/messages#ge_felmeddelande">ge felmeddelande</a>.
            </li>
         </ul>

        <h3>Läsordningen och kodordningen av element ska vara den samma</h3>
        <p>
          Se till att ordningen (från översta raden till sista raden) på informationen i HTML:n är den samma som den användaren är förväntad att läsa den i (då det finns en sådan ordning). Ett sätt att få en känsla för detta är att titta på sidan helt utan CSS, målet är då att sidan trots avsaknaden av CSS ska gå att följa rent innehållsmässigt.
        </p>

        <h3>Alla interaktiva element ska gå att navigera med tangenterna</h3>
        <p>
          Se till att alla interaktiva element får att navigera till och använda  endast med hjälp av tangentbordet. Relevant här är tabbordningen för element, visa vilka element som har fokus (även om du har gett fokus till dem via tangentbordet) samt ange "accesskey" för primär-interaktion om det är relevant.
        </p>
      </Section>

      <Section title="Färger och tillgänglighet">
        <h3>Kontrast</h3>
        <p> 
        Kontrasten mellan text och bakgrund kan behöva justeras för att möta Tillgänglighetskraven (se <a href="/style/overallprincipals#riktlinjer_tillganglighet">Övergripande principer</a>, Riktlinjer tillgänglighet, riktlinje 1.4) 
        </p>
        <p>  
           <a href="http://www.dasplankton.de/ContrastA/">Kontrollera kontrasten</a>.
        </p>
        <p>
          <a href="https://www.w3schools.com/colors/colors_picker.asp">Gör färgen mörkare eller ljusare för att öka kontrasten</a>.
        </p>

        <h3>Färgblindhet</h3>
        <p>
          När man använder färger för att kunna filtrera information är det viktigt att färgerna går att särskilja även då du är färgblind. <a href="https://sv.wikipedia.org/wiki/Defekt_f%C3%A4rgseende">Det finns olika typer av färgblindhet, och de är olika vanliga</a>. 
        </p>
        <p>  
          Du kan testa hur en sida ser ut för olika färgblindheter genom att <a href="https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa">installera en plugin för färgblindhet i Chrome webläsare</a>.
        </p>
      </Section>
    
    </Page>
  )
}
