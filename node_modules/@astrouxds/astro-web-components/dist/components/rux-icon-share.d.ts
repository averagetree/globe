import type { Components, JSX } from "../types/components";

interface RuxIconShare extends Components.RuxIconShare, HTMLElement {}
export const RuxIconShare: {
  prototype: RuxIconShare;
  new (): RuxIconShare;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
