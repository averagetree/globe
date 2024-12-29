import type { Components, JSX } from "../types/components";

interface RuxIconEject extends Components.RuxIconEject, HTMLElement {}
export const RuxIconEject: {
  prototype: RuxIconEject;
  new (): RuxIconEject;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
