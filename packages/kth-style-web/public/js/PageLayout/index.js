/* PageLayout */
import StartPage from './StartPage.jsx'
import TextPage from './TextPage.jsx'
import FormExamplePage from './FormExamplePage.jsx'


const pages = [
  { path: "", title: "Page Layout", header: "h2", component: StartPage},
  { path: "/textpage", title: "Textsida", component: TextPage},
  { path: "/formexamplepage", title: "Formulär", component: FormExamplePage},
]

export default pages
