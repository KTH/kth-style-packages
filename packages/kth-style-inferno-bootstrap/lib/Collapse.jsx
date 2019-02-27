import Component from 'inferno-component'
import classNames from 'classnames'
import { mapToCssModules, omit } from 'inferno-bootstrap/lib/utils'
import { animateOnAdd, animateOnRemove } from 'inferno-animation'
import createElement from 'inferno-create-element'

// .collapse hides the content
// .collapse.show shows the content
// .collapsing

const enterCls = {
  start: '',
  active: 'collapsing',
  end: 'collapse show'
}

const leaveCls = {
  start: 'collapse show',
  active: 'collapsing',
  end: 'collapse'
}

const defaultProps = {
  isOpen: false,
  tag: 'div',
  onOpened: () => {},
  onClosed: () => {}
}

const excludeProps = {'el': true, 'tag': true, 'prefix': true, children: true}

class Animated extends Component {

  componentDidMount () {
    animateOnAdd(this, enterCls, this.props.onDidEnter)
  }

  componentWillUnmount () {
    animateOnRemove(this, leaveCls, this.props.onDidLeave)
  }

  render () {
    const props = {}
    const keys = Object.keys(this.props)
    for (let i = 0; i < keys.length; i++) {
      let tmpKey = keys[i]
      if (!excludeProps[tmpKey]) {
        props[tmpKey] = this.props[tmpKey]
      }
    }

    return createElement(
      this.props.el || this.props.tag || 'div', 
      props, 
      this.props.children
    )
  }
}

class Collapse extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false
    }
  }

  componentDidMount() {
    this.setState({
      active: true
    })
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed', 'animationPrefix']);
  
    const classes = mapToCssModules(classNames(
      className, !this.state.active && 'InfernoAnimation-noAnim',
    ), cssModule)

    const prefix = this.props.animationPrefix || "CollapseAnimation"
  
    // If hidden
    if (!this.props.isOpen) return null
    
    return (
      <Animated el={Tag} prefix={prefix}
        {...attributes}
        className={classes}  
        onDidEnter={this.props.onOpened}
        onDidLeave={this.props.onClosed} />
    );
  }
}

Collapse.defaultProps = defaultProps

class CollapsibleHeaderBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      firstLoad: true
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.state.firstLoad = false;
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render () {
    const classes = classNames(
      'card',
      'collapsible',
      {'white': this.props.color === 'white'},
      {'blue': (this.props.color === 'blue' || this.props.color !== 'white')},
    )

    return (
      <div class={classes}>
        <div class="card-header" role="tab" >
            <h4 class="mb-0 mt-0">
              <a onClick={this.doToggle} aria-expanded={this.state.isOpen} load={this.state.firstLoad} >{this.props.buttonText}</a>
            </h4>
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <div class="card-body">
            { this.props.children }
          </div>        
        </Collapse>
      </div>
    )
  }
}

export default CollapsibleHeaderBar