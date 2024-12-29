import type { Components, JSX } from "../types/components";

interface RuxTableBody extends Components.RuxTableBody, HTMLElement {}
export const RuxTableBody: {
  prototype: RuxTableBody;
  new (): RuxTableBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
