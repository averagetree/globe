import type { Components, JSX } from "../types/components";

interface RuxTableRow extends Components.RuxTableRow, HTMLElement {}
export const RuxTableRow: {
  prototype: RuxTableRow;
  new (): RuxTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
