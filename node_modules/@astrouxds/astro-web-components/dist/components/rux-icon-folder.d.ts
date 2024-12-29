import type { Components, JSX } from "../types/components";

interface RuxIconFolder extends Components.RuxIconFolder, HTMLElement {}
export const RuxIconFolder: {
  prototype: RuxIconFolder;
  new (): RuxIconFolder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
