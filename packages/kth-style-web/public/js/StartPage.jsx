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
                KTH Style är en guide för style med tillhörande riktlinjer för användbarhet och tillgänglighet. 
            </p>
            <p>
               Arbetet drivs av KTH Style gruppen som består av användbarhetsspecialist på KTHs IT-avdelning, verksamhetsansvarig och huvudredaktör för KTHs centrala webbplats samt intranätet. Arbetet med att implementera komponenter och bygga upp dokumentation för KTH Style har utförts av utvecklare och användbarhetsspecialist i KTH Style utvecklargrupp.
            </p>
            <p>
              Tanken med KTH Style är att underlätta för utvecklarare på KTHS IT avdelning att ta fram tillgängliga och användbara webbapplikationer. Grunden i KTH Style är därför att bygga in så mycket som möjligt av riktlinjerna för användbarhet och tillgänglighet i komponenterna. De riktlinjer som inte går att bygga in inkluderas i anslutning till komponenterna.
            </p>
            <p>
              KTH Style är ett levande dokument som kontinuerligt uppdateras för att förbättra användbarhet och tillgänglighet. KTH style ska utvärderas i de applikationer som använder KTH Style och när uppdateringar behöver göras p g a genomförda tester (eller nya behov av nya/ modifierade komponenter) så ska det tas upp i KTH Style gruppen som förvaltar riktlinjerna.
            </p>
      
        <h3>Mål</h3>
            <p>
                Målet med styleguiden är att:
                <ul>
                    <li>
                        Förbättra upplevelsen för slutanvändaren, som är den som tar del av innehåll eller använder funktioner på KTH:s webbplats.
                    </li>
                    <li>
                        Det som möter slutanvändaren ska se ut och bete sig konsekvent i alla miljöer som omfattas av KTH:s centralt förvaltade webbform.
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
                        Styleguiden bygger på principer för användbarhet och tillgänglighet (se <a href="/style/guidelines/usability">Riktlinjer för användbahet</a> och <a href="/style/guidelines/accessability">Riktlinjer för tillgänglighet</a>).
                    </li>
                </ul>
            </p>
         
            <h3>Målgrupp</h3>
            <ul>
              <li>
                Utvecklare av KTH-förvaltade webbmiljöer.       
              </li>
              <li>
                Webbredaktörer och webbansvariga på KTH använder styleguiden för allmän orientering i KTH:s webbform. För riktlinjer som styr formmässiga delar av det redaktionella arbetet hänvisas till dokumentation på KTH Intranät.  
              </li>
               <li>
                Externa parter som utvecklar webbtjänster i enlighet med form på KTH:s webbplats.     
              </li>
           </ul>
        
          <h3>Avgränsning</h3>
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
                Styleguiden ska stödja de webbläsare och versioner som WIKS stödjer.
            </p>
          
         <h3>Bakgrund</h3>
            <p>
                Tidigare fungerade KTH webb som riktlinje för style men olika delar har kopierats vid olika lägen och tolkats olika vilket har medfört att utseende varierar mellan olika tjänster. Även inom KTH webb finns delar som är tveksamma vad gäller principer för användbarhet och tillgänglighet. Det fanns inte heller några riktlinjer eller principer nedskrivna för hur man ska använda de olika elementen för att uppnå bra UX. Style har tidigare mer handlat om att man ska förstå att man är på kth.se ("det ska se kth-igt ut").
            </p>
            <p>
                För att förbättra användbarhet och tillgängligheten på KTH webb startades KTH Style gruppen (se ovan) vars arbete bestått i att inventera kth.se, rensa ut och ta fram nya/ modifierade komponenter med riktlinjer. Samtidigt pågick ett arbete med att bygga uppe ett ramverk för applikationer, ”Node”. I ”Node” har KTH Style inkluderats och dokumentation för KTH Style byggts. När det här skrivs har stora delar av kth.se ännu inte uppdaterats efter KTH style.
            </p>
        </Section>
      
        <Section title="KTH's grafiska profil" id="kths_grafiska_profil">
          <p>
            KTH:s grafiska profil är beslutad av rektor.
          </p>
          <p>
            Profilen omfattar dock inte ett officiellt KTH-utseende på webb. Den webbform som tillämpas på centralt förvaltade webbmiljöer är en tillämpning av den grafiska profilen. Av det följer att forminslag följer grafisk profil i de fall denna är tillämplig. Hit hör val av fonter, färger, hantering av KTH:s logotyp och bruk av profilens särskilda grafiska element. 
          </p>
          <p>
            Tillkommande forminslag och avsteg från grafisk profil sker utifrån webbspecifika behov samt krav på användbarhet och tillgänglighet (se <a href="/style/guidelines/usability">Riktlinjer för användbahet</a> och <a href="/style/guidelines/accessability">Riktlinjer för tillgänglighet</a>).
          </p>
          <p>
            Läs mer om hur KTH style har applicerat KTHs <a href="https:/style/guidelines/graphicalprofile">KTH:s profil färger</a>grafisk profil vad gäller färger och fonter.
          </p>
        </Section>
      
        <Section title="Hur använder jag som utvecklare KTH style?">
          <h3>Riktlinjer för användbarhet och tillgänglighet</h3>
          <p>
            Det du som utvecklare behöver göra är att ta del av de riktlinjer som först ger en övergripande förståelse av användbarhet och tillgänglighet för att sedan gå in på riktlinjer för specifikt område (som t ex information/ återkoppling). För varje område får du veta varför (du t ex ska informera/ ge återkoppling), när du ska göra det (du får t ex hjälp att välja vilken informationskomponent du ska använda för att uppnå vad) och övergripande (hur du t ex informerar). För varje komponent finns sedan komponenten presenterad, kod och enstaka UX riktlinjer listas.
          </p>
          <h3>Tekniskt</h3>
          <p> Läs <a href="https://github.com/KTH/kth-style#how-to-start-using-kth-style">How to start using KTH style</a>.</p>
          <h3>Bootstrap 4</h3>
          <p>Här kan vi skriva lite text om KTH Style Bootstrap.</p>
          <h3>Inferno.js</h3>
          <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap med Inferno.js.</p>  
          <h3>.Net etc.</h3>
          <p>Här kan vi skriva lite text om att använda KTH Style Bootstrap i andra projekt.</p>
        </Section>
        
    </Page>
  )
}

