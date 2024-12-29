import { EventEmitter } from '../../stencil-public-runtime';
export declare class RuxOptionGroup {
  el: HTMLRuxOptionGroupElement;
  /**
   * The option group label
   */
  label?: string;
  /** @internal **/
  groupChanged: EventEmitter<void>;
  connectedCallback(): void;
  private _handleSlotChange;
  render(): any;
}
