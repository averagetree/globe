import { Status } from '../../common/commonTypes.module';
export interface RangeItem {
  threshold: number;
  status: Status;
}
/**
 * @part container - The component's container element
 * @part radial-progress - The "donut"-style progress meter
 * @part icon-group - A wrapper element containing the status icon, radial progress, and notification elements.
 * @part status-icon - The component's status symbol
 * @part progress-display - The component's progress value
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 */
export declare class RuxMonitoringProgressIcon {
  private _circumference;
  private _defaultRangeList;
  /**
   * Displays a label below the icon
   */
  label?: string;
  /**
   * Displays a smaller label underneath the icon label
   */
  sublabel?: string;
  /**
   * Items in this Array define thresholds for changing the status style of the progress icon.
   * For each item in the Array, the icon will be styled with the given status while the progress value
   * is less than or equal to the Array item’s threshold and greater than the next smallest item‘s threshold.
   * Both progress and the Array items’ threshold values can be positive or negative.
   * If no min is specified, the component assumes the Array's first status threshold begins at 0.
   */
  range: Array<RangeItem>;
  /**
   * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
   * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'`
   * for millions, `'1.5B'` for billions, and `'∞'` for one trillion or higher.
   */
  notifications?: number;
  /**
   * Sets the minimum value for the progress range. When progress is this number, it reads 0%.
   * When it is halfway between min and max, it will read 50%.
   */
  min: number;
  /**
   * Sets the maximum value for the progress range. When progress is this number, it reads 100%.
   * When it is halfway between min and max, it will read 50%.
   */
  max: number;
  /**
   * Displays this value as a percentage of where it lies between min and max
   * in the center of the donut graph and styles a proportional
   * segment of the graph. Progress can be positive or negative (the later useful for countdowns).
   * The progress value must exist within the thresholds specified in the range property below, and must be
   * an integer. If a non-integer value is passed in, progress will default to 0. If progress ever
   * becomes less than min or greater than max, it will be set to equal min or max respectively.
   */
  progress: number;
  checkProgress(newValue: number, oldValue: number): void;
  checkRange(newValue: Array<RangeItem>, oldValue: Array<RangeItem>): void;
  _status: Status;
  _graphProgress: number;
  componentWillLoad(): void;
  get status(): string;
  private _updateProgress;
  render(): any;
}
