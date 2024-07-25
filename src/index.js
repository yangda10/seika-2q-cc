import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const validator = new JustValidate('#basic_form');

const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    activeIndex: 'Number',
  }
});

swiper1.on('activeIndexChange', function() {
  const num1 = document.getElementById('active-index');
  num1.textContent = `スライド${swiper1.realIndex}を表示しています`;
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    activeIndex: 'Number',
  }
});

swiper2.on('activeIndexChange', function(){
  const text = document.getElementById('food');
  let index = swiper2.realIndex;
  let list = ['たまごサンド','バーガー','食パン','ホットドッグ'];
  text.textContent = list[index];
})

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '名前を入力してください',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: 'e-mailを入力してください',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: 'パスワードを入力してください',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '年齢を入力してください',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField('#basic_adress', [
    {
      rule: 'required',
      errorMessage: '住所を入力してください',
    },
  ])
  .onSuccess((event) => {
    let formdata = new FormData((event.target));
    console.log(formdata.get('name'));
    console.log(formdata.get('mail'));
    console.log(formdata.get('password'));
    console.log(formdata.get('age'));
    console.log(formdata.get('adress'));
    // event.currentTarget.submit();
  });
