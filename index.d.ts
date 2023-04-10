// index.d.ts
declare module '*.jpg';
declare module '*.jpeg';
declare module 'application';
export {};

declare global {
  interface Window {
    application: {
      renderLevel: (level: string) => void;
      levels: {
        [key: string]: () => void;
      };
      time: {
        sec: number | string;
        min: number | string;
      };
    };
  }
}
