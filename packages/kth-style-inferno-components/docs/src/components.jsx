import Component from "inferno-component"
import classnames from 'classnames'
import { Link } from 'inferno-router'
import Prism from "prismjs"
require('prismjs/components/prism-jsx')
import { Animated } from 'inferno-animation'

export class Section extends Component {
  componentDidMount() {
    this.context.addSection(this.props.title, this.props.title.toLowerCase())
  }

  render({ title, children }) {
    return (
      <div class={classnames(this.props.className, "ExampleSection")} id={this.props.title.toLowerCase()}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    )
  }
}

export function Stage ({ children }) {
  return (
    <div class="ExampleStage">
      {children}
    </div>
  )
}

export function Scene ({ children }) {
  return (
    <div class="ExampleScene">
      {children}
    </div>
  )
}

export function Narrative ({ children }) {
  return (
    <div class="ExampleNarrative">
      {children}
    </div>
  )
}

export class Code extends Component {

  constructor(props) {
    super(props)

    this._highlight = this._highlight.bind(this)
  }

  componentDidMount() {
    this._highlight();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this._highlight();
    }
  }

  _highlight(domNode) {
    setTimeout(() => {
      Prism.highlightElement(this._domNode || domNode, this.props.async);
    }, 10)
  }

  render({ children }) {
    if (!this.context.viewState.code) {
      return null
    }

    const languageCls = 'language-' + (this.props.language || 'jsx')
    return (
      <Animated prefix="ContentAnimation" className="ExampleScene-Code" onDidEnter={this._highlight}>
        <pre>
          <code className={languageCls} ref={(domNode) => this._domNode = domNode}>
            {children}
          </code>
        </pre>
      </Animated>
    )  
  }
}


function smoothScrollVertTo(y, durMs) {
  const k = Math.log(y - window.scrollY) / durMs * 16
  newSmoothScrollVertTo(y, k)
}


function newSmoothScrollVertTo(y, k) {
  const delta = y - window.scrollY
  const step = k * delta
  requestAnimationFrame(() => {
    const scrollStep = delta < 2 * step ? delta : step
    window.scrollTo(0, window.scrollY + scrollStep)
    if (scrollStep >= 1 && window.scrollY + window.innerHeight !== document.body.scrollHeight) {
      newSmoothScrollVertTo(y, k)
    }
  })
}

function PageMenu(props) {

  return (
    <div className="PageMenuContainer">
      <ul className="PageMenu nav flex-column">
        <li class="nav-item">
          <h4 className="PageMenu-Header">Components</h4>  
        </li>
        {
          props.pageLinks.map((page) => {
            return (
              <li class="nav-item">
                <Link className="nav-link PageLink" to={page.link}>{page.title}</Link>
              </li> 
            )
          }).concat(
            props.pageSections.sort((a, b) => a.title == b.title ? 0 : (a.title < b.title ? -1 : 1)).map((item) => {
              return (
                <li class="nav-item">
                  <a className="nav-link SectionLink" href={'#' + item.anchor} onClick={(e) => { 
                    e.preventDefault()
                    const el = document.getElementById(e.target.hash.split('#')[1])
                    const y = el.offsetTop
                    // smoothScrollVertTo(y, 500)
                    smoothScrollVertTo(y, 500)
                  }}>{item.title}</a>
                </li>
              )  
            })
          )
        }
      </ul>  
    </div>  
  )
}

export class Page extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      active: false,
      pageSections: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        active: true
      })
    }, 10)
  }

  getChildContext() {
    return {
      addSection: this.addSection.bind(this)
    }
  }

  addSection(title, anchor) {
    // TODO: Figure out why this explodes
    this.state.pageSections.push({ title, anchor })
  }

  render() {
    const cls = {
      PageContent: true,
      'InfernoAnimation--noAnim': !this.state.active
    }

    /*
    const pageSections = this.props.children.map((node) => {
      node.props.children.reduce
    })
    */

    return (
      <div className={classnames(cls)}>
        <PageMenu pageSections={this.state.pageSections} pageLinks={this.context.pageLinks} />
        {this.props.children}
      </div>
    )
  }
}

export function UXComment ({ children }, context) {
  if (!context.viewState.ux_comments) {
    return null
  }

  return (
    <Animated prefix="ContentAnimation" className="UXComment">
      <div className="UXComment-Content">
        {children}
      </div>
    </Animated>
  )
}