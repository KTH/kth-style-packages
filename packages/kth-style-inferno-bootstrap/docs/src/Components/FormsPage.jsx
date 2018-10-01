import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'

import InputSection from './Forms/Input.jsx'
import InputGroupSection from './Forms/InputGroup.jsx'
import InputWithButton from './Forms/InputWithButton.jsx'
import ButtonShorthand from './Forms/ButtonShorthand.jsx'

import Form from '../../../lib/Form/Form.jsx'
import Input from '../../../lib/Form/Input.jsx'
import Label from '../../../lib/Form/Label.jsx'
import FormGroup from '../../../lib/Form/FormGroup.jsx'
import Button from '../../../lib/Button.jsx'

export default function BasicPage (props) {
  return (
    <Page>
        
      <h1>Form</h1>
      <p>Läs först <a href="/style/guidelines/form">Riktlinjer formulär</a> där du får hjälp att välja rätt typ av formulärskomponenter.</p>


      <Section title="Example Form">  
        <Stage>
          <Scene>
            <Form>
              <FormGroup>
                <Label for="email">Email address:</Label>
                <Input type="email" id="email"></Input>
              </FormGroup>
              <FormGroup>
                <Label for="pwd">Password:</Label>
                <Input type="password" id="pwd"></Input>
              </FormGroup>
              <FormGroup className="form-check">
                <Input type="checkbox" id="checkbox_example"/>
                <Label check for="checkbox_example">Remember me</Label>
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
              
            <Code>                
{`<Form>
  <FormGroup>
    <Label for="email">Email address:</Label>
    <Input type="email" id="email"></Input>
  </FormGroup>
  <FormGroup>
    <Label for="pwd">Password:</Label>
    <Input type="password" id="pwd"></Input>
  </FormGroup>
  <FormGroup className="form-check">
    <Input type="checkbox" id="checkbox"/>
    <Label for="checkbox">Remember me</Label>
  </FormGroup>
  <Button type="submit">Submit</Button>
</Form>`}
            </Code>
          </Scene>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För indata i form av text.
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Matcha fält till typen och storleken på data.
                    <ul>
                      <li>
                        Exempel: postnummer.
                      </li>
                    </ul>
                </li>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
    
      <Section title="Text input">  
        <Stage> 
          <Scene>
              {/* //Typ så här? */}
            <Input type="text" name="title"></Input>
            <Code>
                {`<Input type="text" name="title"></Input>`}
            </Code>
          </Scene>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För indata i form av text.
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Matcha fält till typen och storleken på data.
                    <ul>
                      <li>
                        Exempel: postnummer.
                      </li>
                    </ul>
                </li>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
      
      <Section title="Radio buttons">  
        <Stage> 
          <Scene>
            <Form>
              <FormGroup className="form-check">
                <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <Label for="exampleRadios1">
                  Default radio
                </Label>
              </FormGroup>
              <FormGroup className="form-check">
                <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <Label for="exampleRadios2">
                  Second default radio
                </Label>
              </FormGroup>
              <FormGroup className="form-check disabled">
                <Input type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <Label for="exampleRadios3">
                  Disabled radio
                </Label>
              </FormGroup>
            </Form>
            
            <Code>
{`<Form>
  <FormGroup className="form-check">
    <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
    <Label for="exampleRadios1">
      Default radio
    </Label>
  </FormGroup>
  <FormGroup className="form-check">
    <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
    <Label for="exampleRadios2">
      Second default radio
    </Label>
  </FormGroup>
  <FormGroup className="form-check disabled">
    <Input type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
    <Label for="exampleRadios3">
      Disabled radio
    </Label>
  </FormGroup>
</Form>`}
            </Code>
          </Scene>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För flervalssvar när bara ett val är möjligt (och alternativen är färre).
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
              <li>
                Alternativen ska inte vara fler än att de kan presenteras överskådligt på en rad. Annars använd rullgardinsmeny.
              </li>
              <li>
                Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
              </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
    
      <Section title="Drop down">  
        <Stage> 
            <UXComment>
              <h4>Användning</h4>
              <ul>
                  <li>
                      För flervalssvar när bara ett val är möjligt (och alternativen är många).
                  </li>
                  <li>
                      Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                  </li>
              </ul>
              <h4>Tänk på att</h4>
              <ul>
                  <li>
                      Undvik rullgardinsmeny när det finns färre än tre alternativ. Visa dem istället som radio-knappar (se ovan).
                  </li>
                  <li>
                      Undvik rullgardinsmeny när indata är något som är välbekant för användaren och snabbare kan matas in än att välja från en lång lista
                  </li>
                  <li>
                       Överväg användningsfrekvens, lista de vanligaste valen först när det är möjligt.
                  </li>
                  <li>
                      Användaren ska kunna söka fram rätt alternativ i rullgardinsmenyn genom att använda bokstavstangenterna.
                  </li>
                  <li>
                      Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                  </li>    
              </ul>          
            </UXComment>
        </Stage>
      </Section>
      
      <Section title="Check box">  
        <Stage> 
          <Scene>
            <Form>
              <FormGroup className="form-check">
                <Input type="checkbox" value="" id="defaultCheck1"/>
                <Label for="defaultCheck1">
                  Default checkbox
                </Label>
              </FormGroup>
              <FormGroup className="form-check">
                <Input type="checkbox" value="" id="defaultCheck2" disabled/>
                <Label for="defaultCheck2">
                  Disabled checkbox
                </Label>
              </FormGroup>
            </Form>
            
            <Code>
{`<Form>
  <FormGroup className="form-check">
    <Input type="checkbox" value="" id="defaultCheck1"/>
    <Label for="defaultCheck1">
      Default checkbox
    </Label>
  </FormGroup>
  <FormGroup className="form-check">
    <Input type="checkbox" value="" id="defaultCheck2" disabled/>
    <Label for="defaultCheck2">
      Disabled checkbox
    </Label>
  </FormGroup>
</Form>`}
            </Code>
          </Scene>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                    För flervalssvar när flera val är möjliga.
                </li>
                <li>
                    Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
     
      <Section title="Date picker">  
        <Stage> 
          <p> Komponent ska infogas </p>
          <UXComment>
            <h4>Användning</h4>
            <ul>
                <li>
                  För val av datum.
                </li>
                <li>
                  Exempel: se <a href="/style/page-layout/formexamplepage">formulär</a>.
                </li>
            </ul>
            <h4>Tänk på att</h4>
            <ul>
                <li>
                    Se <a href="/style/guidelines/form#generella_riktlinjer_for_formularkomponenter">Generella riktlinjer för formulärkomponenter</a>.
                </li>    
            </ul>
          </UXComment>
        </Stage>
      </Section>
      
    </Page>
  )
}
