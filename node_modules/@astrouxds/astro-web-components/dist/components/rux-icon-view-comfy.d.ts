import type { Components, JSX } from "../types/components";

interface RuxIconViewComfy extends Components.RuxIconViewComfy, HTMLElement {}
export const RuxIconViewComfy: {
  prototype: RuxIconViewComfy;
  new (): RuxIconViewComfy;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
