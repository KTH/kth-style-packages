import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Struktur, layout på sida</h1>
      <p>
        En bra struktur på sidan gör att den upplevs ”renare” och det blir lättare att ”scanna” sidan, vilket gör att slutanvändaren får överblick, kan hitta och förstå innehållet bättre (Användbarhet, Tillgänglighet).
      </p>
      <Section title="Gruppera innehåll">
        <p>
          Lägg objekt som hör ihop närmare och använd luft för att separera till andra element. Använd rubriker för att gruppera innehåll.
        </p>
        <p>
          Avstånd för innehållssamlingar:
          <ul>
            <li>
              Lägg till ett större avstånd mellan grupper som saknar avgränsningar (t ex ramar och bakgrundsplattor).
            </li>
            <li>
              Lägg till ett mindre avstånd mellan grupper som har tydliga avgränsningar.
            </li>
          </ul>
        </p>
        <p>
          Se exempel: <a href="/style/page-layout/textpage">rubriker och brödtext</a>.
        </p>
      </Section>
      <Section title="Vertikal alignment">
        <p>
          <ul>
            <li>
              KTH eftersträvar horisontell linjering i formgivning av ramverk och övriga fasta inslag samt i den redaktionella hanteringen av innehåll.
            </li>
            <li>
              Innehåll som är disponerat över spalter ska dela topplinje och där det är tillämpligt en gemensam baslinje.
            </li>
          </ul>
        </p>
      </Section>
      <Section title= "Strukturera med rubriker">
        <p>Skriv här om hur man strukturerar med rubriker, text, listor </p>
      </Section>
      <Section title="Strukturera med utfällbara rubriklister">
        <p>
            Utfällbara rubriklister används när man vill dölja information på en sida för att ge användaren överblick, samtidigt som
            man ger användaren en möjlighet att kunna se mer information utan att behöva lämna sidan.
        </p>
        <p>
            Det finns finns två olika typer av rubriklister. Välj rubriklist utifrån användning (se nedan).
        </p>
        <p>
            Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-12/">bakgrund till val av rubriklister</a>.
        </p>
      </Section>
      <h3>Välj typ av rubriklist</h3>
      <section>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Namn</th>
              <th>Användning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vit-utfällbar-rubriklist</td>
              <td>När rubriklisten ska smälta in med övrigt innehåll på sidan</td>
            </tr>
            <tr>
              <td>Blå-utfällbar-rubriklist</td>
              <td>När det är viktigt att rubriklisten syns</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3 id="generella_riktlinjer_rubriklist">Generella riktlinjer rubriklist</h3>
        <ul>
           <li>
             Rubriken ska beskriva innehållet som kan fällas ut.
           </li>
        </ul>
      </section>
      
      <h2>Flytta till Komponenter: Olika typer av rubriklister</h2>
      <h3>Vit-utfällbar-rubriklist</h3>
      <h4>Användning</h4>
      <ul>
        <li>
          När rubriklisten ska smälta in med övrigt innehåll på sidan.
        </li>
        <li>
          Exempel: ?
        </li>
      </ul>
      <h4>Tänk på att</h4>
      <ul>
        <li>
          Försäkra dig om att användaren ser den vita rubriklisten (se <a href="/style/guidelines/testhelper#testa_anvandbarhet">Testa användbarhet</a>).
          Om inte överväg att använda Blå-utfällbar-rubriklist.
        </li>
        <li>
          Se <a href="#generella_riktlinjer_rubriklist">Generella riktlinjer rubriklist</a>.
        </li>
      </ul>
      <h3>Blå-utfällbar-rubriklist</h3>
      <h4>Användning</h4>
      <ul>
        <li>
          När det är viktigt att rubriklisten syns.
        </li>
        <li>
          Exempel: ?
        </li>
      </ul>
      <h4>Tänk på att</h4>
      <ul>
        <li>
          Se <a href="#generella_riktlinjer_rubriklist">Generella riktlinjer rubriklist</a>.
        </li>
      </ul>
      <Section title= "Strukturera med bakgrunder ">
        <p>Skriv här om hur man strukturerar med bakgrunder </p>
      </Section>
      <Section title= "Strukturera med flikar">
        <p>Skriv här om hur man strukturerar med flikar </p>
      </Section>
    </Page>
  )
}
