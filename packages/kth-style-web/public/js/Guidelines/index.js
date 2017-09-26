import StartPage from './StartPage.jsx'
import InformationPage from './InformationPage.jsx'

const pages = [
  { path: "/", title: "Guidelines", header: "h2", component: StartPage},
  { path: "/information", title: "Information", component: InformationPage}
]

export default pages
