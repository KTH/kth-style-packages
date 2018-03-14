// noinspection ES6UnusedImports
import createElement from 'inferno-create-element'
import { CortinaHeaderBlocks, KthHeader } from './KthHeader'
import { CortinaFooterBlocks, KthFooter } from './KthFooter'
import Component from 'inferno-component'

export interface StandardPageProps {
  blocks: CortinaHeaderBlocks & CortinaFooterBlocks
  title: string
  description: string
  proxyPrefixPathUri: string
  extraHeadContent?: any
  children: any
}

export class StandardPage extends Component<StandardPageProps, void> {
  render ({ blocks, proxyPrefixPathUri, extraHeadContent, title, children, description}: StandardPageProps) {
    return (
      <html>
      <head>
        <meta charset='utf-8'/>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta name='description' content={description}/>
        <link rel='shortcut icon' id='favicon' href='//www.kth.se/img/icon/favicon.ico'/>
        <title>{title}</title>

        <link rel='stylesheet' href={proxyPrefixPathUri + '/static/kth-style/css/kth-bootstrap.min.css'}/>

        <script src={proxyPrefixPathUri + '/static/vendor.bundle.min.js'}/>
       
        {extraHeadContent}
      </head>
      <body>
      <div class='container'>
        <KthHeader blocks={blocks}/>
        <div id='app'>{children}</div>
        <KthFooter blocks={blocks}/>
        <script src={proxyPrefixPathUri + '/static/app.bundle.min.js'}/>
      </div>
      </body>
      </html>
    )
  }
}
