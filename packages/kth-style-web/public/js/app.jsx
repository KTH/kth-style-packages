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

/* Components */
import AlertsPage from 'kth-style-inferno-bootstrap/docs/src/Components/AlertsPage.jsx'
import BadgePage from 'kth-style-inferno-bootstrap/docs/src/Components/BadgePage.jsx'
import BreadcrumbPage from 'kth-style-inferno-bootstrap/docs/src/Components/BreadcrumbPage.jsx'
import ButtonGroupPage from 'kth-style-inferno-bootstrap/docs/src/Components/ButtonGroupPage.jsx'
import ButtonsPage from 'kth-style-inferno-bootstrap/docs/src/Components/ButtonsPage.jsx'
import CollapsePage from 'kth-style-inferno-bootstrap/docs/src/Components/CollapsePage.jsx'
import DropdownsPage from 'kth-style-inferno-bootstrap/docs/src/Components/DropdownsPage.jsx'
import FormsPage from 'kth-style-inferno-bootstrap/docs/src/Components/FormsPage.jsx'
import InputGroupPage from 'kth-style-inferno-bootstrap/docs/src/Components/InputGroupPage.jsx'
import JumbotronPage from 'kth-style-inferno-bootstrap/docs/src/Components/JumbotronPage.jsx'
import ListGroupPage from 'kth-style-inferno-bootstrap/docs/src/Components/ListGroupPage.jsx'
import ModalPage from 'kth-style-inferno-bootstrap/docs/src/Components/ModalPage.jsx'
import NavbarPage from 'kth-style-inferno-bootstrap/docs/src/Components/NavbarPage.jsx'
import NavsPage from 'kth-style-inferno-bootstrap/docs/src/Components/NavsPage.jsx'
import PaginationPage from 'kth-style-inferno-bootstrap/docs/src/Components/PaginationPage.jsx'
import PopoversPage from 'kth-style-inferno-bootstrap/docs/src/Components/PopoversPage.jsx'
import ProgressPage from 'kth-style-inferno-bootstrap/docs/src/Components/ProgressPage.jsx'
import TooltipsPage from 'kth-style-inferno-bootstrap/docs/src/Components/TooltipsPage.jsx'

/* Layout */
import GridPage from 'kth-style-inferno-bootstrap/docs/src/Layout/GridPage.jsx'
import MediaObjectPage from 'kth-style-inferno-bootstrap/docs/src/Layout/MediaObjectPage.jsx'
import OverviewPage from 'kth-style-inferno-bootstrap/docs/src/Layout/OverviewPage.jsx'
import UtilitiesPage from 'kth-style-inferno-bootstrap/docs/src/Layout/UtilitiesPage.jsx'

/* Typography */
import TypographyPage from 'kth-style-inferno-bootstrap/docs/src/Typography/TypographyPage.jsx'


/* Guidlines */
import GuidelinesStartPage from './Guidelines/StartPage.jsx'

/* PageLayout */
import PageLayoutStartPage from './PageLayout/StartPage.jsx'

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
        { link: "/style/api/layout", title: "Components", subHeader: true},
        { link: "/style/api/layout/overview", title: "Overview"},
        { link: "/style/api/layout/grid", title: "Grid"},
        { link: "/style/api/layout/media_object", title: "Media Object"},
        { link: "/style/api/layout/utilities", title: "Utilities"},
        
        { link: "/style/api/content", title: "Content", subHeader: true},
        { link: "/style/api/content/typography", title: "Typography"},
        
        { link: "/style/api/components", title: "Components", subHeader: true},
        { link: "/style/api/components/alerts", title: "Alerts"},
        { link: "/style/api/components/badge", title: "Badge"},
        { link: "/style/api/components/breadcrumb", title: "Breadcrumb"},
        { link: "/style/api/components/button_group", title: "Button Group"},
        { link: "/style/api/components/buttons", title: "Buttons"},
        { link: "/style/api/components/collapse", title: "Collapse"},
        { link: "/style/api/components/dropdowns", title: "Dropdowns"},
        { link: "/style/api/components/forms", title: "Forms"},
        { link: "/style/api/components/input_group", title: "Input Group"},
        { link: "/style/api/components/jumbotron", title: "Jumbotron"},
        { link: "/style/api/components/list_group", title: "List Group"},
        { link: "/style/api/components/modal", title: "Modal"},
        { link: "/style/api/components/navbar", title: "Navbar"},
        { link: "/style/api/components/navs", title: "Navs"},
        { link: "/style/api/components/pagination", title: "Pagination"},
        { link: "/style/api/components/popovers", title: "Popovers"},
        { link: "/style/api/components/progress", title: "Progress"},
        { link: "/style/api/components/tooltips", title: "Tooltips"},

        
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
              <Link className="nav-link" to="/style">
                <img className="MainMenu-Logo" src="/static/img/KTH_logo.png" />
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
              <Link className="nav-link" to="/style/api/components">Komponenter</Link>
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
          <IndexRoute component={ GuidelinesStartPage } />
        </Route>
        
        <Route path="/page-layout">
          <IndexRoute component={ PageLayoutStartPage } />
        </Route>

        <Route path="/api">
          <Route path="/components">
            <IndexRoute component={ AlertsPage } />
            <Route path="/alerts" component={ AlertsPage } />
            <Route path="/badge" component={ BadgePage } />
            <Route path="/breadcrumb" component={ BreadcrumbPage } />
            <Route path="/button_group" component={ ButtonGroupPage } />
            <Route path="/buttons" component={ ButtonsPage } />
            <Route path="/collapse" component={ CollapsePage } />
            <Route path="/dropdowns" component={ DropdownsPage } />
            <Route path="/forms" component={ FormsPage } />
            <Route path="/input_group" component={ InputGroupPage } /> 
            <Route path="/jumbotron" component={ JumbotronPage } />
            <Route path="/list_group" component={ ListGroupPage } />
            <Route path="/modal" component={ ModalPage } />
            <Route path="/navbar" component={ NavbarPage } />
            <Route path="/navs" component={ NavsPage } />
            <Route path="/pagination" component={ PaginationPage } /> 
            <Route path="/popovers" component={ PopoversPage } />
            <Route path="/progress" component={ ProgressPage } />
            <Route path="/tooltips" component={ TooltipsPage } />
          </Route>
          <Route path="/layout">
            <IndexRoute component={ OverviewPage } />
            <Route path="/overview" component={ OverviewPage } />
            <Route path="/grid" component={ GridPage } />
            <Route path="/media_object" component={ MediaObjectPage } />
            <Route path="/utilities" component={ UtilitiesPage } />        
          </Route>
          <Route path="/content">
            <IndexRoute component={ TypographyPage } />
            <Route path="/typography" component={ TypographyPage } />
          </Route>
        </Route>
      </Route>
      <Redirect from="/*" to="/style" />
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}
