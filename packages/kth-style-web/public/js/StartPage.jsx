import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import Alert from 'kth-style-inferno-bootstrap/lib/Alert.jsx'
import Jumbotron from 'kth-style-inferno-bootstrap/lib/Jumbotron.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
        <h1>KTH Style</h1>
        <Alert color="info" aria-live="polite">
          <span>
            <h4>KTH Style är under utveckling!</h4>
            <p>Riktlinjer och utseende kan komma att ändras fram till lansering.</p>
           </span>
        </Alert>
      
        <img className="HeroImage" src="/style/static/img/Banner.png" />
        
      
       <Section title="Vad är KTH Style?">
            <p>
                KTH Style är en guide för standardiserad form med tillhörande riktlinjer för användbarhet och tillgänglighet. 
            </p>
            <p>
              Tanken med KTH Style är att underlätta för utvecklarare på KTHs IT avdelning att ta fram tillgängliga och användbara webbapplikationer. Grunden i KTH Style är därför att bygga in så mycket som möjligt av riktlinjerna för användbarhet och tillgänglighet i komponenterna. De riktlinjer som inte går att bygga in inkluderas i anslutning till komponenterna.
            </p>
            <p>
               Arbetet drivs av <a href="https://www.kth.se/social/group/kth-style-guide/">KTH style gruppen</a> som består av användbarhetsspecialist på KTHs IT-avdelning, verksamhetsansvarig och huvudredaktör för KTHs centrala webbplats samt intranätet. Arbetet med att implementera komponenter och bygga upp dokumentation för KTH Style har utförts av utvecklare och användbarhetsspecialist i KTH Style utvecklargrupp.
            </p>
            <p>
              KTH Style är ett levande dokument som kontinuerligt uppdateras för att förbättra användbarhet och tillgänglighet. KTH style ska utvärderas i de applikationer som använder KTH Style och när uppdateringar behöver göras p g a genomförda tester (eller nya behov av nya/ modifierade komponenter) så ska det tas upp i KTH Style gruppen som förvaltar riktlinjerna.
            </p>
      
        <h3>Mål</h3>
            <p>
                Målet med KTH style är att:
                <ul>
                    <li>
                        Ge slutanvändaren, som är den som tar del av innehåll eller använder funktioner på KTHs webbplats, en bra användarupplevelse.
                    </li>
                    <li>
                        Det som möter slutanvändaren ska se ut och bete sig konsekvent i alla miljöer som omfattas av webb som är förvaltade av KTH centralt.
                    </li>
                </ul>
            </p>
            <p>
                Genom att:
                <ul>
                    <li>
                        Styleguiden ska sammanfatta vilka element som finns att tillgå och ge utvecklarna riktlinjer när, hur och varför elementen ska användas i utvecklingsarbetet.
                    </li>
                    <li>
                        Styleguiden bygger på principer för användbarhet och tillgänglighet (se <a href="/style/guidelines/usability">Riktlinjer för användbahet</a> och <a href="/style/guidelines/accessability">Riktlinjer för tillgänglighet</a>).
                    </li>
                </ul>
            </p>
         
            <p>
              Läs också <a href="/style/guidelines#overgripande_principer">övergripande principer</a> för KTH style.
            </p>
         
            <h3>Målgrupp</h3>
            <ul>
              <li>
                Utvecklare av KTH-förvaltade webbmiljöer.       
              </li>
              <li>
                Externa parter som utvecklar webbtjänster på KTHs webbplats.     
              </li>
              <li>
                Webbredaktörer och webbansvariga på KTH kan använda KTH style för allmän orientering i KTHs webbform. För riktlinjer som styr det redaktionella arbetet hänvisas till dokumentation på KTHs Intranät (se <a href="https://intra.kth.se/administration/kommunikation/webbpublicering/skapa-innehall">Publicera på webb/ Skapa innehåll</a>).  
              </li>
               
           </ul>
        
          <h3>Avgränsning</h3>
            <p>
                KTH style omfattar webb som förvaltas av KTH centralt. KTH style omfattar inte applikationer som förvaltas lokalt på KTH. 
            </p>
            <p>
                KTH style omfattar främst de komponenter som är gemensamma för flertalet applikationer. Övriga komonenter som är specifika för en viss applikation, eller del av, ska genomgå samma översyn men inte göras tillgängliga i KTH style (det kan vara en egen del som utgår från KTH style).
            </p>
            <p>
                KTH style tar främst fasta på enskilda komponenter och ger endast översiktlig vägledning i hur dessa ska förhålla sig till varandra. Olika applikationer har olika förutsättningar för hur komponenter kan disponeras över en yta. Är man osäker på tillämpning av KTH style, kontakta <a href="https://www.kth.se/social/group/kth-style-guide/">KTH style gruppen</a> som förvaltar riktlinjerna.
            </p>
            <p>
                KTH style ska stödja de webbläsare och versioner som WIKS stödjer.
            </p>
          
         <h3>Bakgrund</h3>
            <p>
                Tidigare fungerade KTH webb (kth.se) som riktlinje för style men eftersom olika delar kopierades vid olika lägen och tolkades olika har det medfört att utseende mellan olika tjänster varierar. Även inom KTH webb finns delar som är tveksamma vad gäller principer för användbarhet och tillgänglighet. Det fanns inte heller några riktlinjer eller principer nedskrivna för hur man ska använda de olika komponenterna för att uppnå bra användbarhet och tillgänglighet. Style har tidigare mer handlat om att man ska förstå att man är på kth.se ("det ska se kth-igt ut").
            </p>
            <p>
                För att förbättra användbarhet och tillgängligheten på KTH webb startades KTH Style gruppen vars arbete bestått i att inventera kth.se, rensa ut och ta fram nya/ modifierade komponenter med riktlinjer (du hittar arbetsmaterial och kontaktpersoner i <a href="https://www.kth.se/social/group/kth-style-guide/">KTH style gruppen</a>). Samtidigt pågick ett arbete med att bygga uppe ett ramverk för applikationer där KTH Style inkluderades och dokumentation för KTH Style byggdes upp. När det här skrivs har stora delar av KTH webb (kth.se) ännu inte uppdaterats utifrån KTH style.
            </p>
        </Section>
      
        <Section title="KTHs grafiska profil" id="kths_grafiska_profil">
          <p>
            KTHs grafiska profil är beslutad av rektor. Profilen omfattar i dagsläget inte webb (men det pågår ett arbete på KTH centralt att webbanpassa profilen). Därför har det funnits ett behov av att anpassa den grafiska profilen. Hit hör val av fonter, färger, hantering av KTH:s logotyp och bruk av profilens särskilda grafiska element.
          </p>
          <p>
           Anpassningen innebär att KTH style i dagsläget följer grafisk profil i möjligaste mån och gör avsteg när det finns webbspecifika behov samt krav på användbarhet och tillgänglighet (se <a href="/style/guidelines/usability">Riktlinjer för användbahet</a> och <a href="/style/guidelines/accessability">Riktlinjer för tillgänglighet</a>). De anpassningar som har gjorts gäller främst färger (se <a href="/style/guidelines/colors#farger_och_tillganglighet">färger och tillgänglighet</a>).
          </p>
        </Section>
      
        <Section title="Hur använder jag som utvecklare KTH style?">
          <h3>Riktlinjer för användbarhet och tillgänglighet</h3>
          <p>
            Det du som utvecklare behöver göra är att ta del av de <a href="/style/guidelines">riktlinjer</a> som först ger en övergripande förståelse av användbarhet och tillgänglighet för att sedan gå in på riktlinjer för specifikt område (som t ex <a href="/style/guidelines/information">information/ återkoppling</a>). För varje område får du veta varför (du t ex ska informera/ ge återkoppling), när du ska göra det (du får t ex hjälp att välja vilken informationskomponent du ska använda för att uppnå vad) och övergripande (hur du t ex informerar). För varje komponent listas sedan komponenten, kod och UX riktlinjer specifika för komponenten.
          </p>
          <h3>Tekniskt</h3>
          <h4>Bootstrap 4, Inferno</h4>
          <p><a href="https://github.com/KTH/kth-style#how-to-start-using-kth-style">How to start using KTH style</a>.</p>
          <p>Här kan vi skriva lite text om KTH Style Bootstrap.</p>
          <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap med Inferno.js.</p>  
          <h4>.Net etc.</h4>
          <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap i andra projekt.</p>
        </Section>
        
    </Page>
  )
}

