import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
      <h1>Dialoger</h1>
      <section>
        <p>
            Dialoger används då man behöver direkt input från användaren. Användningen ska minimeras då de avbryter användarens flöde. 
        </p>
        <p>
            Det finns finns två olika typer av dialoger. Välj dialog utifrån användning (se nedan).
        </p>
        <p>
          Läs gärna mer om <a href="https://www.kth.se/social/group/kth-style-guide/page/bakgrund-16/">bakgrund till varför dialogerna ser ut och beter sig som det gör</a>.
        </p>
      </section>
      
      <Section title="Välj typ av dialog">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Namn</th>
              <th>Användning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Confirm</td>
              <td>När man vill att användaren ska bekräfta ett gjort val som inte kan ångras</td>
            </tr>
            <tr>
              <td>Choose</td>
              <td>När användaren ska göra val som är mindre allvarligt (det går att ångra)</td>
            </tr>
             </tbody>
        </table>
      </Section>

      <section>
        <h2>Flytta till Komponenter: Olika typer av dialoger</h2>
        <h3>Confirm</h3>
        <p> Infoga komponent här...</p>
        <h4>Användning</h4>
        <ul>
            <li>
                När man vill att användaren ska bekräfta ett gjort val som inte kan ångras.
            </li>
            <li>
                Exempel: ta bort fil.
            </li>
        </ul>
        <h4>Tänk på att</h4>
        <ul>
            <li>
                Det är extra viktigt för dialoger att tänka på namngivning av knapparna, se <a href="/style/guidelines/buttonorlink/#generella_riktlinjer_link_knapp">Generella riktlinjer för länk och knapp</a>.
            </li>
        </ul>

        <h3>Choose</h3>
        <p> Infoga komponent här...</p>
        <h4>Användning</h4>
        <ul>
            <li>
                När användaren ska göra val som är mindre allvarligt (det går att ångra).
            </li>
            <li>
                Exempel:
                <ul>
                    <li>
                        När man vill uppmuntra att avsluta något som användare har initierat.
                    </li>
                    <li>
                        Bifoga bild.
                    </li>
                </ul>
             </li>
           </ul>
           <h4>Tänk på att</h4>
           <ul>
             <li>
                Det är extra viktigt för dialoger att tänka på namngivning av knapparna, se <a href="/style/guidelines/buttonorlink/#generella_riktlinjer_link_knapp">Generella riktlinjer för länk och knapp</a>.
             </li>
           </ul>
         </section>
    </Page>
  )
}
