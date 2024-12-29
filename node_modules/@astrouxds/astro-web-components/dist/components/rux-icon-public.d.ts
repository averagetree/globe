import type { Components, JSX } from "../types/components";

interface RuxIconPublic extends Components.RuxIconPublic, HTMLElement {}
export const RuxIconPublic: {
  prototype: RuxIconPublic;
  new (): RuxIconPublic;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
