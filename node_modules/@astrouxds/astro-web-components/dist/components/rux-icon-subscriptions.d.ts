import type { Components, JSX } from "../types/components";

interface RuxIconSubscriptions extends Components.RuxIconSubscriptions, HTMLElement {}
export const RuxIconSubscriptions: {
  prototype: RuxIconSubscriptions;
  new (): RuxIconSubscriptions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
