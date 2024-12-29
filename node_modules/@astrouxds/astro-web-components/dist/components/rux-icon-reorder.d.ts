import type { Components, JSX } from "../types/components";

interface RuxIconReorder extends Components.RuxIconReorder, HTMLElement {}
export const RuxIconReorder: {
  prototype: RuxIconReorder;
  new (): RuxIconReorder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
