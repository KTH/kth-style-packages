import { Section, Stage, Scene, Code, Narrative } from '../../components.jsx'

import Nav from '../../../../lib/Navigation/Nav.jsx'
import NavItem from '../../../../lib/Navigation/NavItem.jsx'
import { Link } from 'inferno-router'

function MenuLink ({href, title}) {
    return (
      <NavItem>
        <Link className="nav-link" to={href}>{title}</Link>
      </NavItem>
    )
  }

export default function () {
  return (
    <Section title="Navigation menu">
      <Stage>
        <h3>Personal Meny Example</h3>  
        <Scene>
        <div id="kth-menu">
            <div id='kth-menu-container' >
                <Nav className="main-m">
                    <MenuLink href="#" title="Lena" />
                    <MenuLink href="#" title="Schema" />
                    <MenuLink href="#" title="Kurser&Program" />
                    <MenuLink href="#" title="Grupper" />
                    <MenuLink href="#" title="Studieadministrationn" />
                    <MenuLink href="#" title="Mail" />
                    <MenuLink href="#" title="Noticer" /> 
                    <MenuLink href="#" title="Inställningar" />
                </Nav>
            </div>
        </div>
          <Code>
{`<div id='kth-menu-container'>
    <Nav className="main-m">
        <NavItem>
          <Link className="nav-link" to="#">Lena</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Schema</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Kurser&Program</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Grupper</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Studieadministrationn</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Mail</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Noticer</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Inställningar</Link>
        </NavItem>
    </Nav>
</div>`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}