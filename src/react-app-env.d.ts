// / <reference types="react-scripts" />

declare module '*.module.less' {
  const css: { readonly [key: string]: string };

  export default css;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
