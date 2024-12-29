import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot label - The switch label
 * @part switch - the track (::before) and the button (::after) on rux-switch
 * @part label - the label of switch
 */
export declare class RuxSwitch {
  private switchId;
  el: HTMLRuxSwitchElement;
  hasLabelSlot: boolean;
  /**
   * The switch name
   */
  name: string;
  /**
   * The switch value
   */
  value: string;
  /**
   * Toggles checked state of a switch
   */
  checked: boolean;
  /**
   * Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * The switch label. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxChange: EventEmitter;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxInput: EventEmitter;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  handleLabelChange(): void;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  get hasLabel(): boolean;
  private _handleSlotChange;
  private _onChange;
  private _onInput;
  private _onBlur;
  render(): any;
}
