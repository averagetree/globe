import type { Components, JSX } from "../types/components";

interface RuxIconBookmarks extends Components.RuxIconBookmarks, HTMLElement {}
export const RuxIconBookmarks: {
  prototype: RuxIconBookmarks;
  new (): RuxIconBookmarks;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
