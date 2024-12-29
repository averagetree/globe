import type { Components, JSX } from "../types/components";

interface RuxRuler extends Components.RuxRuler, HTMLElement {}
export const RuxRuler: {
  prototype: RuxRuler;
  new (): RuxRuler;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
