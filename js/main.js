const main_content = document.getElementById('main_content');
const nav_asosiy = document.getElementById('nav_asosiy');

const tp_header = document.getElementById('tp_header');
const buxoro_btn = document.getElementById('buxoro_btn');
const samarqand_btn = document.getElementById('samarqand_btn');
const shahrizabz = document.getElementById('shahrizabz');
const xiva_btn = document.getElementById('xiva_btn');


nav_asosiy.onclick = asosiy

function asosiy() {
  main_content.innerHTML =
    `
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card shadow-sm">
            <img src="./img/buxoro1.jpg" style="object-fit: cover; height: 400px; overflow-clip-margin: unset;"
              class="card-img-top" alt="...">
            <div class="card-body bg-success">
              <h1 class="text-center text-bg-success">Buxoro</h1>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="./img/shahrisabz1.jpeg" style="object-fit: cover; height: 400px; overflow-clip-margin: unset;"
              class="card-img-top" alt="...">
            <div class="card-body bg-success">
              <h1 class="text-center text-bg-success">Shahrizabz</h1>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="./img/samarqand.jpg" style="object-fit: cover; height: 400px; overflow-clip-margin: unset;"
              class="card-img-top" alt="...">
            <div class="card-body bg-success">
              <h1 class="text-center text-bg-success">Samarqand</h1>
            </div>
          </div>
        </div>
      </div>
      <br>

      <p class="display-2 text-uppercase text-center" > Bizning tur paketlar</p>

      <div class="row">
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img src="./img/buxoro2.jpg" style="height: 190px;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Buxoro</h5>
              <p class="card-text" style="height: 120px;">Buxoro viloyatining ajoyib joylarida, xususan 7 pir
                ziyoratgohlarida sayohat olib
                boriladi...</p>
            </div>
            <ul class="list-group list-group-flush" id="tp_header">
              <li id="buxoro_btn" tabindex="0" class="list-group-item text-center bg-primary text-bg-primary" role="button">Batafsil</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img src="./img/samarqand.png" style="height: 190px;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Samarqand</h5>
              <p class="card-text" style="height: 120px;">Samarqand shahrining tarixiy joylar, jumladan registon
                maydoni, Mirzo Ulug‘bek rasadxonasi kabi joylarda boriladi ... </p>
            </div>
            <ul class="list-group list-group-flush">
              <li id="samarqand_btn" class="list-group-item text-center bg-primary text-bg-primary" role="button">Batafsil</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img src="./img/shahrisabz2.jpg" style="height: 190px;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Shahrizabz</h5>
              <p class="card-text" style="height: 120px;">Shahrizabzning diqqatga sazovor joylari joylari, Oq saroy,
                Dor-ut tilovat, Dor-us saidat, Ko‘k gumbazlarda sayohat olib
                boriladi...</p>
            </div>
            <ul class="list-group list-group-flush">
              <li id="shahrizabz" class="list-group-item text-center bg-primary text-bg-primary" role="button">Batafsil</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img src="./img/xiva1.jpg" style="height: 190px;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Xiva</h5>
              <p class="card-text" style="height: 120px;">Xiva shahrining turistik manzillari, Kechikmas ota
                ziyoratgohi, ota darvoza, kalta minor, Sherqozixon madrasasi kabi joylarda sayohat olib
                boriladi...</p>
            </div>
            <ul class="list-group list-group-flush">
              <li id="xiva_btn" class="list-group-item text-center bg-primary text-bg-primary" role="button">Batafsil</li>
            </ul>
          </div>
        </div>
      </div>

      <br>

      <p class="display-2 text-uppercase text-center"> Bizning sayohatlar</p>

      <div class="container-fluid">
        <div class="row">
          <div class="col-6 mb-3" style="background-image: url('./img/sayohat1.jpg'); background-size: cover; height: 400px;">
          </div>
          <div class="col-6 mb-3" style="background-image: url('./img/sayohat2.jpg'); background-size: cover; height: 400px;">
          </div>
          <div class="col-6 mb-3" style="background-image: url('./img/sayohat3.jpg'); background-size: cover; height: 400px;">
          </div>
          <div class="col-6 mb-3" style="background-image: url('./img/sayohat4.jpg'); background-size: cover; height: 400px;">
          </div>
        </div>
      </div>

      <br>
    </div>
    `;

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

  console.log(tp_header)

};


buxoro_btn.onclick = bukharaSamarqandShahrisabz;
samarqand_btn.onclick = samarqand;
shahrizabz.onclick = bukharaSamarqandShahrisabz;
xiva_btn.onclick = xiva;


