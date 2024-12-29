import type { Components, JSX } from "../types/components";

interface RuxRadio extends Components.RuxRadio, HTMLElement {}
export const RuxRadio: {
  prototype: RuxRadio;
  new (): RuxRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
