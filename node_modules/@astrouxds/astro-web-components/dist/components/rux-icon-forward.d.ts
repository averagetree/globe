import type { Components, JSX } from "../types/components";

interface RuxIconForward extends Components.RuxIconForward, HTMLElement {}
export const RuxIconForward: {
  prototype: RuxIconForward;
  new (): RuxIconForward;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
