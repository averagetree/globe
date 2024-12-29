import type { Components, JSX } from "../types/components";

interface RuxIconTab extends Components.RuxIconTab, HTMLElement {}
export const RuxIconTab: {
  prototype: RuxIconTab;
  new (): RuxIconTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
