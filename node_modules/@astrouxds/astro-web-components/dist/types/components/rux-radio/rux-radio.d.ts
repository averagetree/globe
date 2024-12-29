import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot (default) - The radio label
 * @part form-field - the form field of the radio
 * @part label - the label of the radio
 */
export declare class RuxRadio {
  private radioId;
  private radioGroup;
  private inputEl?;
  el: HTMLRuxRadioElement;
  hasLabelSlot: boolean;
  /**
   * The tabindex of the radio button.
   * @internal
   */
  buttonTabindex: number;
  /**
   * The radio name
   */
  name: string;
  /**
   * The radio value
   */
  value: string;
  /**
   * Toggles checked state of a radio
   */
  checked: boolean;
  /**
   * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * The radio label text. For HTML content, use the default slot instead.
   */
  label?: string;
  handleLabelChange(): void;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  /** @internal */
  setFocus(ev: any): Promise<void>;
  /** @internal */
  setButtonTabindex(value: number): Promise<void>;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private _handleSlotChange;
  /**
   * Sets checked property when the parent Radio Group value changes.
   */
  private _syncFromGroup;
  private _onChange;
  private _onBlur;
  get hasLabel(): boolean;
  render(): any;
}
