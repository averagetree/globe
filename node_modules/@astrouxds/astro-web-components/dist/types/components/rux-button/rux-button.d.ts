/**
 * @part container - the components native button element.
 * @part icon - the optional rux-icon
 */
export declare class RuxButton {
  el: HTMLRuxButtonElement;
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
   * Changes button style from solid to secondary by setting the rux-button--secondary class
   */
  secondary: boolean;
  /**
   * Toggles disabled attribute on the button
   */
  disabled: boolean;
  /**
   * Changes button style from solid to borderless by setting the rux-button--borderless class
   */
  borderless: boolean;
  /**
   * Changes size of a button from medium to small or large by setting sizing classes
   * rux-button--small
   * rux-button--large
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The button type. Use 'submit' to submit native form data.
   */
  type: 'submit' | 'button';
  /**
   * Creates and appends a native <button> if used within a form
   * so that it can trigger the submit event.
   *
   * Shadow DOM limitation prevents <form> from working correctly.
   * https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/button/button.tsx
   * @param ev
   */
  private handleClick;
  render(): any;
}
