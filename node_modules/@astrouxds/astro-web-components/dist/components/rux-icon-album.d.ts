import type { Components, JSX } from "../types/components";

interface RuxIconAlbum extends Components.RuxIconAlbum, HTMLElement {}
export const RuxIconAlbum: {
  prototype: RuxIconAlbum;
  new (): RuxIconAlbum;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
