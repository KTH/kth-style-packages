import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'
import ButtonToolbar from '../../../lib/ButtonToolbar.jsx'

import ButtonDropdown from '../../../lib/ButtonDropdown.jsx';
import DropdownToggle from '../../../lib/DropdownToggle.jsx';
import DropdownMenu from '../../../lib/DropdownMenu.jsx';
import DropdownItem from '../../../lib/DropdownItem.jsx';

export default function BasicPage (props) {
  return (
    <Page>

      <Section title="Button Group">
        <Narrative>
          <p>Group a series of buttons together on a single line with the button group.</p>
        </Narrative>  
        <Stage>
          <Scene>
            <ButtonGroup>
              <Button>Left</Button>{' '}
              <Button>Middle</Button>{' '}
              <Button>Right</Button>
            </ButtonGroup>

            <Code>
{`<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`}
            </Code>
          </Scene>
        </Stage>
      </Section>

      <Section title="Button Toolbar">
        <Narrative>
          <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>
        </Narrative>
        <Stage>
          <Scene>
            <ButtonToolbar>
              <ButtonGroup className="mr-2">
                <Button>Store</Button>
                <Button>Update</Button>
                <Button>Stay</Button>
                <Button>Flow</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>

            <Code>
{`<ButtonToolbar>
  <ButtonGroup className="mr-2">
    <Button>Store</Button>
    <Button>Update</Button>
    <Button>Stay</Button>
    <Button>Flow</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2">
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>`}
            </Code>
          </Scene>
        </Stage>
      </Section>

      <Section title="Button Vertical">
        <Stage>
          <Scene>
            <ButtonGroup vertical>
              <Button>One</Button>
              <Button>Two</Button>
              <SampleDropdownButton caret>Drop me!</SampleDropdownButton>
              <ButtonGroup>
                <Button>Split drop!</Button><SampleDropdownButton split />
              </ButtonGroup>
            </ButtonGroup>

            <Code>
{`<ButtonGroup vertical>
  <Button>One</Button>
  <Button>Two</Button>
  <SampleDropdownButton caret>Drop me!</SampleDropdownButton>
  <ButtonGroup>
    <Button>Split drop!</Button><SampleDropdownButton split />
  </ButtonGroup>
</ButtonGroup>`}
            </Code>
          </Scene>
          <Scene>
            <Narrative>
              This is the code to create the dropdown button:  
            </Narrative>  
            <Code>
{`class SampleDropdownButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render({ children, ...props }) {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}`}
            </Code>              
          </Scene>
        </Stage>
      </Section>   

    </Page>
  )
}

class SampleDropdownButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render({ children, ...props }) {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}