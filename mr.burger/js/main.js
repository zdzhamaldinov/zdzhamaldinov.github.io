function mobileMenuControl () {
  var mobileMenuIcon = document.querySelector('.humb-button');
  var closeMenu = document.querySelector('.close__link');
  var mobileMenu = document.querySelector('.section.mobile-menu');
  var mobileMenuItems = document.querySelectorAll('.nav__item--mobile')

  mobileMenuIcon.onclick = function(e) {
    e.preventDefault();
    mobileMenu.classList.toggle('mobile-menu--checked');
  };
  closeMenu.onclick = function(e) {
    e.preventDefault();
    mobileMenu.classList.toggle('mobile-menu--checked');
  };
  mobileMenuItems.forEach(item => {
    item.onclick = function(e) {
      e.preventDefault();
      mobileMenu.classList.toggle('mobile-menu--checked');
    };
  });
}

mobileMenuControl();
