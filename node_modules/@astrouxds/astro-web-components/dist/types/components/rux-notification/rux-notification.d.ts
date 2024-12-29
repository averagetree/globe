import { EventEmitter } from '../../stencil-public-runtime';
import { Status } from '../../common/commonTypes.module';
/**
 * @part icon - the notification's close icon
 * @part message - the notification's message
 * @part status - the notification's status symbol
 * @part container - the notification's container element
 *
 * @slot prefix - an optional left side content area
 * @slot (default) - the notification's message
 * @slot actions - used for display actions like close icons or buttons
 */
export declare class RuxNotification {
  el: HTMLRuxNotificationElement;
  hasPrefixSlot: boolean;
  hasMessageSlot: boolean;
  /**
   *  Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided).
   */
  open: boolean;
  /**
   *  Message for the notification banner.
   */
  message: string;
  /**
   *  The background color. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/).
   */
  status?: Status;
  /**
   *  If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it.
   */
  closeAfter?: number;
  /**
   * Changes the size of the banner to a small variant.
   */
  small: boolean;
  /**
   * Prevents the user from dismissing the notification. Hides the `actions` slot.
   */
  hideClose: boolean;
  /**
   * Fires when the notification banner is closed
   */
  ruxClosed: EventEmitter<boolean>;
  private _timeoutRef;
  watchHandler(): void;
  connectedCallback(): void;
  private _updated;
  private _onClick;
  private _onKeyPress;
  get _closeAfter(): number | undefined;
  private _handleSlotChange;
  render(): any;
}
