import type { Components, JSX } from "../types/components";

interface RuxTabs extends Components.RuxTabs, HTMLElement {}
export const RuxTabs: {
  prototype: RuxTabs;
  new (): RuxTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
