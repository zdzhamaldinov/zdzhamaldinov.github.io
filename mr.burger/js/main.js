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

function verticalMenu () {
  const teamItems = document.querySelectorAll('.team_item');
  teamItems.forEach(item => {
    const teamTitle = item.querySelector('.team__title');

    teamTitle.onclick = function(e) {
      e.preventDefault();
      item.classList.toggle('team_item--checked');
    };
  });
}

verticalMenu();