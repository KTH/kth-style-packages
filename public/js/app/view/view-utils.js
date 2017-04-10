
function createBackToTopLink () {
  const linkId = 'top'
  const link = document.createElement('a')
  link.id = 'back-to-top'
  link.text = 'Back to top of the page'
  link.href = '#' + linkId

  document.querySelector('html').id = linkId
  document.body.appendChild(link)
  return link
}

const backToTopLink = createBackToTopLink()

window.addEventListener('scroll', function (e) {
  const y = window.scrollY
  console.log(y, typeof y)
  if (y > 150) {
    backToTopLink.classList.add('show')
  } else {
    backToTopLink.classList.remove('show')
  }
})
