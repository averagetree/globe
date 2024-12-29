import type { Components, JSX } from "../types/components";

interface RuxIconGroup extends Components.RuxIconGroup, HTMLElement {}
export const RuxIconGroup: {
  prototype: RuxIconGroup;
  new (): RuxIconGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
