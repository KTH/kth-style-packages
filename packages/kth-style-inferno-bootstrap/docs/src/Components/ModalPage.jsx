import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'
import Modal from '../../../lib/Modal/Modal.jsx'
import ModalHeader from '../../../lib/Modal/ModalHeader.jsx'
import ModalBody from '../../../lib/Modal/ModalBody.jsx'
import ModalFooter from '../../../lib/Modal/ModalFooter.jsx'


export default function BasicPage (props) {
  return (
    <Page>
    <h1>Modal</h1>
      <p>Läs först riktlinjer för <a href="/style/guidelines/dialouge">dialoger</a> och <a href="/style/guidelines/information">information/ återkoppling</a> för att förstå när man använder modaler.</p>  
      
    <Stage>
      <h2>Information modal</h2>
      <section id="information_modal">
        <br></br>
        <p> TO DO: Lägg till komponet för informera när klickat på i-ikon </p>
      <Scene>

        <ButtonGroup>  
          <ModalExample buttonLabel="Show modal" />
          <ModalExample buttonLabel="Show modal without fade" fade={false} />
        </ButtonGroup>
        <Code>
{`<ButtonGroup>  
  <ModalExample buttonLabel="Show modal" />
  <ModalExample buttonLabel="Show modal (no fade)" fade={false} />
</ButtonGroup>`}
        </Code>  
      </Scene>

      <h3>Implementation of &lt;ModalExample&gt; component:</h3>
      <Scene>
        <Code>
{`class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const fadeModal = (props.hasOwnProperty('fade') ? this.props.fade : true)
    return (
      <Button onClick={this.toggle}>{this.props.buttonLabel}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Button>
    );
  }
}`}
        </Code> 
      </Scene>

      <h3>CSS for modal transitions:</h3>
      <Scene>
        <Code language="css">
{`/* You need to override Bootstrap .modal because inferno-animation does animations */

.modal {
  display: block;
}

/* The actual modal */

.ModalFade-leave {
  transform: translateY(0);
  opacity: 1;
}

.ModalFade-leave-active {
  overflow: hidden;
  transition: transform 0.5s ease-in, opacity 0.4s ease-in;
}

.ModalFade-leave-end {
  transform: translateY(-150%);
  opacity: 0;
}

.ModalFade-enter {
  transform: translateY(-150%);
  opacity: 0;
}

.ModalFade-enter-active {
  transition: transform 0.5s ease-out, opacity 0.4s ease-in;
}

.ModalFade-enter-end {
  transform: translateY(0);
  opacity: 1;
}

/* The modal background */

.ModalBackdropFade-leave {
  opacity: 0.5;
}

.ModalBackdropFade-leave-active {
  overflow: hidden;
  transition: opacity 0.3s ease-in;
}

.ModalBackdropFade-leave-end {
  opacity: 0!important;
}

.ModalBackdropFade-enter {
  opacity: 0!important;
}

.ModalBackdropFade-enter-active {
  transition: opacity 0.3s ease-in;
}

.ModalBackdropFade-enter-end {
  opacity: 0.5;
}`}  
        </Code>
      </Scene>
  

      
    
        <UXComment>
          <h4>Användning</h4>
          <ul>
            <li>
              För att ge ytterligare information när användaren efterfrågar det
            </li>
            <li>
              T ex hjälpinformation.
            </li>
          </ul>
          <h4>Tänk på att</h4>
          <ul>
            <li>
              Se <a href="/style/guidelines/information#general_guidelines_information">Generella riktlinjer information</a>.
            </li>
          </ul>
        </UXComment>
      </section>
    </Stage>
 
    </Page>
  )
}

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const fadeModal = (this.props.hasOwnProperty('fade') ? this.props.fade : true)
    return (
      <Button onClick={this.toggle}>{this.props.buttonLabel}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Button>
    );
  }
}
