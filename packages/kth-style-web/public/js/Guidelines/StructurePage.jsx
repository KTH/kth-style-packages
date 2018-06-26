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
     
      <Section title= "Olika sätt att strukturera innehåll på en sida">
        
        <h3 id="strukturera_med_rubriker">Rubriker</h3>
        <p>Se <a href="/style/guidelines/heading">Riktlinjer rubriker, brödtext</a>.</p>
        
        <h3 id="strukturera_med_bakgrunder">Bakgrunder</h3>
        <p>Bakgrundsplattor används för att binda ihop olika innehåll. Bakgrundsplattor är viktigare när det är mycket olika slags innehåll på en sida och där det inte räcker med att separera innehåll med luft. </p>
        <p>Tänk på att testa designen så att användaren uppfattar informationen som det är tänkt, då inboxad information i vissa lägen kan missas.</p>
        <h4>Välj bakgrund</h4>
        <a href="/style/api/components/card">Cards</a>
        
        <h3 id="strukturera_med_tabeller">Tabeller</h3>
        <p>Tabeller används för att få ett innehåll överskådligt strukturetrat som kan delas upp under kolumner och rader.</p>
        <h4>Välj tabell</h4>
        <a href="/style/api/components/table">Table</a>
        
        <h3 id="strukturera_med_utfallbara_rubriklister">Utfällbara rubriklister</h3>
        <p>
          Utfällbara rubriklister används när man vill dölja information på en sida för att ge användaren överblick, samtidigt som man ger användaren en möjlighet att kunna se mer information utan att behöva lämna sidan.
         </p>
         <p>
           Det finns finns två olika typer av rubriklister. Välj komponenttyp utifrån användning (se tabellen nedan).
         </p>
        <p>
          Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-12/">bakgrund till val av rubriklister</a>.
        </p>
        <h4>Välj typ av rubriklist</h4>
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
        <h4 id="generella_riktlinjer_rubriklist">Generella riktlinjer rubriklist</h4>
        <ul>
           <li>
             Rubriken ska beskriva innehållet som kan fällas ut.
           </li>
        </ul>
      
      <h3 id="strukturera_med_tabbar">Tabbar</h3>
        <p>Tabbar används när användaren ska kunna alternera mellan olika grupper av innehåll i samma kontext (innehållet ska visas på samma sida, man ska inte navigera i väg).</p>
        <p>Innehållet under tabbarna ska:</p>
        <ul>
           <li>
             Relatera till varandra (logiskt hänga ihop). 
           </li>
           <li>
              Kunna grupperas så att innehållet logiskt bara kan höra hemma under en av tabbarna. Hittar man inte distinkta grupperingar så passar inte tabbar för det innehållet.
           </li>
           <li>
             Inte behöva visas samtidigt, som när man vill jämföra innehåll (användaren ska inte behöva klicka fram och tillbaka mellan tabbar och hålla saker i minnet).
           </li>
           <li>
             Vara komprimerad information, t ex 1-2 korta stycken av text. 
           </li>
        </ul>
        <p>
            Läs gärna <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-21/">bakgrund till val av tabbar</a>.
        </p>
        <h4>Välj tabbar</h4>
        <a href="/style/api/components/tabs">Tabs</a>
        <h4 id="generella_riktlinjer_rubriklist">Generella riktlinjer tabbar</h4>
        <ul>
           <li>
             Bestäm ordningen på tabbarna utifrån vad användarna upplever som naturligt
           </li>
           <li>
             Tabbarna ska inte ta upp mer än en rad eftersom det är svårt att förstå flikarnas inbördes förhållande när de hamnar under varandra. Hamnar flikarna på mer än en rad så indikerar det på för många flikar eller för långa namn.
           </li>
           <li>
             Namngivninga av tabbar: 
             <ul>
              <li>
                Korta meningsfulla titlar på flikarna gör att de bli lättare att scanna och att flikarna inte tar för stor plats. 1-2 ord rekommenderas.
              </li>
              <li>
                Använd mouse over om behöver förklara innehållet ytterligare.
              </li>
             </ul>
            </li>
        </ul>
      </Section>
    </Page>
  )
}
