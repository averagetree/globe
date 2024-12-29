import type { Components, JSX } from "../types/components";

interface RuxIconDomain extends Components.RuxIconDomain, HTMLElement {}
export const RuxIconDomain: {
  prototype: RuxIconDomain;
  new (): RuxIconDomain;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
