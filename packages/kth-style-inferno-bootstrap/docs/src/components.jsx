import Component from "inferno-component"
import classnames from 'classnames'
import { Link } from 'inferno-router'
import Prism from "prismjs"
require('prismjs/components/prism-jsx')
import { Animated } from 'inferno-animation'

export class Section extends Component {
  componentDidMount() {
    this.context.addSection(this.props.title, this._createId(this.props.title))
  }

  _createId(title) {
    // We need to convert titles to reasonable id
    return title && title.toLowerCase().replace(/\s/g, '_').replace(/[^a-öA-Ö0-9\s]/g, '').replace(/[åä]/g, 'a').replace(/[ö]/g, 'o')

  }

  render({ title, children }) {
    return (
      <div class={classnames(this.props.className, "ExampleSection")} id={this._createId(this.props.title)}>
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

function MainMenu(props, context) {
  let currPath = context.router.url.split('/')
  const tmpLen = currPath.length > 3 ? currPath.length - 1 : currPath.length
  currPath = currPath.splice(0, tmpLen).join('/')

  return (
    <ul className="PageMenu nav flex-column">
      {
        props.pageLinks.map((page) => {
          if (page.header) {
            const header = page.header.toUpperCase()
            return (
              <li class="nav-item">
                <Link className={`PageMenu-Header-${header} nav-link PageLink`} to={page.link}>{page.title}</Link>
              </li> 
            )
          } else if (page.subHeader) {
            return (
              <li class="nav-item">
                <Link className="PageMenu-Header nav-link PageLink" to={page.link}>{page.title}</Link>
              </li> 
            )
          } else if (page.link.startsWith(currPath) && currPath[currPath.length - 1] !== '/') {
            // 
            return (
              <Animated el="li" class="nav-item" prefix="ContentAnimation">
                <Link className="nav-link PageLink" to={page.link}>{page.title}</Link>
              </Animated> 
            )
          } else {
            return null
          }
        })
      }
    </ul>  
  )
}

function PageMenu(props) {

  return (
    <ul className="PageMenu nav flex-column">
      <li class="nav-item">
        <h4 className="SectionMenu-Header">Page Sections</h4>
      </li>
      {
        props.pageSections.map((item) => {
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
      }
    </ul>  
  )
}

import Container from '../../lib/Container.jsx'
import Row from '../../lib/Row.jsx'
import Col from '../../lib/Col.jsx'

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
      <Container className={classnames(cls)}>
        <Row>
          <Col className="PageMenuContainer">
            <MainMenu pageLinks={this.context.pageLinks} />
          </Col>
          <Col className="PageBody">
            {this.props.children}
          </Col>
          <Col className="SectionMenuContainer">
            <PageMenu pageSections={this.state.pageSections} />
          </Col>
        </Row>
      </Container>
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