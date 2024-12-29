import type { Components, JSX } from "../types/components";

interface RuxIconIso extends Components.RuxIconIso, HTMLElement {}
export const RuxIconIso: {
  prototype: RuxIconIso;
  new (): RuxIconIso;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
