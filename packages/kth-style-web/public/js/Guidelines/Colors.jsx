import Component from 'inferno-component'
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import axios from 'axios'

class Colors extends Component {
  componentDidMount () {
    axios.get('/style/kth-style/api/colors')
      .then(res => {
        this.setState(res.data)
      })
  }

  renderColors (colorList) {

    return (
      <div className="colorContainer">
        { 
          colorList.map(color => {
            return (
              <div class="color">
                <div class="colorBox" style={'background-color:' + color.hex}></div>
                <div>
                  <div style="text-transform:capitalize">{color.name}</div>
                  <div>{color.hex}</div>
                </div>
              </div>
            )
          })
         } 
      </div>
    )
  }

  render() {
    return (
      <Section>
        <Section>
        <h3>Bakgrundsfärger med vit text</h3>
        <p>Uppfyller kontrast minst nivå AA liten text förutom för: färgerna "Grön" och "Ljusblå" som uppfyller kontrast minst nivå AA stor text (18px eller 14px fet).</p>
        { this.state !== null && this.renderColors(this.state.backgroundsForWhite) }
      </Section>

      <Section>
        <h3>Bakgrundsfärg med “Ljusare svart” text</h3>
        <p>Uppfyller kontrast minst nivå AA liten text (ok med 14px normal)</p>
        { this.state !== null && this.renderColors(this.state.backgroundsForBlack) }                    
      </Section>

      <Section>
        <h3>Färgad text</h3>
        <p>Uppfyller minst nivå AA för liten text på vit bakgrund.</p>
        { this.state !== null && this.renderColors(this.state.coloredText) }                  
      </Section>  
    </Section>       
    )
  }  
}

export default Colors
