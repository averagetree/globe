import type { Components, JSX } from "../types/components";

interface RuxTableHeader extends Components.RuxTableHeader, HTMLElement {}
export const RuxTableHeader: {
  prototype: RuxTableHeader;
  new (): RuxTableHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
