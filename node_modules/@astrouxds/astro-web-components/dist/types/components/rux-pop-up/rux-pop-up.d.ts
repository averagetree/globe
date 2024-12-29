import { EventEmitter } from '../../stencil-public-runtime';
import { ExtendedPlacement } from '../../common/commonTypes.module';
/**
 * @slot (default) - The contents for rux-pop-up
 * @slot trigger - The trigger element for rux-pop-up
 *
 * @part container - the container of rux-pop-up
 * @part trigger-container - the container of the pop-up trigger
 * @part popup-content - the content that is shown when rux-pop-up is opened
 * @part arrow - the arrow pointing to the trigger of rux-pop-up
 */
export declare class RuxPopUp {
  private trigger;
  private content;
  private arrowEl;
  private _positionerCleanup;
  private _assignedOutsideClickEvent;
  el: HTMLRuxPopUpElement;
  /**
   * Determines if the pop up is open or closed
   */
  open: boolean;
  /**
   * The placement of the pop up relative to it's slotted trigger element. Defaults to auto.
   */
  placement: ExtendedPlacement;
  /**
   * Turns autoUpdate on or off which makes the pop-up move to stay in view based on scroll. Defaults to false.
   */
  disableAutoUpdate: boolean;
  /**
   * watches for trigger movements and replace the popup if movement is detected.
   */
  enableAnimationFrame: boolean;
  /**
   * The position strategy of the popup, either absolute or fixed.
   */
  strategy: 'absolute' | 'fixed';
  /**
   * When provided, will close the pop-up when a single selection is made.
   */
  closeOnSelect: boolean;
  arrowPosition?: string;
  /**
   * Emits when the pop up has opened
   */
  ruxPopUpOpened: EventEmitter;
  /**
   * Emits when the pop up has closed.
   */
  ruxPopUpClosed: EventEmitter;
  handleOpen(): void;
  /**
   * Opens the pop up and returns true.
   */
  show(): Promise<true>;
  /**
   * Closes the pop up and returns false.
   */
  hide(): Promise<false>;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  private _handleTriggerClick;
  private _handleTriggerKeyPress;
  private _position;
  private _setTriggerTabIndex;
  private _startPositioner;
  private _setArrowPosition;
  private _determineArrowPosition;
  private getTriggerRect;
  private getArrowRect;
  private _stopPositioner;
  private _handleOutsideClick;
  handleSelection(): void;
  get contentSlot(): Element;
  get triggerSlot(): Element;
  get hasMenu(): boolean;
  render(): any;
}
