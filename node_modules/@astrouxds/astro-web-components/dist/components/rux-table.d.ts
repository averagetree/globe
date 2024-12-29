import type { Components, JSX } from "../types/components";

interface RuxTable extends Components.RuxTable, HTMLElement {}
export const RuxTable: {
  prototype: RuxTable;
  new (): RuxTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
