import type { Components, JSX } from "../types/components";

interface RuxPopUp extends Components.RuxPopUp, HTMLElement {}
export const RuxPopUp: {
  prototype: RuxPopUp;
  new (): RuxPopUp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
