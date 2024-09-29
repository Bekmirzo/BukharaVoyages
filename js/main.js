const main_content = document.getElementById('main_content');
const nav_asosiy = document.getElementById('nav_asosiy');
const lang_dropdown = document.getElementById('lang_dropdown');
const dw_main = document.getElementById('dw_main');
const header_text = document.getElementById('header_text');
const tp_header = document.getElementById('tp_header');




const buxoro_btn = document.getElementById('buxoro_btn');
const samarqand_btn = document.getElementById('samarqand_btn');
const shahrizabz = document.getElementById('shahrizabz');
const xiva_btn = document.getElementById('xiva_btn');


lang_dropdown.onclick = function (event) {

  const lng = event.target.getAttribute('lng');

  sessionStorage.setItem('language', lng);


  switch (lng) {
    case 'uz':
      dw_main.innerHTML = `<img src="./img/flags/UZ.png">&nbsp; O‘zbek`;
      header_text.innerHTML = text.header_text.uz;
      break;
    case 'en':
      dw_main.innerHTML = `<img lng="en" src="./img/flags/US.png">&nbsp;English`;
      header_text.innerHTML = text.header_text.en;
      break;
    case 'ru':
      dw_main.innerHTML = `<img lng="ru" src="./img/flags/RU.png">&nbsp;Русский`;
      header_text.innerHTML = text.header_text.ru;
      break;

    default:
      break;
  };


  const stat = sessionStorage.getItem('stat');

  switch (stat) {
    case 'asosiy':
      asosiy();
      break;
    case 'bukharaSamarqandShahrisabz':
      bukharaSamarqandShahrisabz();
      break;
    case 'samarqand':
      samarqand();
      break;
    case 'xiva':
      xiva();
      break;

    default:
      break;
  }






};


window.onload = function () {

  sessionStorage.setItem('stat', 'asosiy');
  const language = sessionStorage.getItem('language');
  // if (language == null) sessionStorage.setItem('language', 'uz');
  sessionStorage.setItem('language', 'uz')
}





nav_asosiy.onclick = asosiy

function asosiy() {

  const language = sessionStorage.getItem('language');

  switch (language) {
    case 'uz':
      dw_main.innerHTML = `<img src="./img/flags/UZ.png">&nbsp; O‘zbek`;
      header_text.innerHTML = text.header_text.uz;
      main_content.innerHTML = text.main.uz;
      break;
    case 'ru':
      dw_main.innerHTML = `<img lng="ru" src="./img/flags/RU.png">&nbsp;Русский`;
      header_text.innerHTML = text.header_text.ru;
      main_content.innerHTML = text.main.ru;
      break;
    case 'en':
      dw_main.innerHTML = `<img lng="en" src="./img/flags/US.png">&nbsp;English`;
      header_text.innerHTML = text.header_text.en;
      main_content.innerHTML = text.main.en;
      break;

    default:
      break;
  };







  const buxoro_btn = document.getElementById('buxoro_btn');
  const samarqand_btn = document.getElementById('samarqand_btn');
  const shahrizabz = document.getElementById('shahrizabz');
  const xiva_btn = document.getElementById('xiva_btn');
  buxoro_btn.onclick = bukharaSamarqandShahrisabz;
  samarqand_btn.onclick = samarqand;
  shahrizabz.onclick = bukharaSamarqandShahrisabz;
  xiva_btn.onclick = xiva;

  const tp_header = document.getElementById('tp_header');

  tp_header.focus();

  sessionStorage.setItem('stat', 'asosiy');

};


buxoro_btn.onclick = bukharaSamarqandShahrisabz;
samarqand_btn.onclick = samarqand;
shahrizabz.onclick = bukharaSamarqandShahrisabz;
xiva_btn.onclick = xiva;


function bukharaSamarqandShahrisabz() {

  main_content.innerHTML = text.tp.buxoro.uz;

  const language = sessionStorage.getItem('language');

  switch (language) {
    case 'uz':
      main_content.innerHTML = text.tp.buxoro.uz;
      break;
    case 'ru':
      main_content.innerHTML = text.tp.buxoro.ru;
      break;
    case 'en':
      main_content.innerHTML = text.tp.buxoro.en;
      break;

    default:
      break;
  };

  const back_btn = document.getElementById('back_btn');
  back_btn.onclick = asosiy;
  main_content.focus();

  sessionStorage.setItem('stat', 'bukharaSamarqandShahrisabz');
}

function samarqand() {

  const language = sessionStorage.getItem('language');

  switch (language) {
    case 'uz':
      main_content.innerHTML = text.tp.samarqand.uz;
      break;
    case 'ru':
      main_content.innerHTML = text.tp.samarqand.ru;
      break;
    case 'en':
      main_content.innerHTML = text.tp.samarqand.en;
      break;

    default:
      break;
  };


  const back_btn = document.getElementById('back_btn');
  back_btn.onclick = asosiy;

  sessionStorage.setItem('stat', 'samarqand');

};

function xiva() {


  const language = sessionStorage.getItem('language');


  switch (language) {
    case 'uz':
      main_content.innerHTML = text.tp.xiva.uz;
      break;
    case 'ru':
      main_content.innerHTML = text.tp.xiva.ru;
      break;
    case 'en':
      main_content.innerHTML = text.tp.xiva.en;
      break;

    default:
      break;
  };


  const back_btn = document.getElementById('back_btn');
  back_btn.onclick = asosiy;
  main_content.focus();

  sessionStorage.setItem('stat', 'xiva');
};
