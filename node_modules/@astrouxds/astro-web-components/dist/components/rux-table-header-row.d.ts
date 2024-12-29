import type { Components, JSX } from "../types/components";

interface RuxTableHeaderRow extends Components.RuxTableHeaderRow, HTMLElement {}
export const RuxTableHeaderRow: {
  prototype: RuxTableHeaderRow;
  new (): RuxTableHeaderRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
