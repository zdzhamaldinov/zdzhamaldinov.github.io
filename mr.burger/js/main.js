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
    item.onclick = function(e) {
      itemClassControl(item);
      item.classList.toggle('menu__item--checked');
      item.classList.toggle('menu__item--checked-phones');
    };
  });

  function itemClassControl (checkItem) {
    menuItems.forEach( item => {
      if (item!=checkItem) {
        item.classList.remove('menu__item--checked');
        item.classList.toggle('menu__item--checked-phones');
      }
      else{
        item.classList.toggle('menu__item--checked-phones');
      }
    });
  }
}

horizontalMenu();

function burgerSlider () {
  let next = document.querySelector('.scroll-btn--next');
  let prev = document.querySelector('.scroll-btn--prev');
  let list = document.querySelector('.slider__list');
  let items = list.querySelectorAll('.slider__item');

  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);

  let num =2;

  function moveNext (e) {
    e.preventDefault();
    num++
    if(num > items.length) {
      num =1
    }
    setOrder();
    list.classList.remove('is-reverse');
    moveItem();
  }
  function movePrev(e) {
    e.preventDefault();
    num--;
    if (num===0) {
      num= items.length;
    }
    setOrder();
    list.classList.add('is-reverse');
    moveItem();
  }

  function setOrder () {
    let key = num;
    
    for (const i of items) {
      i.style.order = key;
      key++;
      if (key>items.length) {
        key=1;
      }
    }
  }

  function moveItem() {
    list.classList.remove('is-move');
    setTimeout(()=>{
      list.classList.add('is-move');
    }, 1);
  }
  
}
burgerSlider();