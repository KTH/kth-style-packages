import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Riktlinjer struktur, layout</h1>
      <p>
        En sida med bra struktur upplevs renare och är lättare att scanna, vilket gör att slutanvändaren får överblick, kan hitta och förstå innehållet bättre.
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
      <Section title= "Strukturera med tabell">
        <p>Skriv här om hur man strukturerar med tabeller. </p>
      </Section>
      <Section title="Strukturera med utfällbara rubriklister">
        <p>
            Utfällbara rubriklister används när man vill dölja information på en sida för att ge användaren överblick, samtidigt som
            man ger användaren en möjlighet att kunna se mer information utan att behöva lämna sidan.
        </p>
        <p>
            Det finns finns två olika typer av rubriklister. Välj komponenttyp utifrån användning (se tabellen nedan).
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
              <th>Komponenttyp</th>
              <th>Används för</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/style/api/components/collapse#white_collapse">White collapse</a></td>
              <td>Dölja innehåll under en rubriklist som inte tar för mycket fokus på sidan. Innehållet är inte kritiskkt.</td>
            </tr>
            <tr>
              <td><a href="/style/api/components/collapse#blue_collapse">Blue collapse</a></td>
              <td>Dölja mer kritiskt innehåll under en rubriklist som syns.</td>
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
      
      <Section title= "Strukturera med bakgrunder ">
        <p>Skriv här om hur man strukturerar med bakgrunder </p>
      </Section>
      <Section title= "Strukturera med flikar">
        <p>Skriv här om hur man strukturerar med flikar </p>
      </Section>
    </Page>
  )
}
