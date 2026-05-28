/// <reference types="vite/client" />

// Uppercase extension variants (Windows assets)
declare module "*.PNG" {
  const src: string;
  export default src;
}
declare module "*.MOV" {
  const src: string;
  export default src;
}
