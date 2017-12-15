import { Section, Stage, Scene, Code, Narrative,  } from '../../components.jsx'

import Card from '../../../../lib/Card/Card.jsx'
import CardBody from '../../../../lib/Card/CardBody.jsx'


import Nav from '../../../../lib/Navigation/Nav.jsx'
import NavItem from '../../../../lib/Navigation/NavItem.jsx'
import NavLink from '../../../../lib/Navigation/NavLink.jsx'

export default function () {
  return (
    <Section title="Vertical Navigation Card">
      <Narrative>
        <p>Use a card to display veritcal navigation in an engaging and concise manner.</p>  
      </Narrative>  
      <Stage>
        <Scene>
            <Card className="verticalNavCard">
                <CardBody>
                    <div className="course-card big-icon">
                        <span>
                            <h4>Algebra och geometri (SF1624)</h4>
                            <Nav  vertical>
                                <NavItem>
                                    <NavLink href="#">Kursinformation</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="icon-canvas">Material HT17-9</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="icon-canvas">Material HT17-9</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="icon-canvas">Material HT17-9</NavLink>
                                </NavItem>
                            </Nav>
                        </span>
                        <i className="course-pie-grey-50"></i>
                    </div>
                </CardBody>
            </Card>

            <Code>
{`<Card className="verticalNavCard">
<CardBody>
    <div className="course-card big-icon">
        <span>
            <h4>Algebra och geometri (SF1624)</h4>
            <Nav  vertical>
                <NavItem>
                    <NavLink href="#">Kursinformation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="icon-canvas">Material HT17-9</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="icon-canvas">Material HT17-9</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="icon-canvas">Material HT17-9</NavLink>
                </NavItem>
            </Nav>
        </span>
        <i className="course-pie-grey-50"></i>
    </div>
</CardBody>
</Card>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
