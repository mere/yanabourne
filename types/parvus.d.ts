declare module 'parvus' {
  export default class Parvus {
    constructor(options?: { selector?: string; zoomIndicator?: boolean });
    destroy(): void;
  }
}