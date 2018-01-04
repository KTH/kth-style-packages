import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'
import Component from 'inferno-component'

import Button from '../../../lib/Button.jsx'
import Collapse from '../../../lib/Collapse.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <h1>Collapse</h1>
      <p>Läs först <a href="/style/guidelines/structure">riktlinjer struktur, layout</a> där du får överblick hur du kan strukturera en sida och få hjälp att välja rätt typ av komponenter.</p>  
      
      
      <Section title="White collapse">
        <Stage>
          <Scene>
            <ToggleCollapse defaultOpen={false} />
          </Scene>
            <p>TO DO: Justera komponent (färg, pil, storlek)</p>
            <UXComment>
              <h4>Användning</h4>
              <ul>
                <li>
                  För att dölja innehåll under en rubriklist som inte tar för mycket fokus på sidan. Innehållet är inte kritiskkt.
                </li>
                <li>
                  Exempel: ?
                </li>
             </ul>
             <h4>Tänk på att</h4>
             <ul>
               <li>
                 Försäkra dig om att användaren ser den vita rubriklisten (se <a href="/style/guidelines/testhelper#testa_anvandbarhet">Testa användbarhet</a>). Om inte överväg att använda <a href="#blue_collapse">Blue collapse</a>.
               </li>
               <li>
                 Se <a href="/style/guidelines/structure/#generella_riktlinjer_rubriklist">Generella riktlinjer rubriklist</a>.
               </li>
            </ul>
          </UXComment>

          <h3>Example code:</h3>
          <Scene>
            <Code>
    {`class ToggleCollapse extends Component {
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

      render() {
        return (
          <div>
            <Button onClick={this.doToggle}>Do toggle!</Button>
            <Collapse className="ExampleCollapseContainer" isOpen={this.state.isOpen}>
              <p>Some cool content</p>
            </Collapse>  
          </div>  
        )
      }
    }`}
            </Code>
          </Scene>

          <h3>CSS for collapse transition:</h3>
          <Scene>
            <Code language="css">
    {`.ExampleCollapseContainer {
      background-color: aliceblue;
      padding: 1rem;
    }

    .CollapseAnimation-leave {
    }

    .CollapseAnimation-leave-active {
      overflow: hidden;
      transition: all 0.3s ease-in;
    }

    .CollapseAnimation-leave-end {
      height: 0!important;
      padding-top: 0;
      padding-bottom: 0;
    }

    .CollapseAnimation-enter {
      height: 0!important;
      padding-top: 0;
      padding-bottom: 0;
    }

    .CollapseAnimation-enter-active {
      transition: all 0.3s ease-in;
      overflow: hidden;
    }

    .CollapseAnimation-enter-end {
    }
        `}  
                </Code>
              </Scene>
            </Stage>
          </Section>
       
         <Section title="Blue collapse">
           <Stage>
            <Scene>
              <ToggleCollapse defaultOpen={false} />
            </Scene>

            <p>TO DO: Justera komponent (färg, pil, storlek)</p>
            <UXComment>
              <h4>Användning</h4>
              <ul>
                <li>
                  För att dölja mer kritiskt innehåll under en rubriklist som syns.
                </li>
                <li>
                  Exempel: ?
                </li>
              </ul>
              <h4>Tänk på att</h4>
              <ul>
                <li>
                  Se <a href="/style/guidelines/structure/#generella_riktlinjer_rubriklist">Generella riktlinjer rubriklist</a>.
                </li>
              </ul>
            </UXComment>  
            <h3>Example code:</h3>
            <Scene>
              <Code>
      {`class ToggleCollapse extends Component {
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

        render() {
          return (
            <div>
              <Button onClick={this.doToggle}>Do toggle!</Button>
              <Collapse className="ExampleCollapseContainer" isOpen={this.state.isOpen}>
                <p>Some cool content</p>
              </Collapse>  
            </div>  
          )
        }
      }`}
              </Code>
            </Scene>

            <h3>CSS for collapse transition:</h3>
            <Scene>
              <Code language="css">
      {`.ExampleCollapseContainer {
        background-color: aliceblue;
        padding: 1rem;
      }

      .CollapseAnimation-leave {
      }

      .CollapseAnimation-leave-active {
        overflow: hidden;
        transition: all 0.3s ease-in;
      }

      .CollapseAnimation-leave-end {
        height: 0!important;
        padding-top: 0;
        padding-bottom: 0;
      }

      .CollapseAnimation-enter {
        height: 0!important;
        padding-top: 0;
        padding-bottom: 0;
      }

      .CollapseAnimation-enter-active {
        transition: all 0.3s ease-in;
        overflow: hidden;
      }

      .CollapseAnimation-enter-end {
      }
      `}  
              </Code>
            </Scene>
          </Stage> 
         </Section>
      
  
  
    </Page>
  )
}

class ToggleCollapse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.doToggle}>Do toggle!</Button>
        <Collapse className="ExampleCollapseContainer" isOpen={this.state.isOpen}>
          <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
        </Collapse>  
      </div>  
    )
  }
}
