window.addEventListener('DOMContentLoaded', function() {
    let width = screen.width;
  if (width >= 1200 ) {
    mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      slidesPerView: 3
  });
  }
  if (width < 1200 && width > 600) {
    mySwiper1 = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      slidesPerView: 2
    });
  };
  if (width < 600) {
    mySwiper2 = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1
    });
  };
  mySwiper_ex_1 = new Swiper ('.swiper-container_example_first', {
    loop: false,
    pagination: {
      el: '.swiper-pagination_ex_1',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1
  });
  mySwiper_ex_2 = new Swiper ('.swiper-container_example_second', {
    loop: false,
    pagination: {
      el: '.swiper-pagination_ex_2',
    },
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
  });

  const setReg = () => {
    elem = document.querySelector('form');
    elem.querySelector('button').setAttribute('disabled', 'true');
    elem.querySelector('input[name="userPhone"]').addEventListener('input', () => {
        if (elem.querySelector('input[name="userPhone"]').value.length < 5 || elem.querySelector('input[name="userPhone"]').value.length > 12) {
            elem.querySelector('button').setAttribute('disabled', 'true');
            elem.querySelector('input[name="userPhone"]').style.border = '1px solid red';
        } else {
            elem.querySelector('button').removeAttribute('disabled')
            elem.querySelector('input[name="userPhone"]').style.border = '1px solid gray';
        }
    })
    const nameForms = document.querySelectorAll('[name="userName"]');
    const telForms = document.querySelectorAll('[name="userPhone"]');
    const questForms = document.querySelectorAll('[name="userQ"]');
    nameForms.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^А-яа-я ]/g, '');
        })
    });
    telForms.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^+0-9]/g, '');
        })
    });
    questForms.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^А-Яа-я.,:?()"! ]/g, '');
        })
    });
}
setReg();

});