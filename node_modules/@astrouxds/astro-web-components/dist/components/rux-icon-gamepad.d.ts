import type { Components, JSX } from "../types/components";

interface RuxIconGamepad extends Components.RuxIconGamepad, HTMLElement {}
export const RuxIconGamepad: {
  prototype: RuxIconGamepad;
  new (): RuxIconGamepad;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
