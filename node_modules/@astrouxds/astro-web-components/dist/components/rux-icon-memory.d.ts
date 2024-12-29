import type { Components, JSX } from "../types/components";

interface RuxIconMemory extends Components.RuxIconMemory, HTMLElement {}
export const RuxIconMemory: {
  prototype: RuxIconMemory;
  new (): RuxIconMemory;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
