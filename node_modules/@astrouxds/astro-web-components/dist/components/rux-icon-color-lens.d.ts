import type { Components, JSX } from "../types/components";

interface RuxIconColorLens extends Components.RuxIconColorLens, HTMLElement {}
export const RuxIconColorLens: {
  prototype: RuxIconColorLens;
  new (): RuxIconColorLens;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
