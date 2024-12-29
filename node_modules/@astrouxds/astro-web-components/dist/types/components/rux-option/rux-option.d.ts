import { EventEmitter } from '../../stencil-public-runtime';
/**
 * This component should be used exclusively with RuxSelect.
 * It's main function is to broadcast to RuxSelect when the value property changes.
 * RuxSelect can only listen for slot change, which won't fire in the scenario where there
 * might be 2 options and only their values change. Because the nodes themselves aren't added or removed,
 * onSlotchange doesn't fire.
 */
export declare class RuxOption {
  el: HTMLRuxOptionElement;
  /**
   * The option value
   */
  value: string;
  /** The option label */
  label: string;
  /** Sets the option as disabled */
  disabled: boolean;
  /** @internal **/
  optionChanged: EventEmitter<void>;
  handleValueChange(): void;
  connectedCallback(): void;
  private _handleSlotChange;
  render(): any;
}
