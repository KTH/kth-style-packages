import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Knappar och länkar</h1>
      <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer knappar, länkar</a> där du får hjälp att välja rätt typ av komponent.</p>    

       
      <h2>Knappar</h2>
        <Stage>
          <Section title="Primary button">  
          </Section>
       </Stage>                  
    </Page>
  )
}
