/**
 * @slot (default) - The breadcrumb item content
 * @part container - the li containing the link element
 * @part link - the link element
 */
export declare class RuxBreadcrumbItem {
  el: HTMLRuxBreadcrumbItemElement;
  /**
   * The href property of the breadcrumb item link
   */
  href?: string;
  connectedCallback(): void;
  componentWillLoad(): void;
  private _handleSlotChange;
  render(): any;
}
