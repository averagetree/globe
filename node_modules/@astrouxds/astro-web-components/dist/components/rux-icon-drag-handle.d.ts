import type { Components, JSX } from "../types/components";

interface RuxIconDragHandle extends Components.RuxIconDragHandle, HTMLElement {}
export const RuxIconDragHandle: {
  prototype: RuxIconDragHandle;
  new (): RuxIconDragHandle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
