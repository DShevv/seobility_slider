import { Slide, Data, BubleInfo } from './types';
import data from './data.ts';
import './styles/style.sass';


const body = document.body;
const SlidesCont:HTMLDivElement = document.querySelector(".slides"); 

const slides:Slide[] = [];
const slidesElements: HTMLDivElement[] = createSlides(data);


appendSlides(slidesElements);



function createSlides(data:Data[]):HTMLDivElement[] {
 
  const res:HTMLDivElement[] = []

  data.forEach((elem, index) => {
    const slide:Slide = {
      bubles: createBubles(elem.bublesInfo,elem.bubleBack, index),
      pictureUrl: elem.picture,
      title: elem.title,
      subTitle: elem.subtitle,
      dir: elem.dir,
      type: elem.type,
      industry: elem.industry,
      translate: `${index * 100}% - ${index * 100}vw`
    };
    
    
    slides.push(slide);
    const slideElem = document.createElement("div");
    slideElem.classList.add("slide");
    

    const slidePic = document.createElement("div");
    slidePic.classList.add("slide-mockup");
    slidePic.style.backgroundImage = `url(${slide.pictureUrl})`;
    slideElem.appendChild(slidePic);

    const slideCaption = document.createElement("div");
    slideCaption.classList.add("slide__caption");
    slideElem.appendChild(slideCaption);

    const slideTitle = document.createElement("h2");
    slideTitle.classList.add("slide-title");
    slideTitle.textContent = slide.title;
    slideCaption.appendChild(slideTitle);

    const slideSubTitle = document.createElement("h3");
    slideSubTitle.classList.add("slide-subtitle");
    slideSubTitle.textContent = slide.subTitle;
    slideCaption.appendChild(slideSubTitle);

    const slidePag = document.createElement("div");
    slidePag.classList.add("slide__pagination");
    slideCaption.appendChild(slidePag);

    const buttonL = document.createElement("button");
    buttonL.classList.add("slide__pagination-button", "left");
    slidePag.appendChild(buttonL);

    const buttonR = document.createElement("button");
    buttonR.classList.add("slide__pagination-button", "right");
    slidePag.appendChild(buttonR);

    const slideAbout = document.createElement("div");
    slideAbout.classList.add("slide__about");
    slideCaption.appendChild(slideAbout);

    const slideItemDir = document.createElement("div");
    slideItemDir.classList.add("slide__about__item");
    slideAbout.appendChild(slideItemDir);

    const itemtDirTitle = document.createElement("div");
    itemtDirTitle.classList.add("slide__about__item-title");
    itemtDirTitle.textContent = "Направление";
    slideItemDir.appendChild(itemtDirTitle);

    const itemDir = document.createElement("div");
    itemDir.classList.add("slide__about__item-caption");
    itemDir.textContent = slide.type;
    slideItemDir.appendChild(itemDir);

    const slideItemType = document.createElement("div");
    slideItemType.classList.add("slide__about__item");
    slideAbout.appendChild(slideItemType);

    const itemtTypeTitle = document.createElement("div");
    itemtTypeTitle.classList.add("slide__about__item-title");
    itemtTypeTitle.textContent = "Тип проекта";
    slideItemType.appendChild(itemtTypeTitle);

    const itemType = document.createElement("div");
    itemType.classList.add("slide__about__item-caption");
    itemType.textContent = slide.type;
    slideItemType.appendChild(itemType);

    const slideItemInd = document.createElement("div");
    slideItemInd.classList.add("slide__about__item");
    slideAbout.appendChild(slideItemInd);

    const itemtIndTitle = document.createElement("div");
    itemtIndTitle.classList.add("slide__about__item-title");
    itemtIndTitle.textContent = "Отрасль";
    slideItemInd.appendChild(itemtIndTitle);

    const itemInd = document.createElement("div");
    itemInd.classList.add("slide__about__item-caption");
    itemInd.textContent = slide.industry;
    slideItemInd.appendChild(itemInd);

    res.push(slideElem);
  });


  return res;
}


function appendSlides(items:HTMLDivElement[]):void {
  items.forEach(elem => {
    SlidesCont.appendChild(elem);
  })
}

function createBubles(bubles:BubleInfo[], background:string, translate: number):HTMLDivElement[] {
  const res:HTMLDivElement[] = [];

  const container = document.querySelector(".slide__bubbles");
  
  bubles.forEach(elem => {
    const buble = document.createElement("div");
    buble.classList.add("slide__bubbles-item");
    buble.style.cssText = background;
    buble.style.top = `${elem.top}vh`;
    buble.style.left = `calc(${100 * translate + elem.left}% + ${100 * translate}vw)`;
    buble.style.width = `${elem.width}px`;
    buble.style.height = `${elem.height}px`;
    buble.style.zIndex = elem.z.toString();


    container.appendChild(buble);
    res.push(buble);
  });

  return res;
}



