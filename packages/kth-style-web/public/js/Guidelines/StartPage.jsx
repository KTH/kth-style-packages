import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>

      <h1>Riktlinjer</h1>
      <img className="HeroImage" src="/style/static/img/Guidelines.jpg" />
     
      <Section title="Övergripande principer">
        <p> 
          Nedan anges de övergripande principer som gäller för KTH style:
        </p>
        <ul>
          <li>
             Komponenter som ingår i KTH Style är redcerade till ett minimum.
          </li>
          <li>
             Utseende och beteende för ett element är kopplade (eftersom användaren förväntar sig att det är samma beteende när det är samma utseende).
          </li>
          <li>
             Element har stämts av mot principer för användbarhet och tillgänglighet (se länkar nedan).
          </li>
          <li>
             Elementen utgår ifrån <a href="/style/#kths_grafiska_profil">KTH’s grafiska profil</a> om det inte strider mot principer för tillgänglighet och användbarhet.
          </li>
          <li>
             Så stor del som möjligt av formen sätts med automatik i applikationerna och är inte beroende av webbredaktörernas val.
          </li>
        </ul>
      </Section> 
      
      <Section title="Vad är användbarhet?">
         <Narrative>
            <p>Användbarhet definieras enligt ISO-normen 9241-11 som följande: Den grad i vilken användare i ett givet sammanhang kan bruka en produkt för att uppnå specifika mål på ett ändamålsenligt, effektivt och för användaren tillfredsställande sätt.</p>
          </Narrative>
          <p>Ta del av <a href="/style/guidelines/usability">Riktlinjer användbarhet</a></p>
        </Section>
    
        <Section title="Vad är tillgänglighet?">
          <Narrative>
            <p>Tillgänglighet betyder användbarhet för alla oavsett funktionsvariation.</p>
          </Narrative>
          <p>Ta del av <a href="/style/guidelines/accessability">Riktlinjer tillgänglighet</a>.</p>
        </Section>

    </Page>
  )
}
