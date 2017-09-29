import Inferno from 'inferno'
import Component from 'inferno-component'
// require('inferno-devtools')
import { Router, Route, Redirect, IndexRoute, Link } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { Page } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink'
import Form from 'inferno-bootstrap/lib/Form/Form'
import FormGroup from 'inferno-bootstrap/lib/Form/FormGroup'
import Label from 'inferno-bootstrap/lib/Form/Label'
import Input from 'inferno-bootstrap/lib/Form/Input'

/* KTH Style Web Pages and layouts */
import StartPage from './StartPage.jsx'

import componentPages from './Components'
import guidelinesPages from './Guidelines'
import pageLayoutPages from './PageLayout'

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
    let outp = {
      viewState: this.state
    }

    if (this.context.router.url.startsWith('/style/guidelines')) {
      outp['pageLinks'] = guidelinesPages.map((item) => {
        return {
          link: `/style/guidelines${item.path}`,
          title: item.title,
          header: item.header
        }
      })
    } else if (this.context.router.url.startsWith('/style/page-layout')) {
      outp['pageLinks'] = pageLayoutPages.map((item) => {
        return {
          link: `/style/page-layout${item.path}`,
          title: item.title,
          header: item.header
        }
      })
    } else {
      outp['pageLinks'] = componentPages.map((item) => {
        return {
          link: `/style/api${item.path}`,
          title: item.title,
          header: item.header
        }
      })
    }

    return outp
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
              <Link className="nav-link" to="/style">
                <img className="MainMenu-Logo" src="/style/static/img/KTH_logo.png" />
                <div className="MainMenu-BrandName">
                KTH Style
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/style/guidelines">Riktlinjer</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/style/page-layout">Sidlayout</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/style/api">Komponenter</Link>
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

if (typeof window !== 'undefined') {
  const browserHistory = createBrowserHistory()

  const appRoutes = (
    <Router history={ browserHistory }>
      <Route path="/style" component={ AppLayout }>
        <IndexRoute component={ StartPage } />
        
        <Route path="/guidelines">
          { guidelinesPages.map((item) => {
            if (item.path === '/') {
              return <IndexRoute component={item.component} />
            } else {
              return <Route path={item.path} component={item.component} />
            }
          })}
        </Route>
        
        <Route path="/page-layout">
          { pageLayoutPages.map((item) => {
            if (item.path === '/') {
              return <IndexRoute component={item.component} />
            } else {
              return <Route path={item.path} component={item.component} />
            }
          })}
        </Route>

        <Route path="/api">
          { componentPages.map((item) => {
            if (item.path === '/') {
              return <IndexRoute component={item.component} />
            } else {
              return <Route path={item.path} component={item.component} />
            }
          })}
        </Route>
      </Route>
      <Redirect from="/*" to="/style" />
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}

/*
TODO: Generera kod-exempel i byggsteget så att vi kan välja mellan HTML-exempel och Inferno-exempel
TODO: Slimma ner kodexempel
TODO: Se till att vi börjar använda kth-style
*/