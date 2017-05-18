const Clipboard = require('clipboard')

class CopyExample {
  static washExampleHtml (html) {
    html = html.replace(/data-example=".*?"/g, '')
    html = html.replace(/style=".*?"/g, '')
    html = html.replace(/\s*?>/g, '>')

    return html
  }

  static copyExampleHtml (example) {
    var exampleCode = example.classList.contains("disabled-example-container") ? example.innerHTML : example.outerHTML;
    var exampleRows = CopyExample.washExampleHtml(exampleCode)
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

  static createCodeContainer (index) {
      const exampleCodeId = "exampleCode" + index
      // Create example code container
      const codeContainer = document.createElement('div')
      codeContainer.classList.add('example-code')

      const exampleCodeContainer = document.createElement('pre')
      exampleCodeContainer.classList.add('example-code-view')
      exampleCodeContainer.id = exampleCodeId

      const closeButton = document.createElement('button')
      closeButton.type = 'button'
      closeButton.classList.add('close')
      const closeButtonContent = document.createElement('span')
      closeButtonContent.innerHTML = '&times'
      closeButton.appendChild(closeButtonContent)

      const copyButton = document.createElement('button')
      copyButton.type = 'button'
      copyButton.textContent = 'Kopiera'
      copyButton.classList.add('default')
      copyButton.classList.add('copy-btn')

      const buttonBar = document.createElement('div')
      buttonBar.classList.add('btn-bar')

      buttonBar.appendChild(copyButton)
      buttonBar.appendChild(closeButton)

      codeContainer.appendChild(buttonBar)
      codeContainer.appendChild(exampleCodeContainer)
      
      closeButton.addEventListener('click', function (event) {
        codeContainer.classList.remove('show')
      })

      new Clipboard(copyButton, {
          target: function(trigger) {
            return exampleCodeContainer
          }
      });

      return {
        codeContainer: codeContainer,
        exampleCodeContainer: exampleCodeContainer,
        copyButton: copyButton
      }
  }

  static init () {
    const allExampleContainers = document.querySelectorAll('.examples-container')
    allExampleContainers.forEach(function (exampleContainer, index) {
      exampleContainer.firstElementChild.classList.add('examples-view')

      const cc = CopyExample.createCodeContainer(index)
      exampleContainer.appendChild(cc.codeContainer)

      // Loop through examples and add "Show code on click logic"
      const examples = exampleContainer.querySelectorAll('[data-example], .disabled-example-container')
      examples.forEach(function (example) {
        const exampleName = example.getAttribute('data-example') || exampleContainer.querySelector('[data-examples-view]').getAttribute('data-examples-view')

        example.addEventListener('click', function (event) {
          event.preventDefault()
          const exampleHtml = CopyExample.copyExampleHtml(example)

          cc.codeContainer.setAttribute('data-example-code', exampleName)
          cc.exampleCodeContainer.innerText = exampleHtml

          cc.codeContainer.classList.add('show')
        })
      })
    })
  }
}

module.exports = CopyExample

