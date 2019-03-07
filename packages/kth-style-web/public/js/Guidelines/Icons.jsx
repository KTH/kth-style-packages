import Component from 'inferno-component'
import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import axios from 'axios'

class Colors extends Component {
  componentDidMount () {
    axios.get('/style/kth-style/api/icons')
      .then(res => {
        this.setState({icons: res.data.sort()})
      })
  }

  renderIcons (iconList) {

    
    return (
      <div className="iconContainer">
        { 
          iconList.map(iconName => {
            console.log(iconName)
            console.log(iconName.toUpperCase().includes('WHITE'))
            const useBlackBackground = iconName.toUpperCase().includes('WHITE') ? 'black' : ''
            return (
              <div class="icon">
                <div class={"iconBox " + useBlackBackground}>
                  <div class="icon" style={'background-image: url(../kth-style/img/kth-style/icons/' + iconName + ')'}></div>
                </div>  
                <div style="text-transform:capitalize">{iconName}</div>
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
        { this.state !== null && this.renderIcons(this.state.icons) }
      </Section>       
    )
  }  
}

export default Colors
