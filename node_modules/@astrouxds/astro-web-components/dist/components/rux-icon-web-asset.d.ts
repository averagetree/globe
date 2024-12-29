import type { Components, JSX } from "../types/components";

interface RuxIconWebAsset extends Components.RuxIconWebAsset, HTMLElement {}
export const RuxIconWebAsset: {
  prototype: RuxIconWebAsset;
  new (): RuxIconWebAsset;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
