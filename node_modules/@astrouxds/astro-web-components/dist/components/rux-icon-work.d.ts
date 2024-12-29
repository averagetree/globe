import type { Components, JSX } from "../types/components";

interface RuxIconWork extends Components.RuxIconWork, HTMLElement {}
export const RuxIconWork: {
  prototype: RuxIconWork;
  new (): RuxIconWork;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
