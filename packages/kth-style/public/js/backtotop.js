window.addEventListener('load', function() {
  /**
    * Back to top link
    */
  var backToTopButton = document.querySelector('#back-to-top');
  backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth'});
        this.classList.toggle('show');
        this.setAttribute('aria-hidden', true);
    });
  var last_known_scroll_position = 0;
  var ticking = false;

  function handleBackToTop(scroll_pos) {
    if(scroll_pos > 200) {
        backToTopButton.classList.add('show');
        backToTopButton.removeAttribute('aria-hidden');
    } else {
        backToTopButton.classList.remove('show');
        backToTopButton.setAttribute('aria-hidden', true);
    }
  }

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleBackToTop(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });

});
