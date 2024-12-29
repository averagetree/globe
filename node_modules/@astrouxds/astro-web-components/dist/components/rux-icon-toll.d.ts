import type { Components, JSX } from "../types/components";

interface RuxIconToll extends Components.RuxIconToll, HTMLElement {}
export const RuxIconToll: {
  prototype: RuxIconToll;
  new (): RuxIconToll;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
