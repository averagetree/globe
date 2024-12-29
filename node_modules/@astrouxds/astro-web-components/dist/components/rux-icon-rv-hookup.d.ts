import type { Components, JSX } from "../types/components";

interface RuxIconRvHookup extends Components.RuxIconRvHookup, HTMLElement {}
export const RuxIconRvHookup: {
  prototype: RuxIconRvHookup;
  new (): RuxIconRvHookup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
