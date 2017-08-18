import Component from 'inferno-component'
import classnames from 'classnames';
import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Nav from '../../../lib/Navigation/Nav.jsx'
import NavItem from '../../../lib/Navigation/NavItem.jsx'
import NavLink from '../../../lib/Navigation/NavLink.jsx'
import TabContent from '../../../lib/TabContent.jsx'
import TabPane from '../../../lib/TabPane.jsx'
import Row from '../../../lib/Row.jsx'
import Col from '../../../lib/Col.jsx'
import Button from '../../../lib/Button.jsx'

export default function () {
  return (
    <Section title="Tabs">
      <Stage>
        <Scene>
          <TabExample />
        </Scene>

        <h3>Example Code:</h3>
        <Scene>
          <Code>
{`class TabExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="ExampleTab" fade activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <h2>Special Title Treatment</h2>
              </Col>
              <Col sm="6">
                <h2>Special Title Treatment</h2>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}


class TabExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="ExampleTab" fade activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <h2>Special Title Treatment</h2>
              </Col>
              <Col sm="6">
                <h2>Special Title Treatment</h2>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}