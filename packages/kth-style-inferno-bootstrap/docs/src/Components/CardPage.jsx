import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'

import TextCardSection from './Card/TextCard'
import HeaderCardSection from './Card/HeaderCard'

export default function BasicPage (props) {
  return (
    <Page>
      <TextCardSection />
      <HeaderCardSection />
    </Page>
  )
}
