import StartPage from './StartPage.jsx'
import UsabilityPage from './UsabilityPage.jsx'
import AccessabilityPage from './HeadingPage.jsx'
import StructurePage from './StructurePage.jsx'
import HeadingPage from './AccessabilityPage.jsx'
import InformationPage from './InformationPage.jsx'
import ButtonOrLinkPage from './ButtonOrLinkPage.jsx'
import MenuPage from './MenuPage.jsx'
import FormPage from './FormPage.jsx'
import DialogPage from './DialogPage.jsx'
import ReadMorePage from './ReadMorePage.jsx'
import TextExamplePage from './TextExamplePage.jsx'

const pages = [
  { path: "", title: "Guidelines", header: "h2", component: StartPage},
  { path: "/usability", title: "Användbarhet", component: UsabilityPage},
  { path: "/accessability", title: "Tillgänglighet", component: AccessabilityPage},
  { path: "/structure", title: "Strukturera en sida", component: StructurePage},
  { path: "/structure", title: "Rubriker, brödtext", component: HeadingPage},
  { path: "/information", title: "Information/ återkoppling", component: InformationPage},
  { path: "/buttonorlink", title: "Knappar och länkar", component: ButtonOrLinkPage},
  { path: "/menu", title: "Menyer", component: MenuPage},
  { path: "/form", title: "Formulär", component: FormPage},
  { path: "/dialouge", title: "Dialoger", component: DialogPage},
  { path: "/readmore", title: "Läs mer", component: ReadMorePage},
  { path: "/textexample", title: "Läs mer", component: TextExamplePage}
]

export default pages
