// noinspection ES6UnusedImports
import createElement from 'inferno-create-element'

export interface CortinaFooterBlocks {
  footer: string
}

export interface KthFooterProps {
  blocks: CortinaFooterBlocks
}
export function KthFooter ({ blocks }: KthFooterProps) {
  return (
    <div>
      <a id='backToTop' href='#top' />
      <div id='footer' class='expandToContainerWidth' dangerouslySetInnerHTML={{ __html: blocks.footer }} />
    </div>
  )
}
