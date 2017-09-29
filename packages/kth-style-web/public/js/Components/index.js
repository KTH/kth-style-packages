/* Components */
import AlertsPage from 'kth-style-inferno-bootstrap/docs/src/Components/AlertsPage.jsx'
import BadgePage from 'kth-style-inferno-bootstrap/docs/src/Components/BadgePage.jsx'
import BreadcrumbPage from 'kth-style-inferno-bootstrap/docs/src/Components/BreadcrumbPage.jsx'
import ButtonGroupPage from 'kth-style-inferno-bootstrap/docs/src/Components/ButtonGroupPage.jsx'
import ButtonsPage from 'kth-style-inferno-bootstrap/docs/src/Components/ButtonsPage.jsx'
import CardPage from 'kth-style-inferno-bootstrap/docs/src/Components/CardPage.jsx'
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

const pages = [
  { path: "/", title: "Component Reference", header: 'h2', component: GridPage},

  // Layout
  { path: "/layout", title: "Layout", header: "h3", component: OverviewPage},
  { path: "/layout/overview", title: "Overview", component: OverviewPage},
  { path: "/layout/grid", title: "Grid", component: GridPage},
  { path: "/layout/media_object", title: "Media Object", component: MediaObjectPage},
  { path: "/layout/utilities", title: "Utilities", component: UtilitiesPage},
  
  // Content
  { path: "/content", title: "Content", header: "h3", component: TypographyPage},
  { path: "/content/typography", title: "Typography", component: TypographyPage},

  // Components
  { path: "/components", title: "Components", header: "h3", component: AlertsPage},
  { path: "/components/alerts", title: "Alerts", component: AlertsPage},
  { path: "/components/badge", title: "Badge", component: BadgePage},
  { path: "/components/breadcrumb", title: "Breadcrumb", component: BreadcrumbPage},
  { path: "/components/button_group", title: "Button Group", component: ButtonGroupPage},
  { path: "/components/buttons", title: "Buttons", component: ButtonsPage},
  { path: "/components/card", title: "Card", component: CardPage},
  { path: "/components/collapse", title: "Collapse", component: CollapsePage},
  { path: "/components/dropdowns", title: "Dropdowns", component: DropdownsPage},
  { path: "/components/forms", title: "Forms", component: FormsPage},
  { path: "/components/input_group", title: "Input Group", component: InputGroupPage},
  { path: "/components/jumbotron", title: "Jumbotron", component: JumbotronPage},
  { path: "/components/list_group", title: "List Group", component: ListGroupPage},
  { path: "/components/modal", title: "Modal", component: ModalPage},
  { path: "/components/navbar", title: "Navbar", component: NavbarPage},
  { path: "/components/navs", title: "Navs", component: NavsPage},
  { path: "/components/pagination", title: "Pagination", component: PaginationPage},
  { path: "/components/popovers", title: "Popovers", component: PopoversPage},
  { path: "/components/progress", title: "Progress", component: ProgressPage},
  { path: "/components/tooltips", title: "Tooltips", component: TooltipsPage}
]

export default pages
