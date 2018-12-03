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

//слайдерна флексах. на ордерах
burgerSlider();

function formProcessing() {
    const order = document.querySelector('.order');
    const form = order.querySelector('#order-form');
    const sendBtn = order.querySelector('#send-btn');
    const modalView = order.querySelector('.modal-wrap');
    const modalText = order.querySelector('.modal__text');
    const modalBtn = order.querySelector('.btn--modal');
    modalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalView.classList.toggle('checked');
    })
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (formCheck(form)) {

        var formData = new FormData();
        formData.append('name', form.elements.name.value);
        formData.append('phone', form.elements.phone.value);
        formData.append('comment', form.elements.comment.value);
        formData.append('to', 'my@site.com');

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', () => {
          if (xhr.response['status'] == '1') {
            modalText.textContent = 'Сообщение отправлено!';
            modalView.classList.toggle('checked');
            
          } else {

            modalText.textContent = 'Сообщение не отправлено!';
            modalView.classList.toggle('checked');
            
          }
          
        });

      } else {

        modalText.textContent = 'Заполните форму!';
        modalView.classList.toggle('checked');
      }
      
    });

    function formCheck(form) {
      var valid = true;
      
      if (!fieldCheck(form.elements.name)) {
        valid = false;
      }
      if (!fieldCheck(form.elements.phone)) {
        valid = false;        
      }
      if (!fieldCheck(form.elements.comment)) {
        valid = false;        
      }
      return valid;
    }

    function fieldCheck(field) {
      console.log(field.validationMessage);
      return field.checkValidity();
      }      
    
}

//Обработка формы
formProcessing();


//Скролл страниц
$(document).ready(function () {
  var iScrollPos = 0;

$(window).on('scroll',function () {
  var iCurScrollPos = $(this).scrollTop();

  if (iCurScrollPos > iScrollPos) {
      var $this = $(this),
      container = $this.closest('wrapp'),
      items = container.find('section'),
      activeSlide = items.filter('active'),
      reqItem = activeSlide.next(),
      reqIndex = reqItem.index(),
      list = container.find('maincontainer'),
      duration = 500;
      
      if (reqItem.lenght) {
          list.animate ({
              'whell' : -reqIndex * 100 + 'vh'
          },duration, function () {
              activeSlide.removeClass('active');
              reqItem.addClass('active');
          });
          
      }
  } else {
      
  }
  iScrollPos = iCurScrollPos;
});
});



function mapContact () {

  var placemarks = [
    {
      latitude: 59.954146,
      longitude: 30.315665,
      hintContent: 'Александровские парк, 7', //можно применить html и css
      balloonContent: 'Александровские парк, 7' //можно применить html и css
    },    
    {
      latitude: 59.944869,
      longitude: 30.300645,
      hintContent: 'набережная Маркова, 4',
      balloonContent: 'набережная Маркова, 4'
    },    
    {
      latitude: 59.942301,
      longitude: 30.304100,
      hintContent: 'Биржевой проезд, 2',
      balloonContent: 'Биржевой проезд, 2'
    },    
    {
      latitude: 59.941967,
      longitude: 30.317476,
      hintContent: '<Миллионная улица,35',
      balloonContent: 'Миллионная улица,35'
    }
  ],
  geoObjects = [];

  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [59.939095, 30.315868],
          zoom: 12,
          controls: ['zoomControl'],
          behaviors: ['drag']                       
      });

      
      for (var i =0; i<placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
          hintContent: placemarks[i].hintContent,
          balloonContent: placemarks[i].balloonContent
        }, {
          iconLayout: 'default#image',
          iconImageHref: './img/map-marker.png', 
          iconImageSize: [46,57],
          iconImageOffset: [-23,-57]
          //использование спрайтов
          //iconImageClipRect: [[444,0], [23,433]]
  
        });
      };

      //Кластеризатор ---> собирает в один бургер
      var clusterer = new ymaps.Clusterer({
        clusterIcons:[
          {
            href: './img/burgers.png', 
            size: [140,100],
            offset: [-50,-50]
          }
        ],
        clusterIconContentLayout: null
      });

      myMap.geoObjects.add(clusterer);
      clusterer.add(geoObjects);

  }
}


//Карта
mapContact ();


function onePageScroll () {
  var section = $('.section');
  var display = $('.maincontainer');
  let inScroll = false;
  
  
  const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;
    const mouseInertionIsFinished = 300;
    const transitionFinished = 500;
    if (inScroll == false) {
      inScroll = true;

      display.css({
        transform: `translateY(${position})`
      });
  
      section
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');

      setTimeout (() => {
        inScroll = false;
      }, transitionFinished + mouseInertionIsFinished);

    }
  }

  const scrollToSection = (direction) => {
    const activeSection = section.filter('.active');
    const prevSection = activeSection.prev();
    const nextSection = activeSection.next();

    if (direction =='up' && prevSection.length) {
      performTransition(prevSection.index());
    }
    if (direction =='down' && nextSection.length) {
      performTransition(nextSection.index());
    }
    
  }

  $(document).on({
    wheel: (e) => {
      const deltaY = e.originalEvent.deltaY;

      const direction = deltaY > 0 ? "down" : "up";
      scrollToSection(direction);
    
  },
  keydown: (e) => {
    switch (e.keyCode) {
      case 40:
        scrollToSection("down");
        break;
      case 38:
        scrollToSection("up");
        break;

    }
  }
  });

  $("[data-scroll-to]").on('click', (e) => {
    e.preventDefault();

    const target = $(e.currentTarget).attr("data-scroll-to");
    
    performTransition(target);
  });

}

onePageScroll ();


$(document).ready( function () {
  var review = $('.review');
  var modalWrapp = $('.modal-wrap', review);
  
  review.on('click', function(e) {
    
    if ($(e.target).is('.btn--reviewe') == true) {
      modalWrapp.toggleClass('checked');
    }
    
    if ($(e.target).is('.close-icon__svg') == true) {
      console.log(e.target);
      modalWrapp.toggleClass('checked');
    }
  });

});
