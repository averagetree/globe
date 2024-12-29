import { EventEmitter } from '../../stencil-public-runtime';
export declare class RuxMenu {
  el: HTMLRuxMenuElement;
  /**
   * Emits when a rux-menu-item is selected. Emits the rux-menu-item selected in the event detail.
   */
  ruxMenuSelected: EventEmitter;
  connectedCallback(): void;
  private _handleSelected;
  render(): any;
}
