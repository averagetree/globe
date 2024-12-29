import type { Components, JSX } from "../types/components";

interface RuxIconPool extends Components.RuxIconPool, HTMLElement {}
export const RuxIconPool: {
  prototype: RuxIconPool;
  new (): RuxIconPool;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
