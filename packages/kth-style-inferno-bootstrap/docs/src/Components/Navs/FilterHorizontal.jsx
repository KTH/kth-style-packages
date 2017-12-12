import { Section, Stage, Scene, Code, Narrative } from '../../components.jsx'

import Nav from '../../../../lib/Navigation/Nav.jsx'
import NavItem from '../../../../lib/Navigation/NavItem.jsx'
import NavLink from '../../../../lib/Navigation/NavLink.jsx'

export default function () {
  return (
    <Section title="Filter">
      <Stage>
        <h3>Horizontal Filter Navigation</h3>  
        <Scene>
          <Nav className="nav-filter">
            <NavItem>
              <NavLink href="#">Kommande</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="active">Aktuella</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Avslutade</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Oavslutade(disabled)</NavLink>
            </NavItem>
          </Nav>
          <Code>
{`<Nav className="nav-filter">
  <NavItem>
    <NavLink href="#">Kommande</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#" className="active">Aktuell</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Avslutade</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Oavslutade(disabled)</NavLink>
  </NavItem>
</Nav>`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}