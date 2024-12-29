import type { Components, JSX } from "../types/components";

interface RuxIconOpacity extends Components.RuxIconOpacity, HTMLElement {}
export const RuxIconOpacity: {
  prototype: RuxIconOpacity;
  new (): RuxIconOpacity;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
