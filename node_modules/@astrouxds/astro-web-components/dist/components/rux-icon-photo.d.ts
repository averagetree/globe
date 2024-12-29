import type { Components, JSX } from "../types/components";

interface RuxIconPhoto extends Components.RuxIconPhoto, HTMLElement {}
export const RuxIconPhoto: {
  prototype: RuxIconPhoto;
  new (): RuxIconPhoto;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
