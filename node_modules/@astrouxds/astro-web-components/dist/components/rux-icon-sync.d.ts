import type { Components, JSX } from "../types/components";

interface RuxIconSync extends Components.RuxIconSync, HTMLElement {}
export const RuxIconSync: {
  prototype: RuxIconSync;
  new (): RuxIconSync;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
