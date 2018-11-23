function mobileMenuControl () {
  let mobileMenuIcon = document.querySelector('.hamburger-menu');
  let closeMenu = document.querySelector('.close__link');
  let mobileMenu = document.querySelector('.section.mobile-menu');
  let mobileMenuItems = document.querySelectorAll('.nav__item--mobile')

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

//мобильное меню
mobileMenuControl();

function verticalMenu () {
  const teamItems = document.querySelectorAll('.team_item');
  teamItems.forEach(item => {
    const teamTitle = item.querySelector('.team__title');

    teamTitle.onclick = function(e) {
      e.preventDefault();
      itemClassRemove(item);
      item.classList.toggle('team_item--checked');
    };
  });

  function itemClassRemove (checkItem) {
    teamItems.forEach( item => {
      if (item!=checkItem) {
        item.classList.remove('team_item--checked');
      }
    });
  }
}

//вертикальное меню в секции team
verticalMenu();

function horizontalMenu () {
  const menuItems = document.querySelectorAll('.menu__item');
  
  menuItems.forEach(item => {
    item.classList.toggle('menu__item--checked-phones');
    item.onclick = function(e) {
      itemClassRemove(item);
      item.classList.toggle('menu__item--checked');
    };
  });
  function itemClassRemove (checkItem) {
    menuItems.forEach( item => {
      if (item!=checkItem) {
        item.classList.remove('menu__item--checked');
        item.classList.remove('menu__item--checked-phones');
      }
    });
  }
}

horizontalMenu();