// noinspection ES6UnusedImports
import createElement from 'inferno-create-element'
import { CortinaHeaderBlocks, KthHeader } from './KthHeader'

const errorStyle = `
#kth-pmenu #menu-bar-wrapper {
  z-index: 9999;
}

  body.error {
  background-color: #e3e5e3;
}

  body.error .content {
  box-shadow: 0 0 5px 5px #aeb4ae;
  background-color: #fff;
  transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  padding: 30px 40px 40px;
  max-width: 550px;
  margin: 30px auto;
}

  body.error .content h1 {
  font-size: 2.8rem;
  font-family: Georgia Regular,Georgia,garamond pro,garamond,times new roman,times,serif;
  font-weight: 400;
  border-bottom: none;
}

  body.error .content .kthLovesGeeks {
  color: #b9bbbd;
}
`

export interface ErrorPageProps {
  blocks: CortinaHeaderBlocks
  proxyPrefixPathUri: string
  status: number
  friendly: string
  message: string,
  description: string
}

export function ErrorPage ({ blocks, proxyPrefixPathUri, status, friendly, message, description }: ErrorPageProps) {
  return (
    <html>
    <head>
      <title>{friendly}</title>
      <meta charset='utf-8'/>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <meta name='description' content={description}/>
      <link rel='shortcut icon' id='favicon' href='//www.kth.se/img/icon/favicon.ico'/>

      <link rel='stylesheet' href={proxyPrefixPathUri + '/static/kth-style/css/kth-bootstrap.min.css'}/>

      <style dangerouslySetInnerHTML={{ __html: errorStyle }}/>

      <script src={proxyPrefixPathUri + '/static/vendor.bundle.min.js'}/>
      <script src='//www.kth.se/social/toolbar/widget.js'/>

    </head>
    <body class='error code{{status}} use-personal-menu'>
    <div class='content'>
      <KthHeader blocks={blocks}/>
      <h1>{status}</h1>
      <h3>{friendly}</h3>

      <div class='message'>
        <p class='kthLovesGeeks'>{ `HTTP ${status}: ${message}` }</p>
      </div>
    </div>
    </body>
    </html>
  )
}
