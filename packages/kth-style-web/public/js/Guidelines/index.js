import StartPage from './StartPage.jsx'
import UsabilityPage from './UsabilityPage.jsx'
import StructurePage from './StructurePage.jsx'
import AccessabilityPage from './AccessabilityPage.jsx'
import InformationPage from './InformationPage.jsx'
import ButtonOrLinkPage from './ButtonOrLinkPage.jsx'
import MenuPage from './MenuPage.jsx'
import FormPage from './FormPage.jsx'
import DialoguePage from './DialougePage.jsx'
import ReadMorePage from './ReadMorePage.jsx'

const pages = [
  { path: "", title: "Guidelines", header: "h2", component: StartPage},
  { path: "/usability", title: "Användbarhet", component: UsabilityPage},
   { path: "/structure", title: "Strukturera en sida", component: StructurePage},
  { path: "/accessability", title: "Tillgänglighet", component: AccessabilityPage},
  { path: "/information", title: "Information/ återkoppling", component: InformationPage},
  { path: "/buttonorlink", title: "Knappar och länkar", component: ButtonOrLinkPage},
  { path: "/menu", title: "Menyer", component: MenuPage},
  { path: "/form", title: "Formulär", component: FormPage},
  { path: "/dialouge", title: "Dialoger", component: DialougePage},
  { path: "/readmore", title: "Läs mer", component: ReadMorePage}
]

export default pages
