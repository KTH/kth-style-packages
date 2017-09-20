import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import Popover from '../../../lib/Popover.jsx'
import PopoverHeader from '../../../lib/PopoverHeader.jsx'
import PopoverBody from '../../../lib/PopoverBody.jsx'

export default function BasicPage (props) {
  return (
    <Page>

      <Section title="Popovers">
        <Narrative>
          <p>Popovers are built with Popper.js.</p>
        </Narrative>
        <Stage>
          <Scene>
            <ExamplePopover />
          </Scene>
          <Scene>
            <Narrative>
              This is the code to create a button with a popover:  
            </Narrative> 
            <Code>
{`import { Manager, Target, Popper, Arrow, Travel } from 'inferno-popper'

class ExamplePopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Manager>
        <Target>
          <Button id="Popover1" onClick={this.toggle}>
            Launch Popover
          </Button>
        </Target>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </Manager>
    );
  }
}`}
            </Code>
          </Scene>
        </Stage>
      </Section>

    </Page>
  )
}

import { Manager, Target, Popper, Arrow, Travel } from 'inferno-popper'

class ExamplePopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Manager>
        <Target>
          <Button id="Popover1" onClick={this.toggle}>
            Launch Popover
          </Button>
        </Target>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </Manager>
    );
  }
}
