
window.addEventListener('load', function () {
  var mainMenu = document.getElementById('mainMenu') // Get main menu
  var megaMenu = document.getElementById('megaMenu') // Get mega menu
  var secondaryMenu = document.querySelector('.secondaryMenu') // Get secondary menu
  // var mobileMenuWrapper = document.getElementById('mobileMenuWrapper') // Get mobile menu wrapper

  var secondaryMenuContainer = document.createElement('ul')
  secondaryMenuContainer.className = 'secondaryMenuContainer'

  if (!mainMenu && !megaMenu && !secondaryMenu) {
    document.getElementById('mobileMenuWrapper').style.display = 'none' // Hide mobile menu wrapper/container if there is no menus
  }

  if (mainMenu) {
    var mainMenuItems = mainMenu.getElementsByTagName('li') // Get all links from main menu
    createMobileMenuItems(mainMenuItems)
  } else {
    if (megaMenu) {
      var megaMenuItems = megaMenu.getElementsByTagName('li') // Get all links from megaMenu
      createMobileMenuItems(megaMenuItems)
    }
  }
  if (secondaryMenu) {
    var secondaryMenuItems = secondaryMenu.getElementsByTagName('li') // Get all links from secondary menu
    createMobileMenuItems(secondaryMenuItems, 'secondaryMenu')
  }

  function createMobileMenuItems (menuItems, menuType) { // Function for creating mobile menu items of different types.
    for (var i = 0; i < menuItems.length; i++) {
      var listItem = document.createElement('li')

      listItem.className = menuItems[i].className !== '' ? menuItems[i].className : 'nav-item'

      // Create a link
      var link = document.createElement('a')
      if (menuItems[i].getElementsByTagName('a')[0] != null) {
        link.href = menuItems[i].getElementsByTagName('a')[0].href
        link.text = menuItems[i].getElementsByTagName('a')[0].text
        if (menuItems[i].getElementsByTagName('a')[0].hreflang) {
          link.hreflang = menuItems[i].getElementsByTagName('a')[0].hreflang
        }
        link.className = menuItems[i].getElementsByTagName('a')[0].className
      }

      if (menuType === 'secondaryMenu') {
        var secondaryMenuListItem = document.createElement('li')
        secondaryMenuListItem.className = 'item nav-item secondaryItem'
        link.className = 'headerItem secondaryMenu'
        secondaryMenuListItem.appendChild(link)
        secondaryMenuContainer.appendChild(secondaryMenuListItem)
      } else {
        // Menu type is main menu or mega menu
        var ancestor = document.createElement('span')
        if (menuItems[i].getElementsByTagName('span')[0]) { // If list item contains a span it is an ancestor item
          ancestor.className = menuItems[i].getElementsByTagName('span')[0].className
          ancestor.innerHTML = menuItems[i].getElementsByTagName('span')[0].innerHTML
          listItem.appendChild(ancestor)
        } else {
          var linkContainer = document.createElement('div')

          if (menuItems[i].getElementsByTagName('div')[0]) {
            linkContainer.className = menuItems[i].getElementsByTagName('div')[0].className
          } else {
            linkContainer.className = 'headerItem'
          }
          linkContainer.appendChild(link)
          listItem.appendChild(linkContainer)
        }
      }
      document.getElementById('mobileMenuList').appendChild(listItem) // Add menu item to the mobile menu list
      document.getElementById('mobileMenuList').appendChild(secondaryMenuContainer) // Add menu item to the mobile menu list
    }
  }

  // Mega menu icon toggler.
  document.getElementById('nav-icon').onclick = function () {
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }

    document.getElementById('mobileMenuContent').classList.toggle('show')
    this.classList.toggle('open')
  }
})

var setMainMenuWith = function () {
  var mediaMobile = window.matchMedia('(max-width: 767.98px)')
  var mediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 991.98px)')
  var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var mainMenuDropdown = $('#mainMenu.col.navbar.navbar-expand-lg.navbar-light #navbarNav.navbar-collapse ul.nav')

  if (mediaMobile.matches) {
    mainMenuDropdown.css('width', viewPortWidth - 30)
  } else if (mediaTablet.matches) {
    mainMenuDropdown.css('width', viewPortWidth - 60)
  } else {
    mainMenuDropdown.css('width', 'auto')
  }
}

window.addEventListener('load', setMainMenuWith)
window.addEventListener('resize', setMainMenuWith)
