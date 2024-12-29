import type { Components, JSX } from "../types/components";

interface RuxTreeNode extends Components.RuxTreeNode, HTMLElement {}
export const RuxTreeNode: {
  prototype: RuxTreeNode;
  new (): RuxTreeNode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
