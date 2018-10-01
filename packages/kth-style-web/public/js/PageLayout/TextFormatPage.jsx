import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page> 
      <h1>Textformat och fonter</h1>
      <Section>
        <Stage>
          <Scene>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
            <p>Rubrik h1</p>
            <UXComment>
              <p>
                --Mobile--
                font: Open Sans<br />
                font-size: 28px<br />
                font-weight: 600<br />
                margin-bottom: 22px <br />
                padding: 0 <br />
                color: black<br />
                line-height: 33.6px
              </p>
              <p>
                --Desktop--<br />
                font-size: 46px<br />
                line-height: 55.2px
              </p>
            </UXComment>
            <Code>{`<h1 class=""><h1>`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>        
            <p>Rubrik h2</p>
            <UXComment>
              <p>
                --Mobile--<br />
                font: Open Sans<br />
                font-size: 26px<br />
                font-weight: 600<br />
                margin-bottom: 8px<br />
                padding: 0 <br /> 
                color: black<br />
                line-height: 31.2px
              </p>
              <p>
                --Desktop--<br />
                font-size: 30px<br />
                line-height: 36px
              </p>
            </UXComment>
            <Code>{`<h2 class=""></h2>`}</Code>
          </Scene>
        </Stage>
      </Section>

        
      <Section>
        <Stage>
          <Scene>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
            <p>
              <ul>
                <li>Rubrik h3</li>
                <li>Blockrubrik</li>
                <li>Rubrik puffblock smal</li>
                <li>Menyrubrik</li>
                <li>Sitename</li>
              </ul>
            </p>
            <UXComment>
              <p>
                --Mobile--<br />
                font: Open Sans<br />
                font-size: 20px<br />
                font-weight: 600<br />
                margin: 8px<br />
                padding: 0 <br />
                color: Black or white depending on background color<br />
                line-height: 24px
              </p>
              <p>
                --Desktop--<br />
                font-size: 20px<br />
                font-weight: 600<br />
                line-height: 24px
              </p>
            </UXComment>
            <Code>{`<h3 class=""></h3>`}</Code>
          </Scene>
        </Stage>
      </Section>
   
       
      <Section>
        <Stage>
          <Scene>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>Rubrik puffblock bred</p>
            <UXComment>
              <p>
                --Mobile--<br />
                font: Open Sans<br />
                font-size: 20px<br />
                font-weight: 600<br />
                margin-bottom: 8px <br />
                padding: 0<br />
                color: Black or white depending on background color<br />
                line-height: 24px
              </p>
              <p>
                --Desktop--<br />
                font-size: 26px<br />
                font-weight: 400<br />
                line-height: 31.2px
              </p>
            </UXComment>
            <Code>{`<h3 class=""></h3>`}</Code>
         </Scene>
        </Stage>
      </Section>
       
      <Section>
        <Stage>
          <Scene>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              <ul>
                  <li>Ingress</li>
                  <li>Megameny</li>
                  <li>Blockquote</li>
              </ul>
            </p>
            <UXComment>
              <p>
                --Mobile--<br />
                font: Open Sans<br /> 
                font-size: 18<br />
                font-weight: 400<br />
                margin-bottom: 22 <br />
                padding: 0<br />
                line-height: 27px
              </p>
              <p>
                --Desktop--<br />
                font-size: 22<br />
                font-weight: 400<br />
                margin-bottom: 22 <br />
                line-height: 33px
              </p>
            </UXComment>
            <Code>{`<p class=""></p>`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Brödtext puff</p>
            <UXComment>
              <p>
                --Mobile--<br />
                font-family: Open Sans<br />
                font-size: 16px<br />
                font-weight: 400<br />
                margin-bottom: 16px<br />
                padding: 0<br />
                color: Black or white depending on background color<br />
                line-height: 24px
              </p>
              <p>
                --Desktop--<br />
                font-size: 16px<br />
                font-weight: 400<br />
                line-height: 27px
              </p>
            </UXComment>
            <Code>{`<p class=""></p>`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Brödtext artikel</p>
            <UXComment>
              <p>
                --Mobile--<br />
                font: Georgia<br />
                font-size: 16px<br />
                font-weight: 400<br />
                margin-bottom: 0 <br /> 
                padding: 0<br />
                color: black<br />
                line-height: 27px
              </p>
              <p>
                --Desktop--<br />
                font-size: 18px<br />
                font-weight: 400<br />
                line-height: 30.375px
              </p>
            </UXComment>
            <Code>{`<p class=""></p>`}</Code>
          </Scene>
        </Stage>
      </Section> 
    </Page>
  )
}
