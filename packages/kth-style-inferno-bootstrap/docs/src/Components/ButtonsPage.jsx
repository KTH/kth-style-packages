import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'
import UXComment from '../UXComment.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'

export default function BasicPage (props) {
  return (
    <Page>

      <Section title="Buttons">
        <Narrative>
          <p>Läs först <a href="/style/guidelines/buttonorlink">riktlinjer för knappar och länkar</a>.</p>    
        </Narrative>
        <Stage>
          <h3>Standard Buttons</h3>  
          <Scene>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>

            <Code>
{`<Button color="primary">primary</Button>
<Button color="secondary">secondary</Button>
<Button color="success">success</Button>
<Button color="info">info</Button>
<Button color="warning">warning</Button>
<Button color="danger">danger</Button>
<Button color="link">link</Button>`}
            </Code>
          </Scene>
          
        <Section id="Disabled_Button">
          <h3>Disabled Buttons</h3>
          <Scene>
            <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
            <Button color="secondary" size="lg" disabled>Button</Button>
            
            <Code>
{`<Button color="primary" size="lg" disabled>Primary button</Button>
<Button color="secondary" size="lg" disabled>Button</Button>`}
            </Code>
          </Scene>
        </Section>
       
      <Section id="link_button">
        <h2>Link button</h2>
        <UXComment>
          <h4>Användning</h4>
          <ul>
              <li>
                  Länka till en sida där man kan initiera en aktivitet
              </li>
               <li>
                  Namnge: "Till" + namnet på aktiviteten. Exempel: "Till ansökningen"
              </li>
          </ul>
          <h4>Tänk på att</h4>
          <ul>
              <li>
                  Använda sparsamt
              </li>
          </ul>
        </UXComment>
      </Section>
      
      <Section id="menu_link_button">
        <h2>Menu Link button</h2>
        <UXComment>
          <h4>Användning</h4>
          <ul>
            <li>
              Lista menyalternativ i form av länkar under en meny-knapp
            </li>
          </ul>
        </UXComment>
      </Section>
          
        
    </Stage>
  </Section>
        
      
     <Section title="Finns inte riktlinjer för i dag">
       <Narrative>
        <p> om behöver använda motivera varför i KTH Style gruppen för att utvärdera om vi tar in den i riktlinjerna.</p>
       </Narrative>
       <Stage>
      <h3>Different sizes</h3>
          <Scene>
            <Button color="primary" size="lg">Large Button</Button>{' '}
            <Button color="secondary" size="lg">Large Button</Button>
            
            <Code>
{`<Button color="primary" size="lg">Large Button</Button>
<Button color="secondary" size="lg">Large Button</Button>`}
            </Code>
          </Scene>

          <Scene>
            <Button color="primary" size="sm">Small Button</Button>{' '}
            <Button color="secondary" size="sm">Small Button</Button>

            <Code>
{`<Button color="primary" size="sm">Small Button</Button>
<Button color="secondary" size="sm">Small Button</Button>`}
            </Code>
          </Scene>

          <h3>Block Level Buttons</h3>
          <Scene>
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button color="secondary" size="lg" block>Block level button</Button>

            <Code>
{`<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>`}
            </Code>
          </Scene>
      
             
    </Stage>
  </Section>    
         
         
      <h2>Dölj helt!</h2>
 <Section id="Radio Buttons">
        <h2>HIDE - Radio Buttons</h2>
        <RadioButtonStage />
      </Section>  
      
      
       <h3>HIDE - Outline Buttons</h3>
          <Scene>
            <Button outline color="primary">primary</Button>{' '}
            <Button outline color="secondary">secondary</Button>{' '}
            <Button outline color="success">success</Button>{' '}
            <Button outline color="info">info</Button>{' '}
            <Button outline color="warning">warning</Button>{' '}
            <Button outline color="danger">danger</Button>

            <Code>
{`<Button outline color="primary">primary</Button>
<Button outline color="secondary">secondary</Button>
<Button outline color="success">success</Button>
<Button outline color="info">info</Button>
<Button outline color="warning">warning</Button>
<Button outline color="danger">danger</Button>`}
            </Code>
          </Scene>
      
      
      
      
    </Page>
  )
}

class RadioButtonStage extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Stage>
        <Scene>
          <h5>Radio Buttons</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
          </ButtonGroup>
          <p>Selected: {this.state.rSelected}</p>

          <Code>
{`<ButtonGroup>
  <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
  <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
  <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
</ButtonGroup>`}
          </Code>  
        </Scene>
        <Scene>
          <h5>Checkbox Buttons</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
          </ButtonGroup>
          <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
          <Code>
{`<ButtonGroup>
  <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
  <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
  <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
</ButtonGroup>`}
          </Code>
        </Scene>
      </Stage>
    );
  }
}
