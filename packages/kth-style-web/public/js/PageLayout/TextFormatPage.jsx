import {
  Page,
  Code,
  Section,
  Stage,
  Scene,
  Narrative,
  UXComment
} from "kth-style-inferno-bootstrap/docs/src/components.jsx";

export default function DropdownsPage(props) {
  return (
    <Page>
      <h1>Textformat och fonter</h1>
      <Section>
        <Stage>
          <Scene>
            <h1 class="t1">T1 - Lorem ipsum dolor sit amet. </h1>
            <UXComment>
              <p>Rubrik nivå 1</p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>600</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1.75rem (28px)</td>
                  <td>2.75rem (44px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.3125</td>
                  <td>1.3125</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>28px</td>
                  <td>28px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`h1 { @include t1;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <h2 class="t2">
              T2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </h2>
            <UXComment>
              <p>Rubrik nivå 2</p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>600</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1.5rem (24px)</td>
                  <td>1.875rem (30px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.3475 (35.035px)</td>
                  <td>1.3475 (40.425px)</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>28px</td>
                  <td>28px</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>14px</td>
                  <td>14px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`h2 { @include t2;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <h2 class="t24">
              T24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <UXComment>
              <p>Rubrik puffblock bred</p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>600</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1.25rem (20px)</td>
                  <td>1.875rem (30px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.3125</td>
                  <td>1.3125</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>14px</td>
                  <td>14px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`h2 { @include t24;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <p class="t3">
              T3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <UXComment>
              <p>Rubrik nivå 3 (i artikel)</p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>600</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1.25rem (20px)</td>
                  <td>1.5rem (24px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.375</td>
                  <td>1.375</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>24px</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>10px</td>
                  <td>10px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`h3 { @include t3;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <h4 class="t4">
              T4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </h4>
            <UXComment>
              <p>
                <ul>
                  <li>Rubrik nivå 4</li>
                  <li>Blockrubrik</li>
                  <li>Rubrik puffblock smal</li>
                  <li>Menyrubrik</li>
                  <li>Sitename</li>
                </ul>
              </p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>600</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1.25rem (20px)</td>
                  <td>1.25rem (20px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.375</td>
                  <td>1.375</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>16px</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>14px</td>
                  <td>14px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`h4 { @include t4;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <p class="t10">
              T10 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aliquam erat volutpat. Mauris metus. Tibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae.
            </p>

            <UXComment>
              <p>
                <ul>
                  <li>Ingress</li>
                  <li>Megameny</li>
                  <li>Blockquote</li>
                </ul>
              </p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>400</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1.125rem (18px)</td>
                  <td>1.375rem (22px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.4375 (25.875px)</td>
                  <td>1.4375 (31.625px)</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>30px</td>
                  <td>30px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`p { @include t10;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <p class="t11">
              T11 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aliquam erat volutpat. Mauris metus. Tibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Nullam
              feugiat, turpis at pulvinar vulputate, erat libero tristique
              tellus, nec bibendum odio risus sit amet ante. Integer vulputate
              sem.
            </p>
            <UXComment>
              <p>Brödtext puff</p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Open Sans</td>
                  <td>Open Sans</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>400</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1rem (16px)</td>
                  <td>1rem (16px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.5 (24px)</td>
                  <td>1.5 (24px)</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>14px</td>
                  <td>14px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`p { @include t11;}`}</Code>
          </Scene>
        </Stage>
      </Section>

      <Section>
        <Stage>
          <Scene>
            <p class="t12">
              T12 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aliquam erat volutpat. Mauris metus. Temporibus autem quibusdam et
              aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Nullam
              feugiat, turpis at pulvinar vulputate, erat libero tristique
              tellus, nec bibendum odio risus sit amet ante. Integer vulputate
              sem a nibh rutrum consequat. In rutrum. Maecenas libero.
            </p>
            <UXComment>
              <p>Brödtext artikel</p>
              <table>
                <thead>
                  <th>CSS</th>
                  <th>Mobile</th>
                  <th>Desktop (min 768px)</th>
                </thead>
                <tr>
                  <td>font</td>
                  <td>Georgia</td>
                  <td>Georgia</td>
                </tr>
                <tr>
                  <td>font-weight</td>
                  <td>400</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>font-size</td>
                  <td>1rem (16px)</td>
                  <td>1.125rem (16px)</td>
                </tr>
                <tr>
                  <td>line-height</td>
                  <td>1.5 (25px)</td>
                  <td>1.5625 (28.125px)</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>black</td>
                  <td>black</td>
                </tr>
                <tr>
                  <td>margin-top</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>margin-bottom</td>
                  <td>16px</td>
                  <td>16px</td>
                </tr>
              </table>
            </UXComment>
            <Code>{`p { @include t12;}`}</Code>
          </Scene>
        </Stage>
      </Section>
    </Page>
  );
}
