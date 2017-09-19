import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'

import InputSection from './Forms/Input.jsx'
import InputGroupSection from './Forms/InputGroup.jsx'
import InputWithButton from './Forms/InputWithButton.jsx'
import ButtonShorthand from './Forms/ButtonShorthand.jsx'

export default function BasicPage (props) {
  return (
    <Page>
      <InputSection />
      <InputGroupSection />
      <InputWithButton />
      <ButtonShorthand />
    </Page>
  )
}
