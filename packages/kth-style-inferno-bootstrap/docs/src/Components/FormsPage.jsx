import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'

import InputSection from './Forms/Input.jsx'
import InputGroupSection from './Forms/InputGroup.jsx'
import InputWithButton from './Forms/InputWithButton.jsx'
import ButtonShorthand from './Forms/ButtonShorthand.jsx'

export default function BasicPage (props) {
  return (
    <Page>
        
      <h1>Form</h1>
      <Section title="Text input">  
        <Stage> 

        </Stage>
      </Section>
      
      <Section title="Radio buttons">  
        <Stage> 

        </Stage>
      </Section>
    
      <Section title="Drop down">  
        <Stage> 

        </Stage>
      </Section>
      
      <Section title="Check box">  
        <Stage> 

        </Stage>
      </Section>
     
      <Section title="Date picker">  
        <Stage> 

        </Stage>
      </Section>
      
     
      <InputSection />
      <InputGroupSection />
      <InputWithButton />
      <ButtonShorthand />
    </Page>
  )
}
