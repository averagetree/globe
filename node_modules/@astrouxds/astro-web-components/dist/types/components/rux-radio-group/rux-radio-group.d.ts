import { EventEmitter } from '../../stencil-public-runtime';
import { FormFieldInterface } from '../../common/interfaces.module';
/**
 * @slot label - The radio group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part radiogroup - The container of radios
 * @part required - The asterisk when required is true
 */
export declare class RuxRadioGroup implements FormFieldInterface {
  el: HTMLRuxRadioGroupElement;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  hasErrorSlot: boolean;
  /**
   * The label of the radio group. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * Presentational only. Renders the Radio Group as invalid.
   */
  invalid: boolean;
  /**
   * Marks that a selection from the radio-group is requried.
   */
  required: boolean;
  /**
   * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
   */
  name: string;
  /**
   * The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI.
   */
  value?: any | null;
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxChange: EventEmitter<any>;
  emitChange(value: any): void;
  handleLabelChange(): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  get hasLabel(): boolean;
  private _handleClick;
  private _selectedRadioIsDisabled;
  private _handleSlotChange;
  private _getRadios;
  private _setRadioValueIfNone;
  private _setRadioTabindex;
  onKeydown(ev: any): void;
  render(): any;
}
