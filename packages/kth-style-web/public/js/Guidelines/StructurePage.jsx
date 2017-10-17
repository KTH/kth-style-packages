import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Struktur, layout på sida</h1>
      <section>
        <h2>Gruppera innehåll</h2>
        <p>
          Lägg objekt som hör ihop närmare och använd luft för att separera till andra element. Använd rubriker för att gruppera innehåll. En bra struktur på sidan gör att den upplevs ”renare” och det blir lättare att ”scanna” sidan, vilket gör att slutanvändaren får överblick, kan hitta och förstå innehållet bättre (Användbarhet, Tillgänglighet).
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
          Se exempel: <a href="/style/textexample">rubriker och brödtext</a>.
        </p>
      </section>

      <section>
        <h2>Vertikal alignment</h2>
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
      </section>
      <Section title= "Strukturera med rubriker">
        <p>Skriv här om hur man strukturerar med rubriker, text, listor </p>
      </Section>
      <Section title= "Strukturera med rubriker">
        <p>Skriv här om hur man strukturerar med utfällbara rubriklister </p>
      </Section>
            <Section title= "Strukturera med rubriker">
        <p>Skriv här om hur man strukturerar med bakgrunder </p>
      </Section>
            <Section title= "Strukturera med rubriker">
        <p>Skriv här om hur man strukturerar med flikar </p>
      </Section>
    </Page>
  )
}