function bukharaSamarqandShahrisabz() {
  let text1 = '';
  text1 += `<h2 class="card-title" style="color: #181818; text-align: center"><b>1- Kun</b></h2>`;
  text1 += `<ul style="list-style-position: inside">`;
  text1 += `<li><span style="color: #D40000">5:00</span> da Maxalla binosi oldida yigilish</li>`;
  text1 += `<li><span style="color: #D40000">5:15</span> da Buxoro Samarqand yo‘nalishida Avtobusda yo‘lga chiqiladi</li>`;
  text1 += `<li><span style="color: #D40000">08:00</span> da yo‘l yo‘lakay nonushta qilinadi</li>`;
  text1 += `<li><span style="color: #D40000">09:30</span> Shu bilan birinchi kun Samarqand shaxriga yetib kelinadi</li>`;
  text1 += `
            <li>
            <span style="color: #D40000">10.00</span> da Samarqand shaxridagi barcha tarixiy obidalarni sayoxat xamda ziyorat qilishga Smarqand shaxrida Gid bilan birgalkda yo‘lga tushiladi.
                <ol>    
                    <li>Go‘ri-Amir maqbarasi</li>
                    <li>Registon maydoni</li>
                    <li>Bibixonim jome masjidi</li>
                    <li>Siyob bozori</li>
                    <li>O‘zbekiston birinchi Prezidenti I.A.Karimovning dafn etilgan ziyoratgoxi</li>
                    <li>Xazrati Xizr ziyoratgoxi</li>
                </ol>
            </li>`;
  text1 += `<li><span style="color: #D40000">13:00</span> da Samarqand osh markazida tushlik. Tushlikda Samarqand oshidan tanovul qilinadi. Tushlikdan so‘ng:</li>`;
  text1 +=
    `
    <ol>
        <li>Shoxi Zinda makbaralar majmuasi</li>
        <li>Ulug‘bek rasadxonasi</li>
        <li>Imom al-Buxoriy maqbarasi. Ziyorat qilish hamda Quron tilovat qilish imkoniyati bor</li>
    </ol>
    `;
  text1 += `<li><span style="color: #D40000">18:00</span> da Smarqand shaxrida Gid xizmati</li>`;
  text1 += `<li><span style="color: #D40000">20:00</span> da Samarqand mexmonxonada joylashish</li>`;
  text1 += `<li><span style="color: #D40000">20:30</span> da Samarqand Restoranda kechki ovkat</li>`;
  text1 += `</ul>`;




  let text2 = `<h2 style="color: #181818; text-align: center"><b>2- Kun</b></h2>`;
  text2 += `<ul style="list-style-position: inside">`;
  text2 += `<li>Shaxrisabzga  yul olinadi</li>`;
  text2 += `<li><span style="color: #D40000">9:00</span> da Shaxrisabz tarixiy obidalariga ziyorat Shaxrisabzda gid xizmati mavjud</li>`;
  text2 += `
                <ol>    
                    <li>OQ SAROY</li>
                    <li>Dor-ut Tilovat</li>
                    <li>Ko‘k-Gumbaz masjidi</li>
                    <li>mavzolei Dor-us Siadat</li>
                    <li>Shamsad-Dina Kulyala</li>
                    <li>Gumbazi-Seyidan</li>
                </ol>
               `;
  text2 += `<li><span style="color: #D40000">13:30</span> da Shaxrisabz maxalliy kafeda tushlik</li>`;
  text2 += `<li><span style="color: #D40000">16:00</span> da Shaxrisabzdan Buxoroga karab yul olinadi </li>`;
  text2 += `<li><span style="color: #D40000">20:00</span> da Al-Xabib notel mexmonxonada joylashish</li>`;
  text2 += `<li><span style="color: #D40000">20:30</span> da Mexmonxonada kechki ovqat </li>`;

  text2 += `</ul>`;






  let text3 = `<h2 style="color: #181818; text-align: center"><b>3- Kun</b></h2>`;
  text3 += `<ul style="list-style-position: inside">`;
  text3 += `<li><span style="color: #D40000">07:30</span> mexmonxonada nonushta</li>`;
  text3 += `<li><span style="color: #D40000">8:00</span> da  Buxoro  viloyatlarida  joylashgan  Yetti  Pirni  ziyorat  kilish  uchun  yulga  chikiladi Gid bilan birgalikda sayexat boshlanadi</li>`;
  text3 += `<li><span style="color: #D40000">9:00-9:20</span> Xazrat  Abdulxolik  Gijduvoniy</li>`;
  text3 += `<li><span style="color: #D40000">9:40-10:00</span> Xoja  Muxammad  Orif  Ar revgariy</li>`;
  text3 += `<li><span style="color: #D40000">10:20-10:50</span> Xoja  Maxmud Anjir  Fagnaviy</li>`;
  text3 += `<li><span style="color: #D40000">11:30-12:00</span> Xoja  Ali  Romitaniy</li>`;
  text3 += `<li><span style="color: #D40000">12:20-12:40</span> Xoja Maxammad  boboyi  Samosiy</li>`;
  text3 += `<li><span style="color: #D40000">13:00-14:00</span> da  Buxoro  shaxridagi  “VARNET” nomli  Turkiya Uzbekiston kushma korxonasida  tushlik</li>`;
  text3 += `<li><span style="color: #D40000">14:40-15:00</span> Sayyid  Amir  Kulol</li>`;
  text3 += `<li><span style="color: #D40000">15:20-16:20</span> Xazrat  Baxouddin  Naqshband</li>`;
  text3 += `<li><span style="color: #D40000">16:30-17:30</span> gacha  Xazrat  Baxouddin  Naqshband  makbarasi yakinida  sayyoxlar  uchun  tashkil  kilingan  Savdo  Majmuasidan  xarid  uchun  vakt  ajratiladi</li>`;
  text3 += `<li><span style="color: #D40000">18:00</span> da Ochik  kun. Bunda  sayyoxlar  Buxoro shaxrida uzini  kiziktirgan  maskanlarga, savdo  markazlarga va boshka  joylarga borishlari  mumkun</li>`;
  text3 += `<li><span style="color: #D40000">20:00</span> da Maxallaga   yul  olamiz.</li>`;

  text3 += `</ul>`;


  let card1 =
    `
        <div class="col-sm-12 col-lg-4 mb-4 shadow" style="">
            <div class="card h-100">
            <div class="card-body">
                <p class="card-text">${text1}</p>
            </div>
            </div>
        </div>
        `;

  let card2 =
    `
        <div class="col-sm-12 col-lg-4 mb-4 shadow" style="">
            <div class="card h-100">
            <div class="card-body">
                <p class="card-text">${text2}</p>
            </div>
            </div>
        </div>
        `;


  let card3 =
    `
        <div class="col-sm-12 col-lg-4 mb-4 shadow " style="">
            <div class="card h-100">
            <div class="card-body">
                <p class="card-text">${text3}</p>
            </div>
            </div>
        </div>
        `;


  main_content.innerHTML =
    `
        <h1 style="color: #3077C6" class="text-center text-uppercase">Buxoro Samarqand Shahrisabz</h1>
        <div class="container d-grid" style="">
            <div class="row d-flex justify-content-between align-items-stretch">
                ${card1}
                ${card2}
                ${card3}
            </div>
            <b class="h3">Murojaat uchun:</b>
            <span class="h4">Telefon: +998 94 321 37 31</span>
            <span class="h4">Telegram: +998 90 788 37 31 </span>
            <br>
            <div class="row" style="">
                <div id="back_btn" class="col btn btn-primary justify-content-center d-flex align-items-center" >
                    <i class="fa-solid fa-left-long fa-2x"></i>
                        &nbsp;Ortga
                    </div>
                <div class="col" style=""></div>
                <div class="col btn btn-success justify-content-center d-flex align-items-center" onclick="window.open('https://t.me/+998907883731', '_blank');">
              
                  <i class="fa-solid fa-check fa-2x"></i>
                  &nbsp;Bron qilish
                  
                </div>
            </div>
            <br>
        </div>
        `;

  const back_btn = document.getElementById('back_btn');
  back_btn.onclick = asosiy;
  main_content.focus();
}

