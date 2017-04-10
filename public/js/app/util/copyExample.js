require('clipboard')

class CopyExample {
  static washExampleHtml (html) {
    html = html.replace(/data-example=".*?"/g, '')
    html = html.replace(/style=".*?"/g, '')
    html = html.replace(/\s*?>/g, '>')

    return html
  }

  static copyExampleHtml (example) {
    var exampleRows = CopyExample.washExampleHtml(example.outerHTML)
        .split(/\n/)
        .filter(function (row) {
          return row.trim().length > 0
        })

    var prevOrgIndent = 9999 // tillräckligt stort tal
    var indent = 0
    var e = exampleRows.map(function (row, index) {
      var rowLength = row.length
      var newRow = row.replace(/^\s*/, '') // remove space in the beginning of string

      const orgIndent = rowLength - newRow.length
      if (index > 0) {
        if (orgIndent > prevOrgIndent) {
          indent += 2
        } else if (orgIndent < prevOrgIndent) {
          indent -= 2
        }
      }

      prevOrgIndent = orgIndent

      return ' '.repeat(indent) + newRow
    })
    return e.join('\n')
  }

  static init () {
    const showExampleContainer = document.querySelector('.show-example-container')
    const resultView = document.querySelector('#example-code-view')
    const closeButton = document.querySelector('#close-example-code-view')

    if (resultView) {
      // new Clipboard('#copy-example-code')
      closeButton.addEventListener('click', function (event) {
        CopyExample.removeShow(showExampleContainer)
      })
    }

    const allExampleContainers = document.querySelectorAll('.examples-container')
    allExampleContainers.forEach(function (exampleContainer) {
      exampleContainer.firstElementChild.classList.add('examples-view')

      // Create example code container
      const codeContainer = document.createElement('div')
      codeContainer.classList.add('example-code')

      const exampleCodeContainer = document.createElement('pre')
      exampleCodeContainer.classList.add('example-code-view')

      const closeButton = document.createElement('button')
      closeButton.type = 'button'
      closeButton.classList.add('close')
      const closeButtonContent = document.createElement('span')
      closeButton.innerHTML = '&times'
      closeButton.appendChild(closeButtonContent)

      codeContainer.appendChild(exampleCodeContainer)
      codeContainer.appendChild(closeButton)
      exampleContainer.appendChild(codeContainer)

      closeButton.addEventListener('click', function (event) {
        codeContainer.classList.remove('show')
      })

      // Loop through examples and add "Show code on click logic"
      const examples = exampleContainer.querySelectorAll('[data-example]')
      examples.forEach(function (example) {
        const exampleName = example.getAttribute('data-example')

        example.addEventListener('click', function (event) {
          event.preventDefault()
          const exampleHtml = CopyExample.copyExampleHtml(example)

          codeContainer.setAttribute('data-example-code', exampleName)
          exampleCodeContainer.innerText = exampleHtml

          codeContainer.classList.add('show')
        })
      })
    })
  }
}

module.exports = CopyExample

