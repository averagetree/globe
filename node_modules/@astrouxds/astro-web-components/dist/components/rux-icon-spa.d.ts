import type { Components, JSX } from "../types/components";

interface RuxIconSpa extends Components.RuxIconSpa, HTMLElement {}
export const RuxIconSpa: {
  prototype: RuxIconSpa;
  new (): RuxIconSpa;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
