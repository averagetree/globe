/**
 * @slot (default) - the nodes of the tree.
 */
export declare class RuxTree {
  private slotContainer?;
  el: HTMLRuxTreeElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private _handleSlotChange;
  private _handleNodeSelected;
  render(): any;
}
