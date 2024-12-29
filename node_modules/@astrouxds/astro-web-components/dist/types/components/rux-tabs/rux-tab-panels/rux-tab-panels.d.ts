import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @slot (default) - Used for instances of rux-tab-panel
 */
export declare class RuxTabPanels {
  el: HTMLRuxTabPanelsElement;
  connectedCallback(): void;
  private _getSlottedChildren;
  /**
   * Emits a list of the Tab Panels on the event.detail which have been passed in
   */
  ruxRegisterPanels: EventEmitter<HTMLRuxTabPanelsElement[]>;
  private _registerTabPanels;
  render(): any;
}
