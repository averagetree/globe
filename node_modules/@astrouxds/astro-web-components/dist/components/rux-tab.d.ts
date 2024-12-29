import type { Components, JSX } from "../types/components";

interface RuxTab extends Components.RuxTab, HTMLElement {}
export const RuxTab: {
  prototype: RuxTab;
  new (): RuxTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
