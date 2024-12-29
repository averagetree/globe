import type { Components, JSX } from "../types/components";

interface RuxIconMouse extends Components.RuxIconMouse, HTMLElement {}
export const RuxIconMouse: {
  prototype: RuxIconMouse;
  new (): RuxIconMouse;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
