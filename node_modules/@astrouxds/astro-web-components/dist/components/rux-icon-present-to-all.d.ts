import type { Components, JSX } from "../types/components";

interface RuxIconPresentToAll extends Components.RuxIconPresentToAll, HTMLElement {}
export const RuxIconPresentToAll: {
  prototype: RuxIconPresentToAll;
  new (): RuxIconPresentToAll;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
