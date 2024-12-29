/**
 * @part progress - the native progress element
 * @part output - the native output element
 */
export declare class RuxProgress {
  /**
   * Current progress value between 0 and 100 (or the max, if defined below).
   */
  value?: number;
  /**
   * For progress bars where progress bars have a maximum value greater or less than 100
   */
  max: number;
  /**
   * Hides the progress label
   */
  hideLabel: boolean;
  connectedCallback(): void;
  watchHandler(): void;
  private _getProgressAsString;
  private _checkValueNotOverMax;
  render(): any;
}
