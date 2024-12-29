import type { Components, JSX } from "../types/components";

interface RuxTableCell extends Components.RuxTableCell, HTMLElement {}
export const RuxTableCell: {
  prototype: RuxTableCell;
  new (): RuxTableCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
