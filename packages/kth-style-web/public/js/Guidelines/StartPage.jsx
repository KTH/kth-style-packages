import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>

      <h1>Riktlinjer</h1>
      <img className="HeroImage" src="/style/static/img/Guidelines.png" />
     
      <Section title="Övergripande principer">
        <p> 
          Nedan anges övergripande principer som gäller för alla element i Styleguiden. Syftet är att förenkla för slutanvändaren av KTH webb:
        </p>
        <ul>
          <li>
             Reducera element till ett minimum.
          </li>
          <li>
             Utseende och beteende för ett element ska vara kopplade eftersom användaren förväntar sig att det är samma beteende när det är samma utseende.
          </li>
          <li>
             Element ska stämmas av mot principer för användbarhet och tillgänglighet (se länkar nedan).
          </li>
          <li>
             Elementen ska utgå ifrån <a href="/style/graphicalprofile">KTH’s grafiska profil</a> om det inte strider mot principer för tillgänglighet och användbarhet.
          </li>
          <li>
             Använd vedertagna element, standarder om det inte strider mot principer för tillgänglighet och användbarhet.
          </li>
          <li>
             KTH strävar efter att så stor del som möjligt av formen sätts med automatik i applikationerna och inte är beroende av webbredaktörernas val.
          </li>
        </ul>
      </Section> 
      
      <Section title="Vad är användbarhet?">
         <Narrative>
            <p>Användbarhet definieras enligt ISO-normen 9241-11 som följande: Den grad i vilken användare i ett givet sammanhang kan bruka en produkt för att uppnå specifika mål på ett ändamålsenligt, effektivt och för användaren tillfredsställande sätt.</p>
          </Narrative>
          <h3 id="riktlinjer_anvandbarhet">Riktlinjer användbarhet</h3>
          <p>
            <a href="https://www.kth.se/social/group/kth-style-guide/page/usability-heuristics-2/">Usability Heuristics</a>
          </p>
        </Section>
    
        <Section title="Vad är tillgänglighet?">
          <Narrative>
            <p>Tillgänglighet betyder användbarhet för alla oavsett funktionsvariation.</p>
          </Narrative>
          <h3 id="riktlinjer_tillganglighet">Riktlinjer tillgänglighet</h3>
          <p>
             <a href="https://www.w3.org/Translations/WCAG20-sv/">Web Content Accessibility Guidelines (WCAG) 2.0</a>
          </p>
        </Section>

    </Page>
  )
}
