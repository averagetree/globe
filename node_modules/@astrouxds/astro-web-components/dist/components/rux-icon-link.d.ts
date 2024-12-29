import type { Components, JSX } from "../types/components";

interface RuxIconLink extends Components.RuxIconLink, HTMLElement {}
export const RuxIconLink: {
  prototype: RuxIconLink;
  new (): RuxIconLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
