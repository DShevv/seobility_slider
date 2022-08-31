import amc from "./assets/mockup-amcodor.png"
import shop from "./assets/mockup-shop.png"


export default [
  {
    color: "#8DBDBA",
    picture: amc,
    title: "Создание корпоративного сайта для холдинга «АМКОДОР»",
    subtitle: "Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” для развития дилерской сети на рынках Беларуси и стран СНГ.",
    dir: "WEB-разработка",
    type: "Карпоративный сайт",
    industry: "Производство, Торговля",
    bublesInfo: [
      {
        top: -12.5,
        left: 14,
        width: 282.76,
        height: 282.76,
        z: 6,
      },
      {
        top: 56,
        left: 80.6,
        width: 330.66,
        height: 330.66,
        z:0
      },
      {
        top: 60,
        left: -5,
        width: 222.85,
        height: 222.85,
        z:0
      },
    ],
    bubleBack: `background: linear-gradient( rgba(225, 255, 244, 0.3) 1.1%, rgba(20, 54, 41, 0) 108.32%), radial-gradient(32.42% 32.42% at 46.83% 18.92%, rgba(255, 255, 255, 0.147) 0%, rgba(100, 117, 110, 0) 100%), linear-gradient( rgba(68, 104, 90, 0.65), rgba(68, 104, 90, 0.65));
                background-blend-mode: normal, normal, normal, multiply;
                box-shadow: 8px 24px 60px rgba(21, 53, 30, 0.1), inset 2.29395px 2.29395px 2.29395px rgba(73, 100, 87, 0.05);
                backdrop-filter: blur(20px);`
  },
  {
    color: "#8675BA",
    picture: shop,
    title: "Создание маркетплейса для бизнеса по перепродаже одежды",
    subtitle: "Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.",
    dir: "WEB-разработка",
    type: "Интернет-магазин",
    industry: "Торговля",
    bublesInfo: [
       {
        top: -12.5,
        left: 14,
        width: 282.76,
        height: 282.76,
        z: 0,
      },
      {
        top: 56,
        left: 80.6,
        width: 330.66,
        height: 330.66,
        z:7
      },
      {
        top: 60,
        left: -5,
        width: 222.85,
        height: 222.85,
        z:7
      },
    ],
    bubleBack: `background: linear-gradient(rgba(165, 185, 255, 0.24) 1.1%, rgba(119, 124, 138, 0) 108.32%), radial-gradient(32.42% 32.42% at 46.83% 18.92%, rgba(255, 255, 255, 0.147) 0%, rgba(62, 75, 119, 0) 100%), linear-gradient(rgba(141, 104, 177, 0.4), rgba(141, 104, 177, 0.4));
                background-blend-mode: normal, normal, normal, multiply;
                box-shadow: 29px 54px 56px rgba(36, 52, 102, 0.25), inset 2.29395px 2.29395px 2.29395px rgba(84, 101, 157, 0.1);
                backdrop-filter: blur(20px);`
  },
]