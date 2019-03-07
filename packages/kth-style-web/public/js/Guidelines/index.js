import StartPage from './StartPage.jsx'
import UsabilityPage from './UsabilityPage.jsx'
import HeadingPage from './HeadingPage.jsx'
import StructurePage from './StructurePage.jsx'
import AccessabilityPage from './AccessabilityPage.jsx'
import TestHelperPage from './TestHelperPage.jsx'
import InformationPage from './InformationPage.jsx'
import ButtonOrLinkPage from './ButtonOrLinkPage.jsx'
import MenuPage from './MenuPage.jsx'
import FormPage from './FormPage.jsx'
import DialogPage from './DialogPage.jsx'
import ReadMorePage from './ReadMorePage.jsx'
import ColorPage from './ColorPage.jsx'
import IconPage from './IconPage.jsx'

const pages = [
  { path: "", title: "Guidelines", header: "h2", component: StartPage},
  { path: "/usability", title: "Användbarhet", component: UsabilityPage},
  { path: "/accessability", title: "Tillgänglighet", component: AccessabilityPage},
  { path: "/colors", title: "Färger", component: ColorPage},
  { path: "/icons", title: "Ikoner", component: IconPage},
  { path: "/testhelper", title: "Test", component: TestHelperPage},
  { path: "/structure", title: "Struktur, layout", component: StructurePage},
  { path: "/heading", title: "Rubriker, brödtext", component: HeadingPage},
  { path: "/information", title: "Information/ återkoppling", component: InformationPage},
  { path: "/buttonorlink", title: "Knappar, länkar", component: ButtonOrLinkPage},
  { path: "/menu", title: "Menyer", component: MenuPage},
  { path: "/form", title: "Formulär", component: FormPage},
  { path: "/dialouge", title: "Dialoger", component: DialogPage},
  { path: "/readmore", title: "Läs mer", component: ReadMorePage}
]

export default pages
