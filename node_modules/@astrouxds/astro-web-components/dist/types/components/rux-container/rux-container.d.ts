/**
 * @slot (default) - The container's content
 * @slot header - The container's header
 * @slot tab-bar - The container's tab bar
 * @slot toolbar - The container's toolbar
 * @slot footer - The container's footer
 * @part container - The container's outermost element
 * @part header - The container's outside header element
 * @part tab-bar - The container's outside tab bar element
 * @part toolbar - The container's outside toolbar element
 * @part body - The container's outside body element
 * @part footer - The container's outside footer element
 *
 */
export declare class RuxContainer {
  el: HTMLRuxContainerElement;
  activeSlots: {
    header: boolean;
    'tab-bar': boolean;
    toolbar: boolean;
    footer: boolean;
  };
  connectedCallback(): void;
  private _handleSlotChange;
  render(): any;
}
