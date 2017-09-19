import Inferno from 'inferno'
import Component from 'inferno-component'
// require('inferno-devtools')
import { Router, Route, Redirect, IndexRoute, Link } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import BasicPage from 'kth-style-inferno-bootstrap/docs/src/BasicPage.jsx'
import FormPage from 'kth-style-inferno-bootstrap/docs/src/FormPage.jsx'
import ModalPage from 'kth-style-inferno-bootstrap/docs/src/ModalPage.jsx'
import NavigationPage from 'kth-style-inferno-bootstrap/docs/src/NavigationPage.jsx'

import { Page } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

import Nav from 'inferno-bootstrap/lib/Navigation/Nav'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink'
import Form from 'inferno-bootstrap/lib/Form/Form'
import FormGroup from 'inferno-bootstrap/lib/Form/FormGroup'
import Label from 'inferno-bootstrap/lib/Form/Label'
import Input from 'inferno-bootstrap/lib/Form/Input'

class AppLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: true,
      ux_comments: true
    }

    this.didUpdate = this.didUpdate.bind(this)
  }
  
  getChildContext() {
    return {
      pageLinks: [
        {link: "/style/components/basic", title: "Basic"},
        {link: "/style/components/form", title: "Form"},
        {link: "/style/components/modal", title: "Modal"},
        {link: "/style/components/navigation", title: "Navigation"}
      ],
      viewState: this.state
    }
  }

  didUpdate (e) {
    e.preventDefault()
    let newState = this.state
    newState[e.target.name] = !e.target.checked
    this.setState(newState)
  }

  render () {
    return (
        <div className="Content">
          <Nav justified className="MainMenu">
            <NavItem>
              <img className="MainMenu-Logo" src="/static/img/KTH_logo.png" />
              <div className="MainMenu-BrandName">
                KTH Style
              </div>
            </NavItem>
            <NavItem>
              <NavLink href="#">Bakgrund</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Användning</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/style/components">Komponenter</NavLink>
            </NavItem>
            <NavItem>
              <Form className="form-inline MainMenu-Form">
                <FormGroup check className="form-check-inline">
                  <Label check>
                    <Input type="checkbox" name="code" checked={this.state.code} onChange={this.didUpdate} />
                    {' '}Code
                  </Label>
                </FormGroup>

                <FormGroup check className="form-check-inline">
                  <Label check>
                    <Input type="checkbox" name="ux_comments" checked={this.state.ux_comments} onChange={this.didUpdate} />
                    {' '}UX Comments
                  </Label>
                </FormGroup>
              </Form>
            </NavItem>
          </Nav>
          {this.props.children}
        </div>
    )
  }
}

function StartPage (props) {
  return (<Page>Blank!</Page>)
}

function ComponentsPage (props) {
  return (<Page>Blank!</Page>)
}

if (typeof window !== 'undefined') {
  const browserHistory = createBrowserHistory.default ? createBrowserHistory.default() : createBrowserHistory()

  const appRoutes = (
    <Router history={ browserHistory }>
      <Route path="/style" component={ AppLayout }>
        <IndexRoute component={ StartPage } />
        <Route path="/components">
          <IndexRoute component={ ComponentsPage } />
        </Route>
        <Route path="/components">
          <IndexRoute component={ ComponentsPage } />
          <Route path="/basic" component={BasicPage} />
          <Route path="/form" component={FormPage} />
          <Route path="/modal" component={ModalPage} />
          <Route path="/navigation" component={NavigationPage} />
        </Route>
      </Route>
      <Redirect from="/*" to="/style" />
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}