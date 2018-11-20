function mobileMenuControl () {
  var mobileMenuIcon = document.querySelector('.hamburger-menu');
  var closeMenu = document.querySelector('.close__link');
  var mobileMenu = document.querySelector('.section.mobile-menu');
  var mobileMenuItems = document.querySelectorAll('.nav__item--mobile')

  mobileMenuIcon.onclick = function(e) {
    e.preventDefault();
    mobileMenu.classList.toggle('mobile-menu--checked');
    mobileMenuIcon.classList.toggle('hamburger-menu--checked')
  };
  mobileMenuItems.forEach(item => {
    item.onclick = function(e) {
      e.preventDefault();
      mobileMenu.classList.toggle('mobile-menu--checked');
      mobileMenuIcon.classList.toggle('hamburger-menu--checked')
    };
  });
}

mobileMenuControl();
