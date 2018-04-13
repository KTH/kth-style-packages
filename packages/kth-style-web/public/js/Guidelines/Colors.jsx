import Component from 'inferno-component'
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import axios from 'axios'

class Colors extends Component {
  componentDidMount () {
    console.log(JSON.stringify('Mount'))
    axios.get('/style/kth-style/api/colors')
      .then(res => {
        console.log(JSON.stringify(res.data))
        this.setState(res.data)
      })
  }

  renderColors (colorList) {
    return (colorList.map(color => {
      return (
        <tr>
          <td style="text-transform:capitalize">{color.name}</td>
          <td><div>{color.hex}</div></td>
          <td style="width: 50%"><div class="color" style={'background-color:' + color.hex}></div></td>
        </tr>
      )
      })
    ) 
  }

  render() {
    return (
      <Section>
        <Section>
        <h3>Bakgrundsfärger med vit text</h3>
        <p>Uppfyller kontrast minst nivå AA liten text förutom för: färgerna "Grön" och "Ljusblå" som uppfyller kontrast minst nivå AA stor text (18px eller 14px fet).</p>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Färgnamn</th>
              <th>Hex</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.state !== null && this.renderColors(this.state.backgroundsForWhite) }
          </tbody>
        </table>
      </Section>

      <Section>
        <h3>Bakgrundsfärg med “Ljusare svart” text</h3>
        <p>Uppfyller kontrast minst nivå AA liten text (ok med 14px normal)</p>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Färgnamn</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            { this.state !== null && this.renderColors(this.state.backgroundsForBlack) }                    
          </tbody>
        </table>
      </Section>

      <Section>
        <h3>Färgad text</h3>
        <p>Uppfyller minst nivå AA för liten text på vit bakgrund.</p>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Färgnamn</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            { this.state !== null && this.renderColors(this.state.coloredText) }                  
          </tbody>
        </table>
      </Section>  
    </Section>       
    )
  }
}

export default Colors
