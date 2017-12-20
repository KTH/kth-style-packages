/* PageLayout */
import StartPage from './StartPage.jsx'
import TextPage from './TextPage.jsx'
import FormPage from './FormPage.jsx'


const pages = [
  { path: "", title: "Page Layout", header: "h2", component: StartPage},
  { path: "/textpage", title: "Textsida", component: TextPage},
  { path: "/formpage", title: "Formulär", component: FormPage},
]

export default pages
