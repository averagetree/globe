import { EventEmitter } from '../../../stencil-public-runtime';
import { Status } from '../../../common/commonTypes.module';
/**
 * @slot (default) - The content of the Time Region
 * @part container - The component's container
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 * @part timestamp - The time region's timestamp
 */
export declare class RuxTimeRegion {
  el: HTMLRuxTimeRegionElement;
  /**
   * The start date. Must be an ISO string "2021-02-02T05:00:00Z".
   */
  start: string;
  /**
   * The end date. Must be an ISO string "2021-02-02T05:00:00Z"
   */
  end: string;
  /**
   * Optionally hide the bottom right timestamp.
   */
  hideTimestamp: boolean;
  /**
   * Short hand attribute for displaying a Status icon and appropriate border color.
   */
  status?: Status;
  /**
   * Visually indicates a partial time regions. Partial time regions are time regions that start or end outside of the current range of the timeline.
   */
  partial: 'none' | 'start' | 'end' | 'ongoing';
  /**
   * Visually displays the selected state
   */
  selected: boolean;
  /**
   * @internal - The Time Regions's time zone. Set automatically from the parent Track component.
   */
  timezone: string;
  /**
   * @internal - Emitted on the event.detail when the start or end date changes so that it's parent Track can update the Time Region's position.
   */
  ruxTimeRegionChange: EventEmitter;
  handleTimeUpdate(): void;
  get formattedTime(): string | false;
  render(): any;
}
