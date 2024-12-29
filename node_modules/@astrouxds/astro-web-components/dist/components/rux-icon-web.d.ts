import type { Components, JSX } from "../types/components";

interface RuxIconWeb extends Components.RuxIconWeb, HTMLElement {}
export const RuxIconWeb: {
  prototype: RuxIconWeb;
  new (): RuxIconWeb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
