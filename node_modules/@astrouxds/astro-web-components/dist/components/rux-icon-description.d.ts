import type { Components, JSX } from "../types/components";

interface RuxIconDescription extends Components.RuxIconDescription, HTMLElement {}
export const RuxIconDescription: {
  prototype: RuxIconDescription;
  new (): RuxIconDescription;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
