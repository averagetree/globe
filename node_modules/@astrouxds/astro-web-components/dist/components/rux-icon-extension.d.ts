import type { Components, JSX } from "../types/components";

interface RuxIconExtension extends Components.RuxIconExtension, HTMLElement {}
export const RuxIconExtension: {
  prototype: RuxIconExtension;
  new (): RuxIconExtension;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
