
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer tillgänglighet</h1>

      <p> I KTH Style arbetet bygger vi in de <a href="#overgripande_riktlinjer_tillganglighet">övergripande riktlinjerna för tillgänglighet</a> </p>
      <p>
        Tanken med KTH Style är att underlätta för utvecklarare att ta fram tillgängliga och användbara webbapplikationer. Grunden i KTH Style är därför att bygga in så mycket som möjligt av riktlinjerna för användbarhet och tillgänglighet i komponenterna. För varje komponent behöver man då endast ta del av ett fåtal riktlinjer (som inte går att bygga in) och som förklarar när och hur man använder komponenterna.
      </p>
      <p>
        Det finns dock några saker, som inte ligger på komponent-nivå, som du behöver tänka på när du kodar på för att det ska bli tillgängligt för användaren. Nedan (under <a href="#tillganglig_kod">Tillgänglig kod</a>) ser du en sammanställning av de viktigaste sakerna att tänka på vad gäller webbutveckling. 
      </p>
      <p>
      En del av arbetet med att ta fram tillgängliga komponenter har handlat om att se över de färger vi använt. Nedan finns tips på hur man arbetar med <a href="#farger_och_tillganglighet">Färger och Tillgänglighet</a>.
      </p>
        
      <Section title="Övergripande riktlinjer tillgänglighet">
        <p>
           <a href="https://www.w3.org/Translations/WCAG20-sv/">Web Content Accessibility Guidelines (WCAG) 2.0</a>
        </p>
      </Section>
      
      <Section title="Tillgänglig kod">
        <p>
           Nedan listas de tillägg i koden du behöver göra (för att det inte kan byggas in i komponenterna) för att du ska utveckla tillgängliga webbapplikationer.
        </p>
        <p>
           Eftersom målet har varit att minimera riktlinjerna så har vi har gjort ett urval från de <a href="#overgripande_riktlinjer_tillganglighet">övergripande riktlinjerna för tillgänglighet</a>. För att se att man inte glömt något (och att dessa riktlinjer är tillräckliga) så behöver man testa koden vad gäller tillgänglighet, se <a href="/style/guidelines/testhelper">Riktlinjer test</a>.
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
                  Sen, när det inte går att undvika fel, hjälp användaren att rätta fel genom att <a href="/style/api/components/alerts#error_alert">ge ett felmeddelande</a>.
              </li>
           </ul>

          <h3>Läsordningen och kodordningen av element ska vara den samma</h3>
          <p>
            Se till att ordningen (från översta raden till sista raden) på informationen i HTML:n är den samma som den användaren är förväntad att läsa den i (då det finns en sådan ordning). Ett sätt att få en känsla för detta är att titta på sidan helt utan CSS, målet är då att sidan trots avsaknaden av CSS ska gå att följa rent innehållsmässigt.
          </p>

          <h3>Alla interaktiva element ska gå att navigera med tangenterna</h3>
          <p>
            Se till att alla interaktiva element går att navigera till och använda  endast med hjälp av tangentbordet. Relevant här är tabbordningen för element, visa vilka element som har fokus (även om du har gett fokus till dem via tangentbordet) samt ange "accesskey" för primär-interaktion om det är relevant.
          </p>
        </Section>

        <Section title="Färger och tillgänglighet">
          <h3>Kontrast</h3>
          <p> 
          Kontrasten mellan text och bakgrund kan behöva justeras för att möta Tillgänglighetskraven (se riktlinje 1.4, <a href="/style/guidelines/accessability/#overallGuidelinesAccessability">Övergripande riktlinjer tillgänglighet</a>) 
          </p>
          <p>  
             Börja med att <a href="http://www.dasplankton.de/ContrastA/">kontrollera kontrasten</a>.
          </p>
          <p>
            <a href="https://www.w3schools.com/colors/colors_picker.asp">Gör färgen mörkare eller ljusare för att öka kontrasten</a>.
          </p>
          <h3>Färgstyrka</h3>
            <p> 
              Starka färger ska undvikas då de har negativ påverkan på personer med koncentrationssvårighter. Det finns inget sätt att mäta om en färg är för stark. Detta behöver utredas vidare ...
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
