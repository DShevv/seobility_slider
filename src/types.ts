export class Slide {
  bubles : HTMLDivElement[];
  pictureUrl: string; 
  title: string;
  subTitle: string;
  dir: string;
  type: string;
  industry: string;
  translate: string
}

export class BubleInfo {
  top: number;
  left: number;
  width: number;
  height: number;
  z: number
}

export class Data {
    color: string;
    picture: string;
    title: string;
    subtitle: string;
    dir: string;
    type: string;
    industry: string;
    bublesInfo: BubleInfo[];
    bubleBack: string;
  }