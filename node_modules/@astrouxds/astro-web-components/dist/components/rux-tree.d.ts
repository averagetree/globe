import type { Components, JSX } from "../types/components";

interface RuxTree extends Components.RuxTree, HTMLElement {}
export const RuxTree: {
  prototype: RuxTree;
  new (): RuxTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
