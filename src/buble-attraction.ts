import {gsap} from "gsap";

export class HoverDiv {

  el: HTMLDivElement;
  hover: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number

  constructor(el:HTMLDivElement, z: number) {
    this.el = el;
    this.hover = false;
    this.zIndex = z;
    this.calculatePosition(el);
    this.attachEventsListener();
  }
  
  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }
  
  calculatePosition(e) {
    gsap.set(this.el, {
      x: 0,
      y: 0,
      scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
  }
  
  onMouseMove(e) {
    let hover = false;
    const hoverArea = (this.hover ? 1 : 0.7);
    const x = e.clientX - this.x;
    const y = e.clientY - this.y;
    const distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }
    
    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }
  
  onHover(x, y) {
    gsap.to(this.el,  {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1,
      ease: 'power2.out',
      duration: 0.4
    });
    this.el.style.zIndex = this.zIndex.toString();
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'power2.out',
      duration: 0.7
    });
    this.el.style.zIndex = this.zIndex.toString();
  }
}


