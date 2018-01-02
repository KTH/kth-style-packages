import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1 id="riktlinjer_anvandbarhet">Riktlinjer användbarhet</h1>
       <p>
        Riktlinjerna baserar sig på <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">Jacob Nielsen's 10 usability heuristics</a>.
      </p>
      
      <Section title="Enkelhet">
        <p>
          Applikationen uppfattas som enkel att använda.
        </p>
      </Section>
      <Section title="Funktioners relevans och prioritering">
        <p>
          Uppsättningen av funktioner är relevant för denna sorts applikation.
        </p>
          <p>
          Applikationens urval av funktioner och design fokuserar på att lösa de viktigaste och mest använda uppgifterna för användarna.
        </p>
      </Section>
      <Section title="Visa status">
        <p>
          Applikationen informerar användarna tydligt om vad som händer genom korrekt feedback inom rimlig tid.
        </p>
      </Section>  
      <Section title="Användarnas perspektiv">
        <p>
          Applikationen följer konventioner från användarnas verklighet så att användaren känner igen sig i:
          <ul>
            <li>
              Den konceptuella modellen i stort     
            </li>
            <li>
              Hur uppgiften kan utföras     
            </li>
            <li>
              Språk, fraser, terminologi     
            </li>
            <li>
              Grafisk design som t ex ikoner     
            </li>
          </ul>
        </p>
        <p>
          Information ges i en för användarna naturlig och logisk ordning.
        </p>
      </Section>
      <Section title="Användaren upplever kontroll och frihet">
        <p>
          Användaren har kontroll över applikationen, t ex så har användaren ett tydligt sätt att navigera (”jag vet var jag är och vad jag kan göra”) och det alltid finns en utväg (t ex genom ”Ångra” och "Återställ”).
        </p>
      </Section>
      <Section title="Konsekvent design som utgår från standarder">
        <p>
          Informationen presenteras konsekvent för att underlätta igenkänning för användaren. Samma kommando eller åtgärd har samma effekt igenom hela applikationen. Ord, situationer betyder alltid samma sak.
        </p>
        <p>
          Standarder och konventioner för plattformen följs. Tex så följs utseendet på applikationen plattformens övergripande utseende, även om den kan ha sin egen stil.
        </p>
      </Section>
      <Section title="Förhindra att fel uppkommer">
        <p>
          Applikationen hjälper användaren att undvika fel. Antingen genom att:
          <ul>
            <li>
              Ta bort möjligheter att göra fel (t ex genom att vara tillåtande vad gäller olika format på indata och justera det efteråt )   
            </li>
            <li>
              Ge användaren en möjlighet att bekräfta innan man utför en handling som kan innebära riskabla förändringar
            </li>
          </ul>
        </p>
      </Section>
      <Section title="Hjälp användaren att upptäcka, förstå och lösa problem">
        <p>
          Felmeddelandena som tillhandahålls av applikationen:
          <ul>
            <li>
              Pratar användarens språk   
            </li>
            <li>
              Beskriver exakt det specifika problemet istället för att ge en generell beskrivning   
            </li>
            <li>
              Hjälper konstruktivt användaren att lösa problemet  
            </li>
          </ul>
        </p>
      </Section>
      <Section title="Hjälp användaren att känna igen sig så inte behöver hålla allt i minnet">
        <p>
          Applikationen minimerar användarens minnesbelastning genom att göra objekt, åtgärder och alternativ synliga.
        </p>
        <p>
          Användaren behöver inte komma ihåg information från en del av dialogen till en annan. 
        </p>   
        <p>
          Instruktioner för användning av applikationen är synliga eller lätt åtkomliga.
        </p>    
      </Section>    
      <Section title="Flexibel och effektiv användning">
        <p>
          Applikationen har funktioner som gör interaktionen så effektiv som möjligt för olika användargrupper. Det kan t ex vara snabbkommandon för expertanvändare. 
        </p>
        <p>
          Användarna kan också anpassa frekventa funktioner för att kunna göra användningen effektivare.
        </p>     
      </Section>  
      <Section title="Estetisk och minimalistisk design">
        <p>
          Informationen som presenteras för användaren är den information som användaren behöver (och inte mer) vid rätt tidpunkt och plats.
        </p>
        <p>
          Designen understryker struktur och stödjer prioritering. Grafiska element är utvalda och designade med omsorg.
        </p> 
      </Section>    
      <Section title="Hjälp och dokumentation">
        <p>
          Online-hjälpen är tillgänglig, kontextkänslig och har en sökfunktion som är anpassad efter användarens uppgifter. 
        </p>
        <p>
          Uppbyggnaden av informationen och läsbarheten av texten är bra. Varje sektion är fristående. Instruktionerna listar konkreta steg man kan vidta och är inte för omfattande. 
        </p> 
         <p>
          Felmeddelanden länkar till den kontextkänsliga hjälpen. Även länkar mellan relaterade problem är tillgängliga
        </p> 
      </Section>
    </Page>
  )
}
