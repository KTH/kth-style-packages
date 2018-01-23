// noinspection ES6UnusedImports
import createElement from 'inferno-create-element'

export interface PackageInfo {
  name: string
  version: string
  description: string
}

export interface BuildInfo {
  gitBranch: string
  gitCommit: string
  jenkinsBuild: string
  jenkinsBuildDate: string
  dockerName: string
  dockerVersion: string
}

export interface AboutPageProps {
  packageInfo: PackageInfo
  buildInfo: BuildInfo
  proxyPrefixUri: string
}

export function AboutPage ({ packageInfo, buildInfo, proxyPrefixUri }: AboutPageProps) {
  return (
    <html>
    <head>
      <meta name='robots' content='noindex'/>
      <meta charset='utf-8'/>
      <link rel='shortcut icon' id='favicon' href='//www.kth.se/img/icon/favicon.ico'/>
      <title>System page</title>
    </head>
    <body>
    <h1>About {packageInfo.name}</h1>
    <hr/>
    <table class='about'>
      <tr>
        <td><b>Application version:</b></td>
        <td>{packageInfo.version}</td>
      </tr>
      <tr class='odd'>
        <td><b>Application description:</b></td>
        <td>{packageInfo.description}</td>
      </tr>
      <tr>
        <td><b>Jenkins build id:</b></td>
        <td>{buildInfo.jenkinsBuild}</td>
      </tr>
      <tr class='odd'>
        <td><b>Git branch:</b></td>
        <td>{buildInfo.gitBranch}</td>
      </tr>
      <tr>
        <td><b>Git commit hash:</b></td>
        <td>{buildInfo.gitCommit}</td>
      </tr>
      <tr class='odd'>
        <td><b>Build date:</b></td>
        <td>{buildInfo.jenkinsBuildDate}</td>
      </tr>
    </table>
    <hr/>
    <table>
      <tr>
        <td><b>Docker Name:</b></td>
        <td>{buildInfo.dockerName}</td>
      </tr>
      <tr class='odd'>
        <td><b>Docker Version:</b></td>
        <td>{buildInfo.dockerVersion}</td>
      </tr>
    </table>

    <dl>
      <dt>System:</dt>
      <dd>
        <a href={ proxyPrefixUri + '/_monitor' }>Monitor</a> | <a href='/robots.txt'>robots.txt</a>
      </dd>
    </dl>
    </body>
    </html>
  )
}
