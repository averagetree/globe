import type { Components, JSX } from "../types/components";

interface RuxIconDetails extends Components.RuxIconDetails, HTMLElement {}
export const RuxIconDetails: {
  prototype: RuxIconDetails;
  new (): RuxIconDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
