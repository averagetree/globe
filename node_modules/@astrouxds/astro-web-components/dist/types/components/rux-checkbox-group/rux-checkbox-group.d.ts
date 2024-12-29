/**
 * @slot (default) - The checkbox elements
 * @slot label - The checkbox group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part container - The container div of checkbox elements
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 */
export declare class RuxCheckboxGroup {
  el: HTMLRuxCheckboxGroupElement;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  hasErrorSlot: boolean;
  /**
   * The label of the checkbox group. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * Presentational only. Renders the Checkbox Group as invalid.
   */
  invalid: boolean;
  /**
   * Marks that a selection from the checkbox group is requried.
   */
  required: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  get hasLabel(): boolean;
  private _handleSlotChange;
  render(): any;
}
