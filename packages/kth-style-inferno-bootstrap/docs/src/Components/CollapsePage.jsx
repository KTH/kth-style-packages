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
            <Collapse className="ExampleCollapseContainer" isOpen={false} color="white" buttonText="Visa mer">
              <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
            </Collapse>  
          </Scene>
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
              {`<Collapse className="ExampleCollapseContainer" isOpen={false} color="white" buttonText="Visa mer"> 
  <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
</Collapse>  
              `}
            </Code>
          </Scene>
        </Stage>
        </Section>
       
         <Section title="Blue collapse">
           <Stage>
            <Scene>
              <Collapse className="ExampleCollapseContainer" isOpen={false} color="blue" buttonText="Visa mer">
                <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
              </Collapse>  
            </Scene>
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
              {`<Collapse className="ExampleCollapseContainer" isOpen={false} color="blue" buttonText="Visa mer">
  <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
</Collapse>  
              `}
            </Code>
          </Scene>
          </Stage> 
         </Section>
    </Page>
  )
}

