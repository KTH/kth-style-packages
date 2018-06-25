
import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Tabs</h1>
      <p>Läs först <a href="/style/guidelines/structure">riktlinjer struktur, layout</a> där du får överblick hur du kan strukturera en sida och få hjälp att välja rätt typ av komponenter.</p>    

          <Section title="Tabs">  
            <Stage>
              <UXComment>
              <h4>Användning</h4>
              <ul>
                <li>
                  ...
                </li>
                <li>
                 ...
                </li>
              </ul>
            </UXComment>           
          </Stage> 
         </Section>  
               
    </Page>
  )
}