function samarqand() {


  let text1 = '';

  text1 += `<ul>`;
  text1 += `<li><span style="color: #D40000">06:00</span> Samarqand shahriga yo‘lga tushiladi</li>`;
  text1 += `<li><ol>`;
  text1 += `<li>Registon maydoni</li>`;
  text1 += `<li>Go‘ri Amir maqbarasi</li>`;
  text1 += `<li>Xazrati Xizr maqbarasi</li>`;
  text1 += `<li>Shoxizinda majmuasi</li>`;
  text1 += `<li>Ulug‘bek Rasadxonasi</li>`;
  text1 += `<li>Restoranda tushlik</li>`;
  text1 += `</ol></li>`;
  text1 += `<li>Narxlar 312 000 so‘m ushbu narxga zamonaviy katta aftobus, ekskursavod xizmatlari, kirish chiptalari
    Va 1 maxal ovqatlanish (tushlik) kritilgan
    </li>`;
  text1 += `</ul>`;
  text1 += `<b class="h3">Murojaat uchun:</b>`;
  text1 += `<br><span class="h4">Telefon: +998 94 321 37 31</span>`;
  text1 += `<br><span class="h4">Telegram: +998 90 788 37 31 </span>`;


  let card1 =
    `
    <div class="col mb-4 shadow" style="">
        <div class="card h-100">
        <div class="card-body">
            <p class="card-text">${text1}</p>
        </div>
        </div>
    </div>
    `;



  main_content.innerHTML =
    `
        <h1 style="color: #3077C6" class="text-center text-uppercase">Samarqand Shahriga sayohat va ziyorat</h1>
        <div class="container d-grid" style="">
            <div class="row d-flex justify-content-between align-items-stretch">
                ${card1}
            </div>

            <div class="row" style="">
                <div id="back_btn" class="col btn btn-primary justify-content-center d-flex align-items-center" >
                    <i class="fa-solid fa-left-long fa-2x"></i>
                        &nbsp;Ortga
                    </div>
                <div class="col" style=""></div>
                <div class="col btn btn-success justify-content-center d-flex align-items-center" onclick="window.open('https://t.me/+998907883731', '_blank');">
                <i class="fa-solid fa-check fa-2x"></i>
                    &nbsp;Bron qilish
                </div>
            </div>
            <br>
            
        </div>
        
        
        `;

  const back_btn = document.getElementById('back_btn');
  back_btn.onclick = asosiy

};

