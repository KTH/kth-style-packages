import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'

import TextCardSection from './Card/TextCard.jsx'
import HeaderCardSection from './Card/HeaderCard.jsx'
import NavCard from './Card/NavCard.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <TextCardSection />
      <HeaderCardSection />
      <NavCard />
    </Page>
  )
}
