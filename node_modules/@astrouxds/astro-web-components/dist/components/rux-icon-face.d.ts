import type { Components, JSX } from "../types/components";

interface RuxIconFace extends Components.RuxIconFace, HTMLElement {}
export const RuxIconFace: {
  prototype: RuxIconFace;
  new (): RuxIconFace;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
