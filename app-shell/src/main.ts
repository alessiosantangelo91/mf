import mitt, { Emitter } from 'mitt'

declare global {
  interface Window { eventBus: Emitter<any>; }
}

window.eventBus = mitt();

