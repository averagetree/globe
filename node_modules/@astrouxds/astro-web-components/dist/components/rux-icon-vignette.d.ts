import type { Components, JSX } from "../types/components";

interface RuxIconVignette extends Components.RuxIconVignette, HTMLElement {}
export const RuxIconVignette: {
  prototype: RuxIconVignette;
  new (): RuxIconVignette;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
