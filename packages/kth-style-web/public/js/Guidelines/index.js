import StartPage from './StartPage.jsx'
import InformationPage from './InformationPage.jsx'
import ButtonOrLinkPage from './ButtonOrLinkPage.jsx'

const pages = [
  { path: "/", title: "Guidelines", header: "h2", component: StartPage},
  { path: "/information", title: "Information", component: InformationPage},
  { path: "/buttonorlink", title: "Button or link", component: ButtonOrLinkPage}
]

export default pages
