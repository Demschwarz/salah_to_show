window.addEventListener('DOMContentLoaded', function() {
    let width = screen.width;
  if (width >= 1200 ) {
    mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      slidesPerView: 3
  });
  }
  if (width < 1200 && width > 600) {
    mySwiper1 = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      slidesPerView: 2
    });
  };
  if (width < 600) {
    mySwiper2 = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1
    });
  };
  mySwiper_ex_1 = new Swiper ('.swiper-container_example_first', {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination_ex_1',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    slidesPerView: 1
  });
  mySwiper_ex_2 = new Swiper ('.swiper-container_example_second', {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination_ex_2',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1
  });

  document.querySelector('.link_about').addEventListener('click', function(){
    let way = document.querySelector('.second').offsetTop;
    let counter = 0;
    setInterval(() => {
      if (counter < way) {
        window.scrollTo(0, counter);
        counter += 6;
      } else {
        clearInterval();
      }
    } , 10);
  });
  document.querySelector('.link_services').addEventListener('click', function(){
    let way = document.querySelector('.third').offsetTop;
    let counter = 0;
    setInterval(() => {
      if (counter < way) {
        window.scrollTo(0, counter);
        counter += 12;
      } else {
        clearInterval();
      }
    } , 5);
  });
  document.querySelector('.link_examples').addEventListener('click', function(){
    let way = document.querySelector('.fourth').offsetTop;
    let counter = 0;
    setInterval(() => {
      if (counter < way) {
        window.scrollTo(0, counter);
        counter += 18;
      } else {
        clearInterval();
      }
    } , 5);
  });
  document.querySelector('.link_contacts').addEventListener('click', function(){
    let way = document.querySelector('.fifth').offsetTop;
    let counter = 0;
    setInterval(() => {
      if (counter < way) {
        window.scrollTo(0, counter);
        counter += 20;
      } else {
        clearInterval();
      }
    } , 5);
  });
  document.querySelectorAll('button').forEach(function(item) {
    item.addEventListener('click', function(event){
      let way = document.querySelector('.fifth').offsetTop;
      let counter = event.target.offsetTop;
      setInterval(() => {
        if (counter < way) {
          window.scrollTo(0, counter);
          counter += 20;
        } else {
          clearInterval();
        }
      } , 5);
    });
  })
  // document.querySelectorALL('.btn_signup').forEach(() => {
  //   addEventListener('click', function(){
  //     let way = document.querySelector('.fifth').offsetTop;
  //     let counter = 0;
  //     setInterval(() => {
  //       if (counter < way) {
  //         window.scrollTo(0, counter);
  //         counter += 20;
  //       } else {
  //         clearInterval();
  //       }
  //     } , 5);
  //   });
  // });

    //   var modal = $('.modal'),
    //       thanks = $('.thanks'),
    //       modalBtn = $('[data-toggle=modal]'),
    //       closeBtn = $('.modal__close'),
    //       closeThanks = $('.thanks__close');
      
    //   modalBtn.on('click', function() {
    //       modal.toggleClass('modal--visible');
    //   });
    //   closeBtn.on('click', function() {
    //       modal.toggleClass('modal--visible');
    //   });
    //   closeThanks.on('click', function() {
    //     thanks.toggleClass('thanks--visible');
    // });
    //   var up = $('.button-up');
    //   up.click(function(){
    //       $('html, body').animate({scrollTop:0}, 'slow');
    //   });
    //   up.hide();
    //   $(window).scroll(function() {
    //       if ($(this).scrollTop() > 250) {
    //           up.show();
    //       } else {
    //           up.hide();
    //       }
    //   });
    //   var mySwiper = new Swiper ('.swiper-container', {
    //       loop: true,
    //       navigation: {
    //           nextEl: '.swiper-button-next',
    //           prevEl: '.swiper-button-prev',
    //         },
    //       pagination: {
    //           el: '.swiper-pagination',
    //           type: 'bullets',
    //         }, 
    //     });
    //   var next = $('.swiper-button-next');
    //   var prev = $('.swiper-button-prev');
    //   var bullets = $('.swiper-pagination');
    //   next.css('left', prev.width() + 10 + bullets.width() + 10 )
    //   bullets.css('left', prev.width() + 10)

    //   new WOW().init();

    //   $('.modal__form').validate({
    //       errorClass: "invalid",
    //       errorElement: "div",
    //       rules: {
    //           // simple rule, converted to {required:true}
    //           userName: {
    //               required: true,
    //               minlength: 2,
    //               maxlength: 15
    //           },
    //           userPhone: "required",
    //           // compound rules
    //           userEmail: {
    //             required: true,
    //             email: true
    //           },
    //         },
    //         messages: {
    //           userName: {
    //               required: "Заполните поле",
    //               minlength: "Имя не короче двух букв",
    //               maxlength: "Имя не длиннее пятнадцати букв"
    //           },
    //           userPhone: "Заполните поле",
    //           userEmail: {
    //             required: "Заполните поле",
    //             email: "Введите в формате: name@domain.com"
    //           }
    //         },
    //         submitHandler: function(form) {
    //           $.ajax({
    //             type: "POST",
    //             url: "send_contacts.php",
    //             data: $(form).serialize(),
    //             // dataType: "dataType",
    //             success: function (response) {
    //               console.log('Ajax сработал. Ответ сервера: ' + response);
    //               thanks.toggleClass('thanks--visible');
    //               modal.toggleClass('modal--visible');
    //               $(form)[0].reset();
    //             }
    //           });
    //         }
    //   });
    //   $('.control__form').validate({
    //       errorClass: "invalid",
    //       errorElement: "div",
    //       rules: {
    //           // simple rule, converted to {required:true}
    //           userName: {
    //               required: true,
    //               minlength: 2,
    //               maxlength: 15
    //           },
    //           userPhone: "required",
    //           // compound rules
    //           userEmail: {
    //             required: true,
    //             email: true
    //           },
    //         },
    //         messages: {
    //           userName: {
    //               required: "Заполните поле",
    //               minlength: "Имя не короче двух букв",
    //               maxlength: "Имя не длиннее пятнадцати букв"
    //           },
    //           userPhone: "Заполните поле",
    //           userEmail: {
    //             required: "Заполните поле",
    //             email: "Введите в формате: name@domain.com"
    //           }
    //         },
    //         submitHandler: function(form) {
    //           $.ajax({
    //             type: "POST",
    //             url: "send_camera.php",
    //             data: $(form).serialize(),
    //             // dataType: "dataType",
    //             success: function (response) {
    //               console.log('Ajax сработал. Ответ сервера: ' + response);
    //               thanks.toggleClass('thanks--visible');
    //               // modal.toggleClass('modal--visible');
    //               $(form)[1].reset();
    //             }
    //           });
    //         }
    //   });
    //   $('.footer__form').validate({
    //     errorClass: "invalid",
    //     errorElement: "div",
    //     rules: {
    //         // simple rule, converted to {required:true}
    //         userName: {
    //             required: true,
    //             minlength: 2,
    //             maxlength: 15
    //         },
    //         userPhone: "required",
    //         // compound rules
    //         userEmail: {
    //           required: true,
    //           email: true
    //         },
    //         userQuestion: "required",
    //       },
    //       messages: {
    //         userName: {
    //             required: "Заполните поле",
    //             minlength: "Имя не короче двух букв",
    //             maxlength: "Имя не длиннее пятнадцати букв"
    //         },
    //         userQuestion: "Заполните поле",
    //         userPhone: "Заполните поле",
    //         userEmail: {
    //           required: "Заполните поле",
    //           email: "Введите в формате: name@domain.com"
    //         }
    //       },
    //       submitHandler: function(form) {
    //         $.ajax({
    //           type: "POST",
    //           url: "send_question.php",
    //           data: $(form).serialize(),
    //           // dataType: "dataType",
    //           success: function (response) {
    //             console.log('Ajax сработал. Ответ сервера: ' + response);
    //             thanks.toggleClass('thanks--visible');
    //             // modal.toggleClass('modal--visible');
    //             $(form)[2].reset();
    //           }
    //         });
    //       }
    // });
    //   $('[type="tel"]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

    //   // Функция ymaps.ready() будет вызвана, когда
    //   // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    //   ymaps.ready(function () {
    //     var myMap = new ymaps.Map('map', {
    //             center: [47.208901, 39.631539],
    //             zoom: 9
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         }),
    //         // this.disableScrollZoom(),
    //         // Создаём макет содержимого.
    //         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    //         ),
    
    //         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //             hintContent: 'Наш офис',
    //             balloonContent: 'Вход со двора'
    //         }, {
    //             // Опции.
    //             // Необходимо указать данный тип макета.
    //             iconLayout: 'default#image',
    //             // Своё изображение иконки метки.
    //             iconImageHref: './img/location.png',
    //             // Размеры метки.
    //             iconImageSize: [32, 32],
    //             // Смещение левого верхнего угла иконки относительно
    //             // её "ножки" (точки привязки).
    //             iconImageOffset: [-5, -38]
    //         });
    //         myMap.behaviors.disable('scrollZoom');
    //     myMap.geoObjects
    //         .add(myPlacemark)
    // });
  // });

});