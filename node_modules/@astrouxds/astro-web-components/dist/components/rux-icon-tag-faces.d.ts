import type { Components, JSX } from "../types/components";

interface RuxIconTagFaces extends Components.RuxIconTagFaces, HTMLElement {}
export const RuxIconTagFaces: {
  prototype: RuxIconTagFaces;
  new (): RuxIconTagFaces;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
