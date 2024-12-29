import type { Components, JSX } from "../types/components";

interface RuxIconAssignment extends Components.RuxIconAssignment, HTMLElement {}
export const RuxIconAssignment: {
  prototype: RuxIconAssignment;
  new (): RuxIconAssignment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
