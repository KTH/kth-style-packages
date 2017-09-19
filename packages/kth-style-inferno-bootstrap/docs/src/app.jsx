import Inferno from 'inferno'
import Component from 'inferno-component'
require('inferno-devtools')
import { Router, Route, Redirect, IndexRoute, Link } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

/* Components */
import AlertsPage from './Components/AlertsPage.jsx'
import BadgePage from './Components/BadgePage.jsx'
import BreadcrumbPage from './Components/BreadcrumbPage.jsx'
import ButtonGroupPage from './Components/ButtonGroupPage.jsx'
import ButtonsPage from './Components/ButtonsPage.jsx'
import CollapsePage from './Components/CollapsePage.jsx'
import DropdownsPage from './Components/DropdownsPage.jsx'
import FormsPage from './Components/FormsPage.jsx'
import InputGroupPage from './Components/InputGroupPage.jsx'
import JumbotronPage from './Components/JumbotronPage.jsx'
import ListGroupPage from './Components/ListGroupPage.jsx'
import ModalPage from './Components/ModalPage.jsx'
import NavbarPage from './Components/NavbarPage.jsx'
import NavsPage from './Components/NavsPage.jsx'
import PaginationPage from './Components/PaginationPage.jsx'
import PopoversPage from './Components/PopoversPage.jsx'
import ProgressPage from './Components/ProgressPage.jsx'
import TooltipsPage from './Components/TooltipsPage.jsx'

/* Layout */
import GridPage from './Layout/GridPage.jsx'
import MediaObjectPage from './Layout/MediaObjectPage.jsx'
import OverviewPage from './Layout/OverviewPage.jsx'
import UtilitiesPage from './Layout/UtilitiesPage.jsx'

/* Typography */
import TypographyPage from './Typography/TypographyPage.jsx'

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
        { link: "/style/layout", title: "Components", subHeader: true},
        { link: "/style/layout/overview", title: "Overview"},
        { link: "/style/layout/grid", title: "Grid"},
        { link: "/style/layout/media_object", title: "Media Object"},
        { link: "/style/layout/utilities", title: "Utilities"},
        
        { link: "/style/content", title: "Content", subHeader: true},
        { link: "/style/content/typography", title: "Typography"},
        
        { link: "/style/components", title: "Components", subHeader: true},
        { link: "/style/components/alerts", title: "Alerts"},
        { link: "/style/components/badge", title: "Badge"},
        { link: "/style/components/breadcrumb", title: "Breadcrumb"},
        { link: "/style/components/button_group", title: "Button Group"},
        { link: "/style/components/buttons", title: "Buttons"},
        { link: "/style/components/collapse", title: "Collapse"},
        { link: "/style/components/dropdowns", title: "Dropdowns"},
        { link: "/style/components/forms", title: "Forms"},
        { link: "/style/components/input_group", title: "Input Group"},
        { link: "/style/components/jumbotron", title: "Jumbotron"},
        { link: "/style/components/list_group", title: "List Group"},
        { link: "/style/components/modal", title: "Modal"},
        { link: "/style/components/navbar", title: "Navbar"},
        { link: "/style/components/navs", title: "Navs"},
        { link: "/style/components/pagination", title: "Pagination"},
        { link: "/style/components/popovers", title: "Popovers"},
        { link: "/style/components/progress", title: "Progress"},
        { link: "/style/components/tooltips", title: "Tooltips"}        
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

import { Page } from './components.jsx'
function StartPage (props) {
  return (
    <Page> TODO... </Page>
  )
}

if (typeof window !== 'undefined') {
  const browserHistory = createBrowserHistory()

  const appRoutes = (
    <Router history={ browserHistory }>
      <Route path="/style" component={ AppLayout }>
        <IndexRoute component={ StartPage } />
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
      <Redirect from="/*" to="/style" />
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}
