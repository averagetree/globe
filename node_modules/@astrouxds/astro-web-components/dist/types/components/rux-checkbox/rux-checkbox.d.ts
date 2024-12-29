import { EventEmitter } from '../../stencil-public-runtime';
import { FormFieldInterface } from '../../common/interfaces.module';
/**
 * @slot (default) - the label of the checkbox.
 * @slot help-text -  the help text
 * @part form-field - the form field wrapper container
 * @part help-text - the help text element
 * @part label - the label of rux-checkbox
 */
export declare class RuxCheckbox implements FormFieldInterface {
  private checkboxId;
  private _inputEl?;
  el: HTMLRuxCheckboxElement;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  isFocused: boolean;
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The checkbox name
   */
  name: string;
  /**
   * The checkbox value
   */
  value: string;
  /**
   * The checkbox label text. For HTML content, use the default slot instead.
   */
  label?: string;
  /**
   * Toggles checked state of a checkbox
   */
  checked: boolean;
  updateChecked(): void;
  /**
   * Toggles indeterminate state of a checkbox. The indeterminate property does not exist in HTML, but can be set in JS. [HTML Checkbox & Indeterminate State](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate)
   */
  indeterminate: boolean;
  updateIndeterminate(): void;
  /**
   * Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxChange: EventEmitter;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxInput: EventEmitter;
  /**
   * Fired when an element has gained focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
   */
  ruxFocus: EventEmitter;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  get hasLabel(): boolean;
  private _handleSlotChange;
  private _onClick;
  private _onInput;
  private _onBlur;
  private _onFocus;
  render(): any;
}
