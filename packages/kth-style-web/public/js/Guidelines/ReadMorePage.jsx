import { Page, Section, Narrative } from 'kth-style-inferno-bootstrap/docs/src/components.jsx'

export default function DropdownsPage (props) {
  return (
    <Page>
     <h1>Läs mer</h1>
     <Section title="Riktlinjer användbarhet">
       <p>
         <a href="/style/guidelines/usability">Riktlinjer användbarhet</a>
       </p>
     </Section>
     <Section title="Riktlinjer tillgänglighet">
       <p>
         <a href="https://www.w3.org/Translations/WCAG20-sv/">Web Content Accessibility Guidelines (WCAG) 2.0</a>
       </p>
     </Section>
     <Section title="Mer om tillgänglighet">
        <h3>Vägledning för webbutveckling</h3>
        <p>
          <a href="https://webbriktlinjer.se/riktlinjer/">Vägledning för webbutveckling (PTS)</a>
        </p>
        <h3>Tillgänglig kod</h3>
        <p>
          <a href="http://www.w3.org/WAI/gettingstarted/tips/developing.html"> Tips on Developing for Web Accessibility</a>
        </p>
        <p>
          <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">HTML5 Semantic Elements</a>
        </p>
        <h3>Färger och kontrast</h3>
        <p>
          <a href="https://www.w3schools.com/colors/colors_picker.asp">HTML Color Picker (gör färgen mörkare eller ljusare för att öka kontrasten)</a>
        </p>
        <p>  
           <a href="http://www.dasplankton.de/ContrastA/">Contrast-A (kontrollera kontrasten)</a>
        </p>
        <h3>Färgblindhet</h3>
        <p>  
          <a href="https://sv.wikipedia.org/wiki/Defekt_f%C3%A4rgseende">Defekt färgseende</a>
        </p>
        <p>  
          <a href="https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa">Colorblinding</a> (installera en plugin för färgblindhet i Chrome webläsare)
        </p>
     </Section>
     <Section title="KTH övriga riktlinjer">
       <h3>Grafisk profil</h3>
       <p>
        <a href="https://intra.kth.se/administration/kommunikation/grafiskprofil">Grafisk profil</a>
       </p> 
       <h3>Struktur kth.se</h3>
       <p>
        <a href="https://intra.kth.se/administration/kommunikation/webbpublicering/form">Spaltbredder och bildstorlekar</a>
       </p> 
     </Section>
     <Section title="Andra guidelines">
       <p>
        <a href="http://govuk-elements.herokuapp.com/">GOV.UK elements</a>
       </p>
       <p>
        <a href="https://www.usability.gov/sites/default/files/documents/guidelines_book.pdf">Research-Based Web Design & Usability Guidelines</a>
       </p>
       <p>
        <a href="https://material.io/guidelines/#introduction-principles">Material design</a>
       </p> 
     </Section>
     <Section title="Specifika områden">
       <h3>Formulär</h3>
       <p>
        <a href="https://www.nngroup.com/articles/web-form-design/">Website Forms Usability: Top 10 Recommendations</a>
       </p> 
       <h3>Meny design</h3>
       <p>
        <a href="https://www.nngroup.com/articles/menu-design/">Menu Design: Checklist of 15 UX Guidelines to Help Users</a>
       </p>
        <p>
        <a href="https://www.nngroup.com/articles/right-justified-navigation-menus/">Right-Justified Navigation Menus Impede Scannability</a>
       </p>
       <h3>Tabbar</h3>
       <p>
          <a href="https://www.nngroup.com/articles/tabs-used-right/">Tabs, Used Right</a>
       </p>
       <p>
          <a href="https://uxplanet.org/tabs-for-mobile-ux-design-d4cc4d9410d1">Tabs for Mobile UX Design</a>
       </p>
       <p>
          <a href="https://www.smashingmagazine.com/2009/06/module-tabs-in-web-design-best-practices-and-solutions/">Module Tabs in Web Design: Best Practices and Solutions</a>
       </p>
       <h3>Struktur, läsbarhet, Typsnitt, ...</h3>
       <p>
          <a href="https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/">CSS Baseline: The Good, The Bad And The Ugly</a>
       </p> 
       <p>
        <a href="https://conversionista.se/typografi-for-konvertering/">7 Tips för Bättre Typografi och Högre Konvertering</a>
       </p>
       <p>
        <a href="http://www.eutveckling.se/riktlinjer/webb/3/2/3/#topofpage">Ge webbplatsen en god läsbarhet (eutveckling.se)</a>
       </p>
       <p>
        <a href="https://webbriktlinjer.se/r/39-ge-webbplatsen-en-god-lasbarhet/">Ge webbplatsen en god läsbarhet (PTS)</a>
       </p>
       <p>
        <a href="https://pearsonified.com/2012/01/characters-per-line.php">How to Tune Typography Based on Characters Per Line</a>
       </p> 
      <h3>Flat design</h3>
       <p>
        <a href="https://www.nngroup.com/articles/flat-design/">Flat Design: Its Origins, Its Problems, and Why Flat 2.0 Is Better for Users</a>
       </p>
       <p>
        <a href="https://www.nngroup.com/articles/clickable-elements/">Beyond Blue Links: Making Clickable Elements Recognizable</a>
       </p> 
     </Section>
    </Page>
  )
}
