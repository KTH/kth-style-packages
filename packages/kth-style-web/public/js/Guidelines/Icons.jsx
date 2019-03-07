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
            const useBlackBackground = iconName.toUpperCase().includes('WHITE') ? 'dark' : ''
            return (
              <div class="iconBox card">
                <div class={"icon card-body " + useBlackBackground}>
                  <div class="svg" style={'background-image: url(../kth-style/img/kth-style/icons/' + iconName + ')'}></div>
                </div>  
                <div class="icon-name card-footer" style="text-transform:capitalize">{iconName}</div>
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
