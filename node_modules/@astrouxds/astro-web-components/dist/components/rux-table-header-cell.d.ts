import type { Components, JSX } from "../types/components";

interface RuxTableHeaderCell extends Components.RuxTableHeaderCell, HTMLElement {}
export const RuxTableHeaderCell: {
  prototype: RuxTableHeaderCell;
  new (): RuxTableHeaderCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
