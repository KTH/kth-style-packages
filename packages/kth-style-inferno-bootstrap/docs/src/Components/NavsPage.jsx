import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'

import HorizontalSection from './Navs/Horizontal.jsx'
import VerticalSection from './Navs/Vertical.jsx'
import TabbedSection from './Navs/Tabbed.jsx'
import PillsSection from './Navs/Pills.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <HorizontalSection />
      <VerticalSection />
      <TabbedSection />
      <PillsSection />
    </Page>
  )
}
