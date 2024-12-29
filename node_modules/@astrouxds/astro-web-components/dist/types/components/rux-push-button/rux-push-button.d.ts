import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @part container - the label of rux-push-button
 * @part icon - the optional rux-icon

 */
export declare class RuxPushButton {
  private pushButtonId;
  /**
   * For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
   * Displays an Astro icon matching this string. For a [full list of available icons,
   * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
   */
  icon?: string;
  /**
   * Hides slotted text from the button by setting rux-button--icon-only class
   */
  iconOnly: boolean;
  /**
   * Disables the push button via HTML `disabled` attribute.
   * Button takes on a distinct disabled visual state.
   * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * Checks the push button via HTML `checked` attribute.
   * Push button takes on a distinct "enabled" or "selected" visual state.
   */
  checked: boolean;
  /**
   * The label of the push button.
   */
  label: string;
  /**
   * The name of the push button.
   */
  name: string;
  /**
   * The value of the push button.
   */
  value: string;
  /**
   * Changes size of a push button from medium to small or large by setting sizing classes
   * rux-button--small
   * rux-button--large
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Fired when an alteration to the input's value is committed by the user and emits the value on the event.detail - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxChange: EventEmitter;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  componentWillLoad(): void;
  el: HTMLRuxPushButtonElement;
  private _onChange;
  private _onBlur;
  render(): any;
}
