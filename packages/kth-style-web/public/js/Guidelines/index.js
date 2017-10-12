import StartPage from './StartPage.jsx'
import UsabilityPage from './UsabilityPage.jsx'
import AccessabilityPage from './AccessabilityPage.jsx'
import InformationPage from './InformationPage.jsx'
import ButtonOrLinkPage from './ButtonOrLinkPage.jsx'
import MenuPage from './MenuPage.jsx'

const pages = [
  { path: "", title: "Guidelines", header: "h2", component: StartPage},
  { path: "/usability", title: "Användbarhet", component: UsabilityPage},
  { path: "/accessability", title: "Tillgänglighet", component: AccessabilityPage},
  { path: "/information", title: "Information", component: InformationPage},
  { path: "/buttonorlink", title: "Knappar och länkar", component: ButtonOrLinkPage},
  { path: "/menu", title: "Menyer", component: MenuPage}
]

export default pages
