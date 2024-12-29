import type { Components, JSX } from "../types/components";

interface RuxIconInfo extends Components.RuxIconInfo, HTMLElement {}
export const RuxIconInfo: {
  prototype: RuxIconInfo;
  new (): RuxIconInfo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
