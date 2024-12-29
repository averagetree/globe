import type { Components, JSX } from "../types/components";

interface RuxIconViewColumn extends Components.RuxIconViewColumn, HTMLElement {}
export const RuxIconViewColumn: {
  prototype: RuxIconViewColumn;
  new (): RuxIconViewColumn;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
