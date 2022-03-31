let hamburgerMenu = document.querySelector(".hamburger_menu");
let menu = document.querySelector(".nav_right-box");
let open = false;
let componentsLink = document.querySelectorAll(".for_close_menu");
componentsLink.forEach((component) => {
  component.addEventListener("click", () => {
    open = !open;
    document.body.style.overflow = open ? "hidden" : "inherit";
    menu.classList.remove("active");
    hamburgerMenu.classList.remove("hamburger_active");
    console.log(open);
  });
});
hamburgerMenu.addEventListener("click", () => {
  open = !open;
  document.body.style.overflow = open ? "hidden" : "inherit";
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle("hamburger_active");
  console.log(open);
});
let brandsData = [
  { img: "./images/image 79.png" },
  { img: "./images/image 80.png" },
  { img: "./images/image 81.png" },
  { img: "./images/image 82.png" },
  { img: "./images/image 83.png" },
];
let brands = document.querySelector(".brands");
brandsData.map((data) => {
  brands.innerHTML += `
  <img className="brand-img" src="${data.img}" alt="img" />
  `;
});
const aboutUsData = [
  {
    title: "Who we are",
    description:
      "Als gedreven ondernemer wil je bezig zijn met bouwen aan je bedrijf. Juridischek wes ties wil je voorkomen of in ieder geval zo  goed en snel mogelijk laten afhandelen. Het liefst door een jurist die begrijpt waar je ",
    btnText: "About us",
    images: [
      { img: "./images/Rectangle 57.png" },
      { img: "./images/Rectangle 57.png" },
      { img: "./images/Rectangle 57.png" },
      { img: "./images/Rectangle 57.png" },
    ],
  },
  {
    title: "What we do",
    id: "ourwork",
    description:
      "Als gedreven ondernemer wil je bezig zijn met bouwen aan je bedrijf. Juridischek wes ties wil je voorkomen of in ieder geval zo  goed en snel mogelijk laten afhandelen. Het liefst door een jurist die begrijpt waar je",
    btnText: "Our work",
    images: [
      { img: "./images/Rectangle 59.png" },
      { img: "./images/Rectangle 59.png" },
      { img: "./images/Rectangle 59.png" },
      { img: "./images/Rectangle 59.png" },
      { img: "./images/Rectangle 59.png" },
      { img: "./images/Rectangle 59.png" },
    ],
  },
  {
    title: "Where we work",
    description:
      "Als gedreven ondernemer wil je bezig zijn met bouwen aan je bedrijf. Juridischek wes ties wil je voorkomen of in ieder geval zo  goed en snel mogelijk laten afhandelen. Het liefst door een jurist die begrijpt waar je",
    btnText: "Our offices",
    images: [
      { img: "./images/Rectangle 61.png" },
      { img: "./images/Rectangle 61.png" },
      { img: "./images/Rectangle 61.png" },
      { img: "./images/Rectangle 61.png" },
      { img: "./images/Rectangle 61.png" },
      { img: "./images/Rectangle 61.png" },
    ],
  },
];
let aboutUs = document.querySelector(".about-us");
aboutUsData.map((datas) => {
  aboutUs.innerHTML += `
  <div id="${datas.id}" class="about_us-box">
<div class="left_box-about_us">
  <div class="left_box-top">
    <h1>${datas.title}</h1>
    <p>
    ${datas.description}
    </p>
    <button>${datas.btnText}</button>
  </div>
  <div class="left_box-bottom">
    <h3>IMAGES-1/${datas.images.length}</h3>
    <div class="scroll-btn">
      <button class="prev-btn">
        <img src="./images/Vector (2).svg" alt="prev" />
      </button>
      <button class="next-btn">
        <img src="./images/Vector (2).svg" alt="next" />
      </button>
    </div>
  </div>
</div>
<div class="right_box-about_us">
  ${datas.images
    .map((data) => {
      return ` <img class="img" src="${data.img}" alt="img">`;
    })
    .join("")}
</div>
</div> 
  `;
});
let getServiceBox = document.querySelector(".get_service");
const getServiceData = [
  {
    title: "Business Law",
    img: "./images/484-two-buildings.svg",
    description:
      "Morbi porta, velit consectetur vehicula susligula urna lacinia lectus, sit amet sempermassa nibh vitae. With years of experiencedesigning and developing websites, I helpocal and international ",
  },
  {
    title: "Civil Litigation",
    img: "./images/456-handshake-deal.svg",
    description:
      "Velocity is crucial in marketing. The more campaigns we can put together, the more pages we can create, the bigger we feel, and the more touch points we have with customers. Webflow unlocks that for us and allows us to do more with less",
  },
  {
    title: "Insurance Defence",
    img: "./images/1267-medical-insurance.svg",
    description:
      "Morbi porta, velit consectetur vehicula sus ligula urna lacinia lectus, sit amet semper massa nibh vitae. With years of experience designing and developing websites, I help ocal and international ",
  },
];
getServiceData.map((data) => {
  getServiceBox.innerHTML += `
  <div class="get_service-box">
        <h1>${data.title}</h1>
        <div class="center_box-get_service">
          <img src="${data.img}" alt="img" />
          <p>
          ${data.description}  
          </p>
        </div>
        <button>Get service</button>
      </div> 
  `;
});

let news = document.querySelector(".news-boxes");
const newsData = [
  {
    img: "./images/Rectangle 59.png",
    description: "Companies implementing antimonopoly compliance are promised",
  },
  {
    img: "./images/Rectangle 73.png",
    description: "Reduce sanctions in the new draft law when brought ",
  },
  {
    img: "./images/Rectangle 74.png",
    description:
      "New draft law when brought to promisedly administrative responsibility",
  },
];
newsData.map((data) => {
  news.innerHTML += `
  <div class="news-box">
<img src="${data.img}" alt="img">
<p>${data.description}</p>
</div>
  `;
});
