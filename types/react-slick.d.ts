declare module 'react-slick' {
  import { Component } from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    cssEase?: string;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    centerMode?: boolean;
    className?: string;
    draggable?: boolean;
    fade?: boolean;
    focusOnSelect?: boolean;
    pauseOnHover?: boolean;
    responsive?: ResponsiveSettings[];
  }

  export interface ResponsiveSettings {
    breakpoint: number;
    settings: Settings;
  }

  export default class Slider extends Component<Settings> {}
}