function xiva() {


  let text1 = '';


  text1 += `<h3 class="text-center text-body-secondary"> Kechirmas ota ziyoratgoxi va Xiva bo‘ylab  2 kunlik sayoxat<br>Sayoxat davomida:</h3>`;
  text1 += `<ul style="list-style-type: none">`;
  text1 += `<li>✅ Kechirmas Ota ziyeratgoxi</li>`;
  text1 += `<li>✅ Ota darvoza</li>`;
  text1 += `<li>✅ Kalta minor</li>`;
  text1 += `<li>✅ Muxammad Aminxon Madrasasi</li>`;
  text1 += `<li>✅ Xon kabulxonasi</li>`;
  text1 += `<li>✅ Xonning yozgi va qishgi masjidi</li>`;
  text1 += `<li>✅ Sherkozixon madrasasi</li>`;
  text1 += `<li>✅ Paxlavon Maxmud maqbarasi</li>`;
  text1 += `<li>✅ Bush vaktda Bozorlarni kurish</li>`;
  text1 += `<li>✅ Toshxovli</li>`;
  text1 += `<li>✅ Isloxuja minorasi</li>`;
  text1 += `<li>✅ Uch avliyo maqbaralarini ziyorati</li>`;
  text1 += `<li>Yuqorida ko‘rsatilgan sayoxat dasturlari narxiga kiradi:
        <ul>
            <li>transport xizmati</li>
            <li>tushlik 2 maxal</li>
            <li>kechki ovqat 1 mahal</li>
            <li>Shinam  mexmonxona</li> 
            <li>Xorazmning mashhur xalipalari ishtirokidagi  konserti</li> 
            <li>Gidlar xizmati</li>
        </ul>
        </li>`;
  text1 += `</ul>`;
  text1 += `<b class="h3">Murojaat uchun:</b>`;
  text1 += `<br><span class="h4">Telefon: +998 94 321 37 31</span>`;
  text1 += `<br><span class="h4">Telegram: +998 90 788 37 31 </span>`;


  let card1 =
    `
    <div class="col mb-4 shadow" style="">
        <div class="card h-100">
        <div class="card-body">
            <p class="card-text">${text1}</p>
        </div>
        </div>
    </div>
    `;



  main_content.innerHTML =
    `
    <h1 style="color: #3077C6" class="text-center text-uppercase">Xivaga Shahriga sayohat va ziyorat</h1>
    <div class="container d-grid" style="">
        <div class="row d-flex justify-content-between align-items-stretch">
            ${card1}
        </div>
        <div class="row" style="">
            <div id="back_btn" class="col btn btn-primary justify-content-center d-flex align-items-center" >
                <i class="fa-solid fa-left-long fa-2x"></i>
                    &nbsp;Ortga
                </div>
            <div class="col" style=""></div>
            <div class="col btn btn-success justify-content-center d-flex align-items-center" onclick="window.open('https://t.me/+998907883731', '_blank');">
            <i class="fa-solid fa-check fa-2x"></i>
                &nbsp;Bron qilish
            </div>
        </div>
        <br>
    </div>
    `;




  const back_btn = document.getElementById('back_btn');
  back_btn.onclick = asosiy;
  main_content.focus();


};